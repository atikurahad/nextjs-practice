import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
    <ul className='flex'>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>FaQ</Link></li>
      
    </ul>    
    </div>
  )
}

export default Navbar