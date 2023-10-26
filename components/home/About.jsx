'use client'
import Button from "@/components/Button";
import {about, abouts} from "@/constants";

const About = () => {
    return (
        <>
            <section id="about" className="w-full flexEvenly p-3 sm:p-8">
                <div className="flexEvenly flex-col md:flex-row">
                    <div className="flex flex-col sm:flex-row max-w-[800px] min-w-[350px]">
                        <div className="mx-1 my-5 sm:m-5 p-3 sm:p-5 text-primary text-center">
                            <h2 className="text-4xl sm:text-5xl text-with-darkShadow tracking-wide p-5">{about.h2}</h2>
                            <p className="mb-[50px] lg:my-[70px] p-5">
                                {about.p1a}
                                <span className="font-bold">{about.p1b}</span>{about.p1c}</p>
                            <p className="mb-[50px] lg:my-[70px] p-5">
                                {about.p2}</p>
                            <div
                                className="flexEvenly flex-col mx-1 my-5">
                                <h3 className="text-2xl font-bold tracking-wide text-with-darkShadow py-4">{about.h3}</h3>
                                <p className="p-5">{about.p3a}<span className="font-bold">{about.p3b}</span>.{about.p3c}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="flexEvenly flex-col sm:flex-row md:flex-col flex-wrap m-3">
                        {abouts.map((about, index) => (
                            <div
                                key={index}
                                className="pr-3 my-[10px] rounded-[15px] flexCenter flex-col cursor-pointer">
                                <img alt={about.alt} src={about.src}
                                     className="w-[300px]  min-w-[200px] p-2 sm:mb-2 py-3 rounded-[15px] box-with-lightShadow"/>
                                <Button text={about.text} href={about.href}/>
                            </div>
                        ))}
                    </aside>
                </div>
            </section>
        </>
    )
}
export default About
