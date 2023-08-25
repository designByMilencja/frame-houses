'use client'
import {navLinks} from "@/constants";
import {useState} from "react";
import Link from "next/link";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full my-5 flex py-3 px-2 rounded-[20px] justify-between items-center text-primary absolute">
            <a href="/" className="cursor-pointer flex flex-col items-center z-[6] relative">
                <img src='/assets/icons/home-outline.svg' alt="home icon" className="absolute w-[68px] h-[68px] sm:flex hidden z-[7] top-[-20px]"/>
                <h1 className="font-bold text-white text-3xl tracking-wider z-[8]">SMH</h1>
            </a>
            <div className="flex flex-col">
                <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-5 z-[6]">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id}
                            className={`p-1 hover:underline hover:decoration-solid hover:decoration-primary hover:underline-offset-8 font-bricolage cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} tracking-wider`}>
                            <Link href={`/${nav.id}`}>{nav.title}</Link>
                        </li>))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center pr-5 z-[6]">
                    <img src='/assets/icons/home-outline.svg' alt="home icon"
                         className="w-[28px] h-[28px] cursor-pointer"
                         onClick={() => setToggle((prev) => !prev)}/>
                    <div
                        className={`${toggle ? 'flex' : 'hidden'} p-3 absolute top-20 right-5 mx-4 my-2 min-w-[140px] rounded-xl bg-green`}>
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
