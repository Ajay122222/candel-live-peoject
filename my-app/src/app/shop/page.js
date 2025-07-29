import Footerpage from '@/components/Footerpage'
import Foursection from '@/components/Foursection'
import Headerpage from '@/components/Headerpage'
import Logosection from '@/components/Logosection'
import Shopepage from '../../components/Shopepage'
import Sixesection from '@/components/Sixesection'
import React from 'react'

const page = () => {
  return (
    <>
      <Headerpage />
      <div className="max-w-8xl mx-auto  pt-28">

       <Shopepage/>
        {/* <Sixesection/> */}
      </div>
      <Footerpage />
    </>
  )
}

export default page