'use client'
import {navLinks} from "@/constants";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from 'next/navigation'
import Image from "next/image";


const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggle && !event.target.closest('.close')) {
                setToggle(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [toggle]);

    return (
        <nav
            className="w-[95%] max-w-[1200px] flexBetween fixed text-green bg-primary shadow rounded-[15px] z-[6] mt-[120px] p-3">
            <a href="/" className="flexCenter bg-green rounded-[15px] cursor-pointer px-6">
                <Image src="/assets/icons/home-outline.svg" alt="home icon - logo" width={48} height={48}
                       className="sm:flex hidden"/>
                <p className="text-3xl font-bold text-primary tracking-wider p-2 hover:text-contact">SMH</p>
            </a>
            <div className="flex flex-col">
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav) => {
                        const isActive = pathname === `/${nav.id}`;
                        return (<li key={nav.id}
                                    className={`${isActive ? 'active' : ''}
                            ${isActive ? '' : 'hover:text-contact'}
                            cursor-pointer text-[16px] tracking-wide p-1 mr-5 `}>
                            <Link href={`/${nav.id}`}>{nav.title}</Link>
                        </li>)
                    })}
                </ul>
                <div className="sm:hidden flex-1 flexEnd">
                    <Image src="/assets/icons/home-outline.svg" alt="home icon - logo" width={48} height={48}
                           className="close bg-green rounded-[15px] cursor-pointer mx-3 p-2"
                           onClick={() => setToggle((prev) => !prev)}/>
                    <div
                        className={`${toggle ? 'flex' : 'hidden'}
                         absolute top-20 right-2 min-w-[140px] rounded-[15px] bg-primary my-2 px-5 py-4`}>
                        <ul className="list-none flexEnd flex-col flex-1">
                            {navLinks.map((nav) => {
                                const isActive = pathname === `/${nav.id}`;
                                return (<li key={nav.id}
                                            className={`${isActive ? 'active' : ''}
                                     ${isActive ? '' : 'hover:text-contact'}
                                    w-[100%] text-center text-[16px] cursor-pointer text-green mb-2`}>
                                    <Link href={`/${nav.id}`}>{nav.title}</Link></li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navigation
