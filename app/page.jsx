'use client'
import {useEffect, useState} from "react";
import {backgrounds} from "@/constants";
import HeaderHome from "@/components/home/HeaderHome";
import Backgrounds from "@/components/home/Backgrounds";
import Hero from "@/components/home/Hero";
import Advantages from "@/components/home/Advantages";
import About from "@/components/home/About";
import Video from "@/components/home/Video";
import Benefits from "@/components/home/Benefits";


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
            <section id="home-box"
                     className="w-full h-screen max-w-[1700px] flex justify-center items-center relative text-text">
                <Hero backgroundIndex={backgroundIndex}/>
                <HeaderHome h1="Space Mobile House" h2="Twoja wymarzona przestrzeń" text="Sprawdź nasze domy szkieletowe"/>
                <Backgrounds handleBackgroundChange={handleBackgroundChange} backgroundIndex={backgroundIndex}/>
            </section>
            <section id="about-box" className="w-full flex flex-col flex justify-start items-center bg-green my-5">
                <About/>
            </section>
            <section id="advantages-box" className="w-full max-w-[1200px] flex flex-col justify-start items-center my-5">
                <Benefits/>
                <Advantages/>
                <Video/>
            </section>
        </>
    )
}
