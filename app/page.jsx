'use client'
import {useEffect, useState} from "react";
import {backgrounds} from "@/constants";
import HeaderHome from "@/components/home/HeaderHome";
import Backgrounds from "@/components/home/Backgrounds";

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
        <section id="home" className="flex justify-center items-center w-full h-screen relative text-primary relative">
            <div
                className="shadow absolute h-[97%] w-[98%] bg-cover bg-center rounded-[20px] transition-all duration-2000"
                style={{backgroundImage: `url("${backgrounds[backgroundIndex]}")`}}>
            </div>
            <div className="absolute h-[97%] w-[98%] bg-black opacity-60 rounded-[20px] z-[1]"></div>
            <HeaderHome/>
            <Backgrounds handleBackgroundChange={handleBackgroundChange} backgroundIndex={backgroundIndex}/>
        </section>
    )
}
