import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar