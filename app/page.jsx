'use client'
import {useEffect, useState} from "react";
import {backgrounds} from "@/constants";
import Header from "@/components/Header";
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
                     className="w-full h-screen max-w-[1700px] flexCenter relative text-text">
                <Hero backgroundIndex={backgroundIndex}/>
                <Header h1="Space Mobile House" h2="Twoja wymarzona przestrzeń - nasze domy mobilne" text="Sprawdź nasze domy szkieletowe" href="/houses#products"/>
                <Backgrounds handleBackgroundChange={handleBackgroundChange} backgroundIndex={backgroundIndex}/>
            </section>
            <section id="about-box" className="w-full flexStart flex-col bg-green my-5">
                <About/>
            </section>
            <section id="advantages-box" className="w-full max-w-[1200px] flexStart flex-col my-5">
                <Benefits/>
                <Advantages/>
                <Video/>
            </section>
        </>
    )
}
