'use client'
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { MdApps } from "react-icons/md";


export default function Nav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <>
            <nav className='text-slate-50  flex justify-center items-center p-5 w-full gap-4 fixed top-0 '>
                <div className="w-full max-w-7xl flex justify-between items-center relative">

                    <div className="logo">
                        <Link href="/">
                            <span className="uppercase font-bold text-gray-950 dark:text-gray-50">Lim<span className="text-green-600">o</span>S</span>
                        </Link>
                    </div>
                    <div className="menu flex items-center gap-8 sm:hidden  text-gray-900 dark:text-gray-50">
                        <Link href="/" className={`link hover:text-green-600 duration-300 ${pathname === '/' ? 'active' : ''}`} >Home</Link>
                        <Link href="/patisserie" className={`link hover:text-green-600 duration-300 ${pathname === '/patisserie' ? 'active' : ''}`}>Vehicules</Link>
                        <Link href="/programme" className={`link hover:text-green-600 duration-300 ${pathname === '/programme' ? 'active' : ''}`}>Blog</Link>
                        <Link href="/reconnect.me" className={`link hover:text-green-600 duration-300 ${pathname === '/reconnect.me' ? 'active' : ''}`}>Contact</Link>
                    </div>

                    <div className="flex items-center justify-center gap-2" >
                        <div className="md:hidden block">
                            <MdApps className="text-3xl  text-gray-950 cursor-pointer hover:text-green-600 duration-300 dark:text-gray-50" />
                        </div>
                        <div className="menu-icon hidden  md:block">

                        <MdApps onClick={() => setOpen(!open)} className="text-3xl text-gray-950 cursor-pointer hover:text-green-600 duration-300 dark:text-gray-50" />
                        </div>
                    </div>
                </div>
            </nav>
            <MobileNav open={open} setOpen={setOpen} className='z-[9999]' />
        </>
    )


}
function MobileNav({ open, setOpen }) {

    const pathname = usePathname()
    return (
        <div className={`absolute top-0 left-0 h-dvh w-screen bg-green-600 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-sm px-5)  `}>
            <div className="flex items-center justify-end filter drop-shadow-md h-20 px-6"> {/*logo container*/}
                <div className="menu-icon" >
                    <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E5E5E5" className="w-8 h-8 cursor-pointer">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="menu h-full flex flex-col  justify-center px-5  gap-3 text-slate-50">
                <div className="links flex flex-col items-center justify-center gap-3  text-2xl">
                    <Link href="/" onClick={() => setOpen(!open)} className={`link hover:text-green-600 duration-300 ${pathname === '/' ? 'active' : ''}`} >Home</Link>
                    <Link href="/patisserie" onClick={() => setOpen(!open)} className={`link hover:text-green-600 duration-300 ${pathname === '/patisserie' ? 'active' : ''}`}>Véhicules</Link>
                    <Link href="/programme" onClick={() => setOpen(!open)} className={`link hover:text-green-600 duration-300 ${pathname === '/programme' ? 'active' : ''}`}>Blog</Link>
                    <Link href="/reconnect.me" onClick={() => setOpen(!open)} className={`link hover:text-green-600 duration-300 ${pathname === '/reconnect.me' ? 'active' : ''}`}>Contact</Link>

                </div>

            </div>
        </div>
    )
}