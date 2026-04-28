import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { ArrowLeft, Save, Loader2, Image as ImageIcon } from 'lucide-react'
import { toast } from "sonner"
import BlogLoader from '@/components/ui/BlogLoader'

export default function AuthorEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isNew = id === 'new'

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [author, setAuthor] = useState({
    name: '',
    titles: '',
    bio: '',
    image_url: ''
  })

  useEffect(() => {
    if (!isNew) fetchAuthor()
  }, [id])

  async function fetchAuthor() {
    try {
      const { data, error } = await supabase.from('authors').select('*').eq('id', id).single()
      if (error) throw error
      if (data) {
        setAuthor({
          name: data.name,
          titles: data.titles,
          bio: data.bio,
          image_url: data.image_url,
        })
      }
    } catch (error) {
      console.error('Error fetching author:', error.message)
      alert('Could not load author data.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setAuthor(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      setSaving(true)
      const fileExt = file.name.split('.').pop()
      const fileName = `author-${Math.random()}.${fileExt}`
      const filePath = `post-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('blog-media')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('blog-media')
        .getPublicUrl(filePath)

      setAuthor(prev => ({ ...prev, image_url: publicUrl }))
    } catch (error) {
      console.error('Upload error:', error.message)
      alert('Error uploading profile picture. Check your bucket permissions.')
    } finally {
      setSaving(false)
    }
  }

  const handleSave = async () => {
    if (!author.name) {
      alert('Doctor Name is required.')
      return
    }

    try {
      setSaving(true)
      
      if (isNew) {
        const { data, error } = await supabase.from('authors').insert(author).select().single()
        if (error) throw error
        navigate(`/admin/authors/edit/${data.id}`, { replace: true })
      } else {
        const { error } = await supabase.from('authors').update(author).eq('id', id)
        if (error) throw error
      }
      toast.success('Author profile saved successfully!')
      setTimeout(() => navigate('/admin/blog'), 1000)
    } catch (error) {
      console.error('Error saving:', error.message)
      toast.error('Failed to save author.')
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
          <h1 className="text-xl font-bold">{isNew ? 'Add New Doctor' : 'Edit Doctor Profile'}</h1>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition disabled:opacity-50"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>

      <div className="flex-grow flex justify-center p-6">
        <div className="w-full max-w-4xl space-y-8">
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
                      <input
                        type="text"
                        name="name"
                        value={author.name}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black"
                        placeholder="e.g. Dr. Faheem Najeeb"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Professional Titles / Accreditations</label>
                      <input
                        type="text"
                        name="titles"
                        value={author.titles || ''}
                        onChange={handleChange}
                        className="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-black focus:border-black text-sm"
                        placeholder="e.g. MBBS, DEM (UK), CMT..."
                      />
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                  {author.image_url ? (
                    <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 group border-2 border-gray-200">
                      <img src={author.image_url} alt="Profile" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <label className="text-white text-xs font-medium cursor-pointer border border-white px-2 py-1 rounded hover:bg-white hover:text-black transition-colors">
                           Change
                           <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                         </label>
                      </div>
                    </div>
                  ) : (
                    <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                      <label className="flex flex-col items-center justify-center cursor-pointer text-gray-500 w-full h-full rounded-full">
                        <ImageIcon size={20} className="mb-1" />
                        <span className="text-xs">Upload</span>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      </label>
                    </div>
                  )}
                </div>
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Biography</label>
                <textarea
                  name="bio"
                  value={author.bio || ''}
                  onChange={handleChange}
                  className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-black focus:border-black min-h-[150px] leading-relaxed"
                  placeholder="Insert the author's biography text here..."
                />
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
