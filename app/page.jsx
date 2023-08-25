'use client'
import {useEffect, useState} from "react";
import {backgrounds} from "@/constants";
import HeaderHome from "@/components/home/HeaderHome";
import Backgrounds from "@/components/home/Backgrounds";
import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import About from "@/components/home/About";
import Video from "@/components/home/Video";


export default function Home() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const handleBackgroundChange = (index) => {
        setBackgroundIndex(index);
    };
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            const interval = setInterval(() => {
                setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, []);
    return (
        <>
            <section id="home"
                     className=" max-w-[1700px] flex justify-center items-center w-full h-screen relative text-primary relative">
                <Hero backgroundIndex={backgroundIndex}/>
                <HeaderHome/>
                <Backgrounds handleBackgroundChange={handleBackgroundChange} backgroundIndex={backgroundIndex}/>
            </section>
            <section id="about" className="w-full flex flex-col flex justify-start items-center w-full my-5">
                <About/>
            </section>
            <section id="advantages" className="max-w-[1200px] flex flex-col flex justify-start items-center w-full my-5">
                <Advantages/>
                <Video/>
            </section>
        </>
    )
}
