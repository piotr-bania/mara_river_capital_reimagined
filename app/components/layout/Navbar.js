'use client'

import './navbar.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Biographies', href: '/biographies' },
        { label: 'Contact', href: '/contact' },
    ]

    // const pathname = usePathname()
    // const [activeLink, setActiveLink] = useState(pathname)

    return (
        <section id='navbar'>
            <nav>
                <div className='logo'>
                    <img src='/svg/logo.svg' alt='Mara River Capital' />
                </div>

                <div className='links'>
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            // className={`link ${activeLink === link.href ? 'active_link' : ''}`}
                            className='link'
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </section>
    )
}

export default Navbar