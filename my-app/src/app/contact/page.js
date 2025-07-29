import LocationLink from '@/Alllogosection/LocationLink'
import Footerpage from '@/components/Footerpage'
import Headerpage from '@/components/Headerpage'
import Logosection from '@/components/Logosection'
import Subsericotionsection from '@/components/Subsericotionsection'
import React from 'react'

const page = () => {
  return (
    <>

      <Headerpage />
      <div className="max-w-8xl mx-auto p-28 my-10 '>
 pt-18">
        <Subsericotionsection />
      </div>

      <div className='flex justify-center  '>

        <LocationLink />
      </div>

      <Footerpage />

    </>
  )
}

export default page