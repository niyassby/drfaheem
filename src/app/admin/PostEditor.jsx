import React, { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers'
import { supabase } from '../../lib/supabaseClient'
import BlockItem from '../../components/admin/BlockItem'
import { ArrowLeft, Save, Plus, Type, Heading1, Image as ImageIcon, Loader2, BookOpen, Youtube } from 'lucide-react'
import { toast } from "sonner"
import BlogLoader from '@/components/ui/BlogLoader'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function PostEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNew = id === 'new'

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [availableAuthors, setAvailableAuthors] = useState([])
  const [post, setPost] = useState({
    title: '',
    slug: '',
    category: '',
    cover_image_url: '',
    excerpt: '',
    published_at: null,
    author_id: ''
  })
  const [blocks, setBlocks] = useState([])
  const [activeBlockId, setActiveBlockId] = useState(null)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  useEffect(() => {
    fetchInitialData()
  }, [id])

  async function fetchInitialData() {
    try {
      setLoading(true)
      
      // Fetch Author Dictionary for Dropdown
      const { data: authorsData } = await supabase.from('authors').select('id, name')
      setAvailableAuthors(authorsData || [])

      if (!isNew) {
        const { data, error } = await supabase.from('posts').select('*').eq('id', id).single()
        if (error) throw error
        if (data) {
          setPost({
            title: data.title,
            slug: data.slug,
            category: data.category,
            excerpt: data.excerpt,
            cover_image_url: data.cover_image_url,
            published_at: data.published_at,
            author_id: data.author_id || ''
          })
          
          // Ensure blocks are sorted by position before setting state
          const loadedBlocks = data.content_blocks || []
          loadedBlocks.sort((a, b) => a.position - b.position)
          setBlocks(loadedBlocks)
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error.message)
      alert('Could not load data.')
    } finally {
      setLoading(false)
    }
  }

  const handlePostChange = (e) => {
    const { name, value } = e.target
    setPost(prev => ({ ...prev, [name]: value }))
  }

  const handleCoverImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      setSaving(true) // Reusing saving state for simplicity to show loading
      const fileExt = file.name.split('.').pop()
      const fileName = `cover-${Math.random()}.${fileExt}`
      const filePath = `post-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('blog-media')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('blog-media')
        .getPublicUrl(filePath)

      setPost(prev => ({ ...prev, cover_image_url: publicUrl }))
    } catch (error) {
      console.error('Cover Upload error:', error.message)
      alert('Error uploading cover image. Check your bucket permissions.')
    } finally {
      setSaving(false)
    }
  }

  const addBlock = (type) => {
    const newBlockId = crypto.randomUUID()
    const newBlock = {
      id: newBlockId,
      type,
      content: '',
      position: 0
    }
    
    setBlocks(prev => {
      let newBlocks = [...prev]
      if (activeBlockId) {
        const index = newBlocks.findIndex(b => b.id === activeBlockId)
        if (index !== -1) {
          newBlocks.splice(index + 1, 0, newBlock)
        } else {
          newBlocks.push(newBlock)
        }
      } else {
        newBlocks.push(newBlock)
      }
      return newBlocks.map((b, i) => ({ ...b, position: i }))
    })

    setActiveBlockId(newBlockId)

    setTimeout(() => {
      document.getElementById(`block-${newBlockId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const updateBlockContent = (blockId, payload) => {
    setBlocks(prev => prev.map(b => {
      if (b.id === blockId) {
         if (typeof payload === 'object' && payload !== null) {
            return { ...b, ...payload }
         }
         return { ...b, content: payload }
      }
      return b
    }))
  }

  const deleteBlock = (blockId) => {
    setBlocks(prev => {
      const newBlocks = prev.filter(b => b.id !== blockId)
      return newBlocks.map((b, index) => ({ ...b, position: index }))
    })
    if (activeBlockId === blockId) setActiveBlockId(null)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
        const newArray = arrayMove(items, oldIndex, newIndex)
        // Reset positions based on new array order
        return newArray.map((item, index) => ({ ...item, position: index }))
      })
    }
  }

  const handleSave = async () => {
    if (!post.title || !post.slug) {
      alert('Title and Slug are required.')
      return
    }

    try {
      setSaving(true)
      const payload = {
        ...post,
        content_blocks: blocks
      }

      if (isNew) {
        const { data, error } = await supabase.from('posts').insert(payload).select().single()
        if (error) throw error
        // Redirect to edit mode
        navigate(`/admin/blog/edit/${data.id}`, { replace: true })
      } else {
        const { error } = await supabase.from('posts').update(payload).eq('id', id)
        if (error) throw error
      }
      toast.success('Post saved successfully!')
      setTimeout(() => navigate('/admin/blog'), 1000)
    } catch (error) {
      console.error('Error saving post:', error.message)
      toast.error('Failed to save post.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <BlogLoader label="Loading ..." />

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-28">
      {/* Top Navbar */}
      <div className="bg-white border-b sticky top-[80px] md:top-[100px] z-20 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/admin/blog')} className="text-gray-500 hover:text-black transition flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold">{isNew ? 'Create New Post' : 'Edit Post'}</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
            <input
              type="checkbox"
              checked={!!post.published_at}
              onChange={(e) => setPost(p => ({ ...p, published_at: e.target.checked ? new Date().toISOString() : null }))}
              className="rounded border-gray-300 text-black focus:ring-0"
            />
            Published
          </label>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      <div className="flex-grow flex justify-center p-6">
        <div className="w-full max-w-4xl space-y-8">
          
          {/* Post Meta Data Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handlePostChange}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                  <input
                    type="text"
                    name="slug"
                    value={post.slug}
                    onChange={handlePostChange}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black"
                  />
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={post.category || ''}
                    onChange={handlePostChange}
                    className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black"
                  />
                </div>
<div className="space-y-2">
  <label className="text-sm font-medium text-gray-700">
    Author
  </label>

  <Select
    value={post.author_id || ""}
    onValueChange={(value) =>
      handlePostChange({
        target: { name: "author_id", value },
      })
    }
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="-- No Author --" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="none">-- No Author --</SelectItem>

      {availableAuthors.map((a) => (
        <SelectItem key={a.id} value={a.id}>
          {a.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
                {post.cover_image_url ? (
                  <div className="relative w-full h-32 border rounded-md overflow-hidden bg-gray-100 group mt-2">
                    <img src={post.cover_image_url} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <label className="text-white text-sm font-medium cursor-pointer border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition-colors">
                         Change
                         <input type="file" accept="image/*" onChange={handleCoverImageUpload} className="hidden" />
                       </label>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors mt-2">
                    <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 w-full h-full">
                      <ImageIcon size={24} className="mb-2" />
                      <span className="text-sm">Upload Cover</span>
                      <input type="file" accept="image/*" onChange={handleCoverImageUpload} className="hidden" />
                    </label>
                  </div>
                )}
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (for cards)</label>
                <textarea
                  name="excerpt"
                  value={post.excerpt || ''}
                  onChange={handlePostChange}
                  className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black resize-none h-20"
                />
             </div>
          </div>

          {/* Block Editor Area */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gray-50 border-b border-gray-200 pb-2">Content Builder</h2>
            
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
            >
              <SortableContext
                items={blocks.map(b => b.id)}
                strategy={verticalListSortingStrategy}
              >
                <div className="min-h-[200px]">
                  {blocks.length === 0 ? (
                    <div className="text-center py-10 bg-white border border-dashed border-gray-300 rounded-lg text-gray-500">
                      No blocks added yet. Start building your post below.
                    </div>
                  ) : (
                    blocks.map((block) => (
                      <div key={block.id} id={`block-${block.id}`}>
                        <BlockItem
                          block={block}
                          onChange={updateBlockContent}
                          onDelete={deleteBlock}
                          isActive={activeBlockId === block.id}
                          onClick={() => setActiveBlockId(block.id)}
                        />
                      </div>
                    ))
                  )}
                </div>
              </SortableContext>
            </DndContext>

            {/* Fixed Add Block Floating Toolbar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-200 rounded-full p-1.5 flex items-center justify-center gap-1">
              <span className="text-[0.65rem] text-slate-400 px-4 uppercase tracking-[0.2em] font-bold border-r border-slate-200 select-none mr-1">Insert</span>
              
              <button
                onClick={() => addBlock('heading')}
                className="p-2.5 text-slate-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center group cursor-pointer"
                title="Add Heading"
              >
                <Heading1 size={18} className="group-hover:scale-110 transition-transform" /> 
              </button>
              
              <button
                onClick={() => addBlock('paragraph')}
                className="p-2.5 text-slate-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center group cursor-pointer"
                title="Add Text Block"
              >
                <Type size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={() => addBlock('image')}
                className="p-2.5 text-slate-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center group cursor-pointer"
                title="Add Image"
              >
                <ImageIcon size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={() => addBlock('reference')}
                className="p-2.5 text-slate-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center group cursor-pointer"
                title="Add Reference"
              >
                <BookOpen size={18} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={() => addBlock('video')}
                className="p-2.5 text-red-500 hover:text-red-700 hover:bg-white hover:shadow-sm rounded-full transition-all flex items-center group cursor-pointer"
                title="Add YouTube Video"
              >
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
