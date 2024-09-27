import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
   <section className='flex bg-[#24292F] h-[4rem] items-center '>
    
  <span className='text-xl text-red-800 font-bold px-5'><Link href="/home">Home</Link></span>
  <span className='text-xl text-red-800 font-bold px-5'><Link href="/about">About</Link></span>
  <span className='text-xl text-red-800 font-bold px-5'><Link href="/contact">Contact</Link></span>
  <span className='text-xl text-red-800 font-bold px-5'><Link href="/portfolio">Portfolio</Link></span>
  
   </section>
    </div>
  )
}

export default Navbar