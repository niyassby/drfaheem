import React from 'react'
import Section2 from '../components/home/section2'
import Package from '@/components/home/Package'
import TeamSec from '@/components/home/TeamSec'
import IconSection from '@/components/home/IconSection'
import Hero2 from '@/components/home/Hero2'
import Footer from '@/components/Navbar/Footer'
import { ContactForm } from '@/components/home/ContactUs'

function Home() {
  return (
    <div>
      <Hero2/>
      {/* <IconSection/> */}
      {/* <TeamSec teamPage /> */}
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home