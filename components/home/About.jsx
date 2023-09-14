'use client'
import Button from "@/components/Button";
import {abouts} from "@/constants";

const About = () => {
    return (
        <>
            <section id="about" className="w-full flex justify-evenly items-center p-3 sm:p-8">
                <div className="flex flex-col md:flex-row justify-evenly items-center">

                    <div className="flex flex-col sm:flex-row max-w-[800px] min-w-[350px]">

                        <div className="mx-1 my-5 sm:m-5 p-3 sm:p-5 text-primary text-center">
                            <h2 className="text-4xl sm:text-5xl text-with-darkShadow tracking-wide p-5">Space
                                Mobile House</h2>
                            <p className="mb-[50px] lg:my-[70px] p-5">
                                Nasza firma specjalizuje się w
                                <span className="font-bold"> projektowaniu, produkcji i dostarczaniu
                                wysokiej jakości domków mobilnych</span>.
                                Łączy funkcjonalność,
                                estetykę i innowacyjność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do
                                potrzeb
                                współczesnego stylu życia. Znamy rynek jak nikt oraz bacznie przyglądamy sie
                                oczekiwaniom naszych klientów, badamy potrzeby aby dopasować nasze produkty dla każdej
                                osoby indywidualnie. Państwa komfort to nasz wyznacznik sukcesu.</p>
                            <p className="mb-[50px] lg:my-[70px] p-5">
                                Główna siedziba mieści się w Warszawie, ale dzięki rozwiązaniu z ruchomą
                                platformą, domki jesteśmy w stanie dostarczyć w niemalże każde miejsce na świecie.
                                Wszelkie szczegóły zawsze
                                omawiamy
                                indywidualnie, by jak najbardziej wyjść naprzeciw potrzebom naszych klientów. Wiemy, że
                                tylko indywidualne podejście pozwala osiągnąć zamierzone cele.</p>

                            <div
                                className="flex flex-col justify-evenly items-center mx-1 my-5">
                                <h3 className="text-2xl font-bold tracking-wide text-with-darkShadow py-4">Misja:</h3>
                                <p className="p-5">
                                    Dostarczamy klientom domy mobilne, które łączą w sobie <span
                                    className="font-bold">wygodę tradycyjnych domów z zaletami mobilności</span>.
                                    Chcemy umożliwić ludziom cieszenie się domem na kołach,
                                    niezależnie od lokalizacji czy zmieniających się warunków życiowych.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col flex-wrap justify-evenly items-center m-3">
                        {abouts.map((about, index) => (
                            <div
                                key={index}
                           className="pr-3 my-[10px] rounded-[15px] flex flex-col justify-center items-center cursor-pointer">
                            <img alt={about.alt} src={about.src}
                                 className="w-[300px]  min-w-[200px] p-2 sm:mb-2 py-3 rounded-[15px] box-with-lightShadow"/>
                            <Button text={about.text} href={about.href} />
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
