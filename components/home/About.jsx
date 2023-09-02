'use client'
import Button from "@/components/Button";
import { Link } from 'react-scroll'
import {abouts} from "@/constants";

const About = () => {
    return (
        <>
            <section id="about" className="w-full rounded-[10px] flex p-3 sm:p-8 flex justify-evenly items-center">
                <div className="flex flex-col md:flex-row justify-evenly items-center ">

                    <div className="flex flex-col sm:flex-row max-w-[800px] min-w-[350px] ">

                        <div className="mx-1 my-5 sm:m-5 p-3 sm:p-5 rounded-[20px]">
                            <h2 className="text-4xl sm:text-5xl text-primary font-bricolage p-5 text-with-shadow text-center tracking-wider ">Space
                                Mobile House</h2>
                            <p className="shadow p-8 mb-[50px] lg:my-[70px]  bg-green text-primary text-center box-with-shadow rounded-[20px]">
                                Nasza firma specjalizuje się w <span className="font-bold">projektowaniu, produkcji i dostarczaniu
                            wysokiej jakości domków mobilnych</span>. Łączy funkcjonalność,
                                estetykę i innowacyjność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do
                                potrzeb
                                współczesnego stylu życia.</p>
                            <p className="p-5 mb-[50px] lg:my-[70px] bg-green text-primary text-center box-with-shadow rounded-[20px]">
                                Główna siedziba mieści się w Warszawie, ale domki jesteśmy dzięki rozwiązaniu z ruchomą
                                platformą w stanie dostarczyć w każde miejsce na świecie. Wszelkie szczegóły możemy
                                omówić
                                indywidualnie, by jak najbardziej sprostać potrzebom naszych klientów.</p>

                            <div className="flex flex-col justify-evenly items-center mx-1 my-5 text-center bg-green box-with-shadow rounded-[20px]">
                                    <h2 className="text-2xl text-primary font-bold tracking-wider pt-4">Misja:</h2>
                                    <p className="p-5 text-primary">
                                        Dostarczamy klientom domy mobilne, które łączą w sobie <span
                                        className="font-bold">wygodę tradycyjnych domów z zaletami mobilności</span>.
                                        Chcemy umożliwić ludziom cieszenie się domem na kołach,
                                        niezależnie od lokalizacji czy zmieniających się warunków życiowych.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col flex-wrap justify-evenly items-center m-2">
                        <a href="/houses"
                            className="p-2 my-[20px] rounded-[20px] flex flex-col justify-center items-center cursor-pointer">
                            <img alt="beautiful house and lake" src="/assets/images/houses.jpg" className="w-[300px]  min-w-[200px] p-2 sm:mb-2 py-3 rounded-[20px] box-with-shadow bg-green"/>
                            <Button text="Rodzaje domów mobilnych"/>
                        </a>
                        {abouts.map((about, index)=> (
                            <Link key={index}
                                activeClass="active" to={about.to} spy={true} smooth={true} offset={0} duration={500}
                                className="p-2 my-[20px] rounded-[20px]  flex flex-col justify-center items-center cursor-pointer">
                                <img alt={about.alt} src={about.src} className="w-[300px] min-w-[200px] p-2 sm:mb-2 md:mb-1 rounded-[20px] box-with-shadow"/>
                                <Button text={about.text}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
