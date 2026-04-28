import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default function AdminAuthorList() {
  const [authors, setAuthors] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchAuthors()
  }, [])

  async function fetchAuthors() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('authors')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setAuthors(data || [])
    } catch (error) {
      console.error('Error fetching authors:', error.message)
      alert('Could not load authors.')
    } finally {
      setLoading(false)
    }
  }

  async function deleteAuthor(id) {
    if (!window.confirm("Are you sure you want to delete this Author? This will nullify the author association on their posts!")) return
    
    try {
      const { error } = await supabase.from('authors').delete().eq('id', id)
      if (error) throw error
      setAuthors(p => p.filter(x => x.id !== id))
    } catch (error) {
      console.error('Error deleting author:', error.message)
      alert('Could not delete author.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctors / Authors</h1>
          <Link
            to="/admin/authors/edit/new"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <Plus size={20} />
            Add Doctor
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading authors...</div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titles</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {authors.map((author) => (
                  <tr key={author.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                         {author.image_url && <img src={author.image_url} alt={author.name} className="w-full h-full object-cover" />}
                      </div>
                      <div className="font-medium text-gray-900">{author.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis max-w-[300px]">
                      {author.titles || 'No titles'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => navigate(`/admin/authors/edit/${author.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => deleteAuthor(author.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {authors.length === 0 && (
                  <tr>
                    <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                      No authors found. Create one to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
