import Button from "@/components/Button";
import { Link } from 'react-scroll'

const About = () => {
    return (
        <>
            <section id="about" className="w-full rounded-[10px] flex p-3 sm:p-8 flex justify-evenly items-center">
                <div className="flex flex-col md:flex-row justify-evenly items-center">

                    <div className="flex flex-col sm:flex-row max-w-[800px] min-w-[350px]">

                        <div className="circle mx-1 my-5 sm:m-5 p-3 sm:p-5 bg-gradient-to-b from-primary to-transparent box-with-shadow">
                            <h2 className="text-4xl sm:text-5xl text-green font-bricolage p-5 text-with-shadow text-center tracking-wider ">Space
                                Mobile House</h2>
                            <p className="shadow p-5 sm:p-8 mb-4 circle bg-primary text-text text-center box-with-shadow">
                                Nasza firma specjalizuje się w <span className="font-bold">projektowaniu, produkcji i dostarczaniu
                            wysokiej jakości domków mobilnych</span>. Łączy funkcjonalność,
                                estetykę i innowacyjność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do
                                potrzeb
                                współczesnego stylu życia.</p>
                            <p className="p-8 circle bg-primary text-text text-center box-with-shadow">
                                Główna siedziba mieści się w Warszawie, ale domki jesteśmy dzięki rozwiązaniu z ruchomą
                                platformą w stanie dostarczyć w każde miejsce na świecie. Wszelkie szczegóły możemy
                                omówić
                                indywidualnie, by jak najbardziej sprostać potrzebom naszych klientów.</p>

                            <div className="flex flex-col justify-evenly items-center mx-1 my-5">
                                <div className="circle text-center bg-primary box-with-shadow ">
                                    <h2 className="text-2xl text-green font-bold tracking-wider pt-4">Misja:</h2>
                                    <p className="p-5 text-text">
                                        Dostarczamy klientom domy mobilne, które łączą w sobie <span
                                        className="font-bold">wygodę tradycyjnych domów z zaletami mobilności</span>.
                                        Chcemy umożliwić ludziom cieszenie się domem na kołach,
                                        niezależnie od lokalizacji czy zmieniających się warunków życiowych.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col justify-evenly items-center m-2">
                        <a href="/houses"
                            className="p-4 my-8 sm:m-3 md:my-8  rounded-[20px] bg-primary max-h-[200px]  flex flex-col justify-center items-center cursor-pointer">
                            <img alt="beautiful house and lake" src="/assets/images/houses.jpg" className="w-[300px] min-w-[200px] px-4 py-3 rounded-[30px] box-with-shadow bg-green"/>
                            <Button text="Rodzaje domów mobilnych"/>
                        </a>
                        <Link
                            activeClass="active" to="advantages" spy={true} smooth={true} offset={0} duration={500}
                            className="p-4 my-8 sm:m-3 md:my-8  rounded-[20px] bg-primary max-h-[200px] flex flex-col justify-center items-center cursor-pointer">
                            <img alt="person pointing finger up" src="/assets/images/idea.jpg" className="w-[300px] min-w-[200px] px-4 py-3 rounded-[30px] box-with-shadow bg-green"/>
                            <Button text="Domek mobilny dla Ciebie?"/>
                        </Link>
                        <Link
                            activeClass="active" to="equipment" spy={true} smooth={true} offset={0} duration={500}
                            className="p-4 my-8 sm:m-3 md:my-8 rounded-[20px] bg-primary max-h-[200px] flex flex-col justify-center items-center cursor-pointer">
                            <img alt="table and plants" src="/assets/images/equipment.jpg" className="w-[300px] min-w-[200px] px-4 py-3 rounded-[30px] box-with-shadow bg-green"/>
                            <Button text="Wyposażenie domów mobilnych"/>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}
export default About
