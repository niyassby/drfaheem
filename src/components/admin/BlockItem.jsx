import React, { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react'
import { supabase } from '../../lib/supabaseClient'

export default function BlockItem({ block, onChange, onDelete, isActive, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id })

  const [isUploading, setIsUploading] = useState(false)

  const style = {
    transform: isDragging && transform ? `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.02)` : CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    opacity: isDragging ? 0.95 : 1,
  }

  const handleContentChange = (e) => {
    onChange(block.id, e.target.value)
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    try {
      setIsUploading(true)
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `post-images/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('blog-media')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('blog-media')
        .getPublicUrl(filePath)

      onChange(block.id, publicUrl)
    } catch (error) {
      console.error('Upload error:', error.message)
      alert('Error uploading image. Make sure you created a "blog-media" public bucket.')
    } finally {
      setIsUploading(false)
    }
  }

  const renderContent = () => {
    switch (block.type) {
      case 'heading':
        return (
          <input
            type="text"
            className="w-full text-2xl font-bold bg-transparent border-0 focus:ring-0 p-0 placeholder-slate-300 text-slate-900"
            placeholder="Heading text..."
            value={block.content}
            onChange={handleContentChange}
          />
        )
      case 'paragraph':
        return (
          <textarea
            className="w-full text-lg leading-relaxed bg-transparent border-0 focus:ring-0 p-0 placeholder-slate-300 text-slate-700 min-h-[100px] resize-y"
            placeholder="Type your paragraph..."
            value={block.content}
            onChange={handleContentChange}
          />
        )
      case 'image':
        return (
          <div className="w-full border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors relative overflow-hidden min-h-[200px]">
             {isUploading && (
               <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 backdrop-blur-sm">
                 <Loader2 className="animate-spin text-slate-400" size={32} />
               </div>
             )}
             
            {block.content ? (
               <div className="relative group/image w-full flex justify-center">
                 <img src={block.content} alt="Block content" className="max-h-[500px] object-contain rounded-lg shadow-sm w-full" />
                 <div className="absolute top-4 right-4 opacity-0 group-hover/image:opacity-100 transition-opacity">
                    <label className="bg-white/90 shadow-md px-4 py-2 rounded-lg text-sm font-bold text-slate-700 cursor-pointer hover:bg-white transition-colors backdrop-blur-sm">
                       Replace Image
                       <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                 </div>
               </div>
            ) : (
              <>
               <ImageIcon size={48} className="mb-4 text-slate-300" />
               <p className="mb-4 font-medium text-slate-600">Click to upload media</p>
               <input
                 type="file"
                 accept="image/*"
                 onChange={handleImageUpload}
                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
               />
              </>
            )}
          </div>
        )
      case 'reference':
        return (
          <div className="space-y-4 w-full pt-1">
            <div className="flex gap-4">
              <div className="w-24">
                <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Index #</label>
                <input
                  type="number"
                  className="w-full text-sm border-slate-200 rounded-lg p-2.5 focus:ring-1 focus:ring-slate-300 focus:border-slate-300 bg-slate-50 focus:bg-white transition-colors"
                  value={block.index || ''}
                  onChange={(e) => onChange(block.id, { index: e.target.value })}
                />
              </div>
              <div className="flex-1">
                <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Citation Title</label>
                <input
                  type="text"
                  className="w-full text-sm font-medium border-slate-200 rounded-lg p-2.5 focus:ring-1 focus:ring-slate-300 focus:border-slate-300 bg-slate-50 focus:bg-white transition-colors text-slate-800"
                  value={block.title || ''}
                  placeholder="e.g. Scientific and Medical Aspects of Ozone Therapy..."
                  onChange={(e) => onChange(block.id, { title: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Source URL</label>
              <input
                type="url"
                className="w-full text-sm font-mono border-slate-200 rounded-lg p-2.5 focus:ring-1 focus:ring-slate-300 focus:border-slate-300 bg-slate-50 focus:bg-white transition-colors text-slate-600"
                value={block.url || ''}
                placeholder="https://..."
                onChange={(e) => onChange(block.id, { url: e.target.value })}
              />
            </div>
          </div>
        )
      case 'video':
        return (
          <div className="space-y-4 w-full pt-1">
             <div className="flex flex-col gap-2">
                <label className="block text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest">YouTube Embed URL</label>
                <input
                  type="text"
                  className="w-full text-sm font-mono border-slate-200 rounded-lg p-2.5 focus:ring-1 focus:ring-slate-300 focus:border-slate-300 bg-slate-50 focus:bg-white transition-colors text-slate-600"
                  value={block.content || ''}
                  placeholder="https://www.youtube.com/embed/..."
                  onChange={(e) => {
                     let val = e.target.value;
                     if (val.includes('<iframe') && val.includes('src="')) {
                        const match = val.match(/src="([^"]+)"/);
                        if (match) val = match[1];
                     }
                     onChange(block.id, val);
                  }}
                />
                <p className="text-xs text-slate-400 mb-2 font-medium">To get this, right click a video on YouTube and select "Copy embed code", or simply paste the /embed/ link here.</p>
             </div>
             {block.content && block.content.includes('youtube.com') && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-black">
                   <iframe
                     width="100%"
                     height="100%"
                     src={block.content}
                     title="YouTube video preview"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                   ></iframe>
                </div>
             )}
          </div>
        )
      default:
        return <div className="p-4 text-red-500 font-bold border border-red-200 bg-red-50 w-full mt-2 rounded">Unknown block type: {block.type}</div>
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={onClick}
      className={`group flex items-start gap-4 p-5 rounded-2xl bg-white border transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isActive ? 'border-primary-500 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-primary-500/20 z-10' : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
      } ${
        isDragging ? '!shadow-2xl !border-primary-500 !ring-2 !ring-primary-500' : 'mb-4'
      }`}
    >
      <div
        {...attributes}
        {...listeners}
        className={`mt-1.5 p-1.5 rounded-md cursor-grab active:cursor-grabbing flex-shrink-0 transition-colors ${isActive ? 'text-primary-500 bg-primary-50 hover:bg-primary-100' : 'text-slate-300 hover:text-slate-600 hover:bg-slate-100'}`}
      >
        <GripVertical size={24} />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center mb-2">
           <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
             {block.type}
           </span>
           <button
             onClick={() => onDelete(block.id)}
             className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
             title="Delete block"
           >
             <Trash2 size={18} />
           </button>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}
