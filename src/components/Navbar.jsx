import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
   <section className='flex bg-[#ffff] h-[4rem] items-center '>
    
  <span className='text-xl text-black font-bold px-5'><Link href="/home">Home</Link></span>
  <span className='text-xl text-black font-bold px-5'><Link href="/about">About</Link></span>
  <span className='text-xl text-black font-bold px-5'><Link href="/contact">Contact</Link></span>
  <span className='text-xl text-black font-bold px-5'><Link href="/portfolio">Portfolio</Link></span>
  
   </section>
    </div>
  )
}

export default Navbar