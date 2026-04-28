import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Footer from '@/components/Navbar/Footer'
import BlogLoader from '@/components/ui/BlogLoader'
import Popup from '@/components/Contact/Popup'

// Dynamic Content Renderer Switch Component
const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case 'heading':
      // Extract h2, h3 logic based on markdown-like simple approach or standard h2
      return (
        <h2 id={block.content.replace(/\s+/g, '-').toLowerCase()} className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-serif text-gray-900 leading-tight">
          {block.content}
        </h2>
      )
    case 'paragraph':
      return (
        <p className="text-[1.2rem] md:text-xl leading-[1.75] mb-6 text-gray-800 font-sans whitespace-pre-wrap">
          {block.content}
        </p>
      )
    case 'image':
      return (
        <figure className="my-12 w-full ">
          <img
            src={block.content}
            alt="Blog content"
            className="w-full rounded-sm bg-gray-50 mx-auto shadow-sm"
            loading="lazy"
          />
        </figure>
      )
    case 'video':
      return (
        <figure className="my-12 w-full">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <iframe
              width="100%"
              height="100%"
              src={block.content}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full bg-black"
            ></iframe>
          </div>
        </figure>
      )
    case 'reference':
      return (
        <div className="rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm p-4 mb-4 flex items-start gap-4">
          {block.index && (
            <div className="flex bg-slate-100 rounded-md h-8 w-8 items-center justify-center text-sm font-medium text-slate-900 shrink-0">
              {block.index}
            </div>
          )}
          <div className="flex-1 pt-1.5">
            <p className="text-sm font-medium leading-normal mb-2">
              {block.title}
            </p>
            {block.url && (
              <a href={block.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary-700  hover:text-primary-800 transition-colors inline-flex items-center gap-1 group">
                View Source <ExternalLink size={12} className="group-hover:translate-x-[1px] transition-transform " />
              </a>
            )}
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPost()
    // Scroll to top on slug change
    window.scrollTo(0, 0)
  }, [slug])

  async function fetchPost() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select('*, authors(*)')
        .eq('slug', slug)
        .single()

      if (error) throw error

      // Sort blocks ascending by position key to ensure exact ordering
      if (data && data.content_blocks) {
        data.content_blocks.sort((a, b) => a.position - b.position)
      }

      setPost(data)

      if (data && data.category) {
        const { data: relatedData } = await supabase
          .from('posts')
          .select('id, title, slug, cover_image_url')
          .eq('category', data.category)
          .neq('id', data.id)
          .not('published_at', 'is', null)
          .limit(3)
        setRelatedPosts(relatedData || [])
      }

    } catch (error) {
      console.error('Error fetching post:', error.message)
      setPost(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <BlogLoader label="Loading ..." />
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-serif text-gray-500 pt-32">
        <h2 className="text-2xl mb-4 text-black">Article not found</h2>
        <Link to="/explore-blogs" className="border border-black px-6 py-2 uppercase text-sm font-bold tracking-widest text-black hover:bg-black hover:text-white transition-colors">
          Return to Blog
        </Link>
      </div>
    )
  }

  // Extract headings for Table of Contents
  const headings = post.content_blocks?.filter(block => block.type === 'heading') || []

  return (
    <article className="min-h-screen bg-white">
      {/* Blog Post Header Image & Overlay */}
      <section className="relative h-[75vh] md:h-[85vh] flex flex-col justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${post.cover_image_url || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000'})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
          {post.category && (
            <span className="inline-block bg-white px-4 py-1.5 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-sm">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-serif leading-[1.1] mb-6 mx-auto">
            {post.title}
          </h1>
          <div className="text-white/80 text-sm font-medium tracking-[0.2em] uppercase">
            {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            }) : 'Draft Mode'}
          </div>
        </div>
      </section>

      {/* Main Content Area - 3 Column Layout */}
      <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">

        <div className="mb-12 border-b border-gray-100 pb-8 flex items-center justify-between">
          <Link to="/explore-blogs" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-black transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_350px] gap-12 lg:gap-20">

          {/* Center Column (Main Content) */}
          <main className="w-full">
            <div className="max-w-4xl">
              {post.content_blocks && post.content_blocks.length > 0 ? (
                post.content_blocks.map((block) => (
                  <BlockRenderer key={block.id} block={block} />
                ))
              ) : (
                <p className="italic text-gray-400 font-serif border-l-4 pl-4 border-gray-200">This article has no content blocks yet.</p>
              )}
            </div>
          </main>

          {/* Right Sidebar (Author, Related, CTA) */}
          <aside className="space-y-12">
            <div className="sticky top-32 space-y-12">

              {/* Author Widget */}
              {post.authors && (
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-2">About the Author</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 overflow-hidden border border-gray-200">
                      <img src={post.authors.image_url || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80"} alt={post.authors.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-gray-900 mb-1">{post.authors.name}</h4>
                      {post.authors.titles && <p className="text-xs text-gray-400 font-bold tracking-wider mb-3 leading-tight">{post.authors.titles}</p>}

                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans pb-4 border-b border-gray-200">
                    {post.authors.bio}
                  </p>
                  <Link to="/panel" className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.1em] hover:text-[#a46043] transition-colors">
                    Meet the Team →
                  </Link>
                </div>
              )}



              {/* Newsletter/CTA */}
              <div className="bg-primary-700 rounded text-white p-8 text-center text-sm font-sans flex flex-col items-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-white">Path to Healing</h4>
                <p className="mb-6 opacity-80 leading-relaxed">Book a personalized consultation to integrate these methods into your recovery plan.</p>
                <Popup>
                  <button className="bg-white text-black font-bold uppercase tracking-widest text-xs py-3 px-6 hover:bg-gray-100 transition-colors w-full">
                    Consult Now
                  </button>
                </Popup>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-100 pb-2">Related Reading</h4>
                  <div className="space-y-6">
                    {relatedPosts.map(rp => (
                      <Link to={`/explore-blog/${rp.slug}`} key={rp.id} className="group flex gap-4 items-center">
                        <div className="w-20 h-20 bg-gray-100 flex-shrink-0 overflow-hidden">
                          {rp.cover_image_url && <img src={rp.cover_image_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />}
                        </div>
                        <h5 className="font-bold text-sm font-serif leading-tight group-hover:text-[#a46043] transition-colors">
                          {rp.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>
      </section>
      <Footer />
    </article>
  )
}
