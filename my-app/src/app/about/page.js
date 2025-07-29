import AboutSection from '@/components/Aboutsection'
import Footerpage from '@/components/Footerpage'
import Headerpage from '@/components/Headerpage'
import React from 'react'

const page = () => {
  return (
    <>
      <Headerpage />

      <div className='max-w-8xl mx-auto pt-28'>
        <AboutSection />
      </div>

      <Footerpage />
    </>
  )
}

export default page