'use client'
import {navLinks} from "@/constants";
import {useState} from "react";
import Link from "next/link";
import { usePathname} from 'next/navigation'


const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname()
    console.log(pathname)

    return (
        <nav className="w-[96%] flex justify-between items-center text-primary absolute z-[6] bg-dark rounded-[20px] mt-[120px] p-3">
            <a href="/" className="cursor-pointer flex justify-center items-center z-[6] px-6">
                <img src='/assets/icons/home-outline.svg' alt="home icon" className="w-[48px] h-[48px] sm:flex hidden"/>
                <h1 className="font-bold text-primary text-3xl tracking-wider text-with-shadow">SMH</h1>
            </a>
            <div className="flex flex-col">
                <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-[30px] z-[6]">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`p-1 cursor-pointer text-[16px] 
                            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} tracking-wider ${pathname === `/${nav.id}` ? 'active' : ''}`}>
                            <Link href={`/${nav.id}`}>{nav.title}</Link>
                        </li>))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center pr-5 z-[6]">
                    <img src='/assets/icons/home-outline.svg' alt="home icon"
                         className="w-[38px] h-[38px] cursor-pointer mx-3"
                         onClick={() => setToggle((prev) => !prev)}/>
                    <div
                        className={`${toggle ? 'flex' : 'hidden'} p-3 absolute top-20 right-5 mx-4 my-2 min-w-[140px] rounded-xl bg-dark`}>
                        <ul className="list-none flex flex-col justify-end items-center flex-1 z-[6]">
                            {navLinks.map((nav, index) => (
                                <li key={nav.id}
                                    className={`font-bricolage text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} cursor-pointer text-primary z-[6]`}>
                                    <Link href={`/${nav.id}`} className="z-[6]">{nav.title}</Link></li>))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navigation
