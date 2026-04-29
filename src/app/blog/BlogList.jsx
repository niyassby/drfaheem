import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabaseClient'
import { Instagram, Twitter, Facebook, Linkedin, CalendarCheck, ShieldCheck, Clock, Heart, Mail, ArrowUpRight } from 'lucide-react'
import Footer from '@/components/Navbar/Footer'
import BlogLoader from '@/components/ui/BlogLoader'


export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('posts')
        .select(`
           id, title, slug, excerpt, cover_image_url, category, published_at,
           authors ( name )
        `)
        .not('published_at', 'is', null)
        .order('published_at', { ascending: false })
      
      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching blog posts:', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* Blog Listing Hero Section */}
      <section className="pt-32 pb-16 max-w-4xl mx-auto px-6 lg:px-8 text-center">
         <div className="pb-8">
            <h4 className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-amber-100 shadow-sm">
              Insights & Discoveries 
            </h4>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                Official <span className="text-[#2C4A4A] italic relative inline-block z-10">
                Clinical Blog 
                 <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
               </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our latest insights, clinical research, and practical advice curated by Dr. Faheem and our expert clinical team to support your journey to total health.
            </p>
         </div>
      </section>

      {/* Grid Layout for Minimalist Blog Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {loading ? (
          <BlogLoader inline={true} label="Loading ..." />
        ) : posts.length === 0 ? (
          <div className="py-20 text-slate-400 font-medium text-lg">No articles discovered.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map(post => (
              <Link to={`/explore-blog/${post.slug}`} key={post.id} className="group block focus:outline-none">
                 {/* Card Cover (Massive Rounded Border Style) */}
                 <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-5 relative shadow-sm">
                   {post.cover_image_url ? (
                     <img 
                       src={post.cover_image_url} 
                       alt={post.title} 
                       className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                     />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 font-medium">
                        No Profile Image
                      </div>
                   )}
                 </div>
                 
                 {/* Card Typography Content */}
                 <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug mb-2 transition-colors group-hover:text-primary-700">
                      {post.title}
                    </h3>
                    <p className="text-[0.8rem] font-medium text-slate-500">
                      by <span className="text-slate-700">{post.authors?.name || 'Editorial Team'}</span> on <span className="text-amber-500">{post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit'}) : 'Draft'}</span>
                    </p>
                 </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Dual CTA Banners Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Join Our Community (Dark Green) */}
            <div className="bg-[#2C4A4A] rounded-2xl p-10 md:p-14 text-white relative overflow-hidden shadow-lg h-full flex flex-col justify-center">
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-emerald-50">Join the Integrative Healing Community</h2>
<p className="text-emerald-100/90 leading-relaxed font-light mb-10 max-w-md text-lg">
              Receive Dr. Faheem's latest insights bridging modern oncology with time-tested holistic traditions. Subscribe for evidence-based wellness strategies delivered directly to your inbox.
            </p>
                 <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/dr.faheem_najeeb" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Instagram size={18} className="text-emerald-50" />
                    </a>
                    <a href="" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Facebook size={18} className="text-emerald-50" />
                    </a>
                    <a href="https://www.linkedin.com/in/dr-faheem-najeeb-829872b4/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Linkedin size={18} className="text-emerald-50" />
                    </a>
                 </div>
               </div>
               
               {/* Abstract Wavy Shapes mimicking mockup */}
               <svg className="absolute bottom-0 left-0 w-full h-[50%] opacity-20 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                 <path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
               </svg>
            </div>

            {/* Share Your Story (Light Gray) */}
            <div className="bg-[#F8F8F8] rounded-2xl p-10 md:p-14 text-slate-800 shadow-sm h-full flex flex-col justify-center">
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900">Share Your <br className="hidden md:block"/> Healing Journey</h2>
<p className="text-stone-600 leading-relaxed font-light mb-8 text-lg">
            Every journey through cancer is profoundly personal, yet universally inspiring. Have you experienced a breakthrough with integrative therapies? We would be honored to feature your story on Dr. Faheem's platform to give hope to others.
          </p>
<a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@drfaheem.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm mb-10 flex items-center justify-between group cursor-pointer hover:border-amber-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                <Mail className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-stone-500 font-medium mb-1">Submit your story & photos to:</p>
                <p className="text-stone-900 font-semibold text-lg group-hover:text-amber-600 transition-colors">drfaheem@tigrisvalley.com</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </a>
 <div className="mt-auto border-l-4 border-amber-400 pl-5 py-2">
            <p className="text-stone-600 leading-relaxed font-light text-sm max-w-sm">
              <strong className="text-stone-900 font-medium">Thank you</strong> for visiting our clinical blog. We are privileged to be part of your journey toward a balanced, informed, and holistic life.
            </p>
          </div>
            </div>
         </div>
      </section>

      {/* Feature Promises Row */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 pt-8">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-start">
               <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <CalendarCheck size={20} className="text-amber-600" />
               </div>
               <h4 className="text-lg font-bold text-slate-800 leading-tight">Easy<br/>Scheduling</h4>
            </div>

            <div className="flex flex-col items-start">
               <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <ShieldCheck size={20} className="text-amber-600" />
               </div>
               <h4 className="text-lg font-bold text-slate-800 leading-tight">Expert<br/>Network</h4>
            </div>

            <div className="flex flex-col items-start">
               <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Clock size={20} className="text-amber-600" />
               </div>
               <h4 className="text-lg font-bold text-slate-800 leading-tight">24/7<br/>Support</h4>
            </div>

            <div className="flex flex-col items-start">
               <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-5 shrink-0 shadow-sm">
                  <Heart size={20} className="text-amber-600" />
               </div>
               <h4 className="text-lg font-bold text-slate-800 leading-tight">Holistic<br/>Approach</h4>
            </div>

         </div>
      </section> */}

      <Footer />
    </div>
  )
}
