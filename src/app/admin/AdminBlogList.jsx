import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { Plus, Edit, Trash2, FileText, Users, AlertTriangle, ExternalLink, LogOut } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import BlogLoader from '@/components/ui/BlogLoader'

export default function AdminBlogList() {
  const [activeTab, setActiveTab] = useState('posts')
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Modal State
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  
  const [alertModalOpen, setAlertModalOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      
      const [postsRes, authorsRes] = await Promise.all([
        supabase.from('posts').select('id, title, slug, published_at, created_at').order('created_at', { ascending: false }),
        supabase.from('authors').select('*').order('created_at', { ascending: false })
      ])

      if (postsRes.error) throw postsRes.error
      if (authorsRes.error) throw authorsRes.error

      setPosts(postsRes.data || [])
      setAuthors(authorsRes.data || [])
    } catch (error) {
      console.error('Error fetching data:', error.message)
      showAlert('Could not load dashboard data. Please check your connection or permissions.')
    } finally {
      setLoading(false)
    }
  }

  function showAlert(msg) {
    setAlertMessage(msg)
    setAlertModalOpen(true)
  }

  function requestDelete(id, type, name) {
    setItemToDelete({ id, type, name })
    setConfirmModalOpen(true)
  }

  async function executeDelete() {
    if (!itemToDelete) return
    const { id, type } = itemToDelete

    setConfirmModalOpen(false)
    
    try {
      if (type === 'post') {
        const { error } = await supabase.from('posts').delete().eq('id', id)
        if (error) throw error
        setPosts(p => p.filter(x => x.id !== id))
      } else if (type === 'author') {
        const { error } = await supabase.from('authors').delete().eq('id', id)
        if (error) throw error
        setAuthors(a => a.filter(x => x.id !== id))
      }
    } catch (error) {
      console.error('Error deleting:', error.message)
      showAlert(`Could not delete ${type}.`)
    } finally {
      setItemToDelete(null)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-32">
      
      {/* Alert Modal */}
      <Dialog open={alertModalOpen} onOpenChange={setAlertModalOpen}>
        <DialogContent className="max-w-sm rounded-[1rem] p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" aria-hidden="true" />
            </div>
            <DialogTitle className="text-lg font-bold text-slate-900 mb-2">Error</DialogTitle>
            <DialogDescription className="text-sm text-slate-500 mb-6 font-medium">
              {alertMessage}
            </DialogDescription>
            <button
              onClick={() => setAlertModalOpen(false)}
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Acknowledge
            </button>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={confirmModalOpen} onOpenChange={setConfirmModalOpen}>
        <DialogContent className="max-w-md rounded-[1rem] p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-slate-900">Confirm Deletion</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-slate-600 mt-3 font-medium">
              Are you sure you want to delete <strong className="text-slate-900 font-bold">"{itemToDelete?.name}"</strong>? 
              {itemToDelete?.type === 'author' && " This will permanently nullify the author association on their existing posts."}
              <br/><br/>This action cannot be undone.
            </DialogDescription>
            <DialogFooter className="mt-6 flex gap-3 sm:justify-start">
               <button
                  onClick={() => setConfirmModalOpen(false)}
                  className="px-4 py-2 bg-white text-slate-700 font-medium border border-slate-300 rounded-md hover:bg-slate-50 transition-colors shadow-sm"
               >
                 Cancel
               </button>
               <button
                  onClick={executeDelete}
                  className="px-4 py-2 bg-red-600 text-white font-medium border border-transparent rounded-md hover:bg-red-700 transition-colors shadow-sm"
               >
                 Delete {itemToDelete?.type === 'post' ? 'Post' : 'Doctor'}
               </button>
            </DialogFooter>
        </DialogContent>
      </Dialog>


      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
             <h1 className="text-3xl font-bold text-slate-900 tracking-tight">System Dashboard</h1>
             <p className="text-slate-500 mt-1 font-medium">Manage your content engine and medical panel.</p>
          </div>
          <div className="flex items-center gap-3">
             <Link
               to={activeTab === 'posts' ? "/admin/blog/edit/new" : "/admin/authors/edit/new"}
               className="flex items-center gap-2 bg-primary-700 text-white px-5 py-2.5 rounded-lg hover:bg-primary-800 transition-colors shadow-sm font-medium text-sm"
             >
               <Plus size={18} />
               Add {activeTab === 'posts' ? 'Post' : 'Doctor'}
             </Link>
             <button
               onClick={async () => {
                 await supabase.auth.signOut()
                 navigate('/admin')
               }}
               className="flex items-center gap-2 bg-white text-slate-700 border border-slate-300 px-5 py-2.5 rounded-lg hover:bg-slate-50 transition-colors shadow-sm font-medium text-sm"
             >
               <LogOut size={18} />
               Logout
             </button>
          </div>
        </div>

        {/* Custom Tabs */}
        <div className="flex gap-2 border-b border-slate-200 mb-8 pb-px">
           <button
             onClick={() => setActiveTab('posts')}
             className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'posts' ? 'border-primary-700 text-primary-800' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
           >
             <FileText size={18} /> Articles
           </button>
           <button
             onClick={() => setActiveTab('authors')}
             className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'authors' ? 'border-primary-700 text-primary-800' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}`}
           >
             <Users size={18} /> Doctors Panel
           </button>
        </div>

        {loading ? (
          <BlogLoader label="Loading ..." inline />
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            
            {activeTab === 'posts' && (
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="font-bold text-slate-900">{post.title}</div>
                        <div className="text-sm font-medium text-slate-500 mt-1">{post.slug}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-[0.65rem] uppercase tracking-widest leading-5 font-bold rounded-md ${post.published_at ? 'bg-emerald-100/50 text-emerald-700 border border-emerald-200' : 'bg-amber-100/50 text-amber-700 border border-amber-200'}`}>
                          {post.published_at ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-slate-600">
                        {new Date(post.created_at).toLocaleDateString(undefined, {month: 'short', day: 'numeric', year: 'numeric'})}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm">
                        <div className="flex justify-end gap-3">
                          <button onClick={() => window.open(`#/explore-blog/${post.slug}`, '_blank')} className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md transition-colors" title="View Blog">
                            <ExternalLink size={18} />
                          </button>
                          <button onClick={() => navigate(`/admin/blog/edit/${post.id}`)} className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors" title="Edit Post">
                            <Edit size={18} />
                          </button>
                          <button onClick={() => requestDelete(post.id, 'post', post.title)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete Post">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {posts.length === 0 && (
                    <tr>
                      <td colSpan="4" className="px-6 py-12 text-center text-slate-500 font-medium">
                        No articles found. Create one to get started!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'authors' && (
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Doctor</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Titles</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {authors.map((author) => (
                    <tr key={author.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                           {author.image_url && <img src={author.image_url} alt={author.name} className="w-full h-full object-cover" />}
                        </div>
                        <div className="font-bold text-slate-900">{author.name}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium text-slate-500 max-w-[300px] truncate">
                        {author.titles || '—'}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm">
                        <div className="flex justify-end gap-3">
                          <button onClick={() => navigate(`/admin/authors/edit/${author.id}`)} className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
                            <Edit size={18} />
                          </button>
                          <button onClick={() => requestDelete(author.id, 'author', author.name)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {authors.length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-6 py-12 text-center text-slate-500 font-medium">
                        No doctors found. Create one to get started!
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

          </div>
        )}
      </div>
    </div>
  )
}
