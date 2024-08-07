'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import CartIcon from './cartIcon';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { id: 1, title: 'HOMEPAGE', url: '/' },
        { id: 2, title: 'MENU', url: '/' },
        { id: 3, title: 'WORKING HOURS', url: '/' },
        { id: 4, title: 'CONTACT', url: '/' },

    ];
    const user = false
    return (
        <div className='cursor-pointer'>
            {!isOpen ? (
                <Image src='/open.png' alt='open' width={20} height={20} onClick={() => setIsOpen(true)} />
            ) : (
                <Image src='/close.png' alt='close' width={20} height={20} onClick={() => setIsOpen(false)} />
            )}


            {isOpen && (
                <div className='flow-center gap-7 text-white text-3xl bg-red-500 w-full h-[calc(100vh-5rem)] absolute top-20 left-0 md:hidden'>
                    {links.map(item => (
                        <Link key={item.id} href={item.url}  onClick={() => setIsOpen(false)}>{item.title}</Link>
                    ))}
                    {
                        !user ? (
                            <Link href="/login" onClick={() => setIsOpen(false)}> LOGIN</Link>
                        ) : (
                            <Link href="/orders" onClick={() => setIsOpen(false)}>ORDERS</Link>
                        )
                    }

                    <Link href='/cart' onClick={() => setIsOpen(false)}>
                        <CartIcon />
                    </Link>

                </div>
            )}


        </div>
    )
}

export default Menu