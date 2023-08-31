import Button from "@/components/Button";
import {Link} from 'react-scroll'

const Benefits = () => {
    return (
        <>
            <section id="benefits" className="w-full bg-green rounded-[10px] flex p-3 sm:p-8 flex flex-col">
                <div className="flex flex-col sm:flex-row max-w-[1200px] mx-auto">
                    <div
                        className="circle m-3 p-5 bg-gradient-to-b from-primary to-transparent box-with-shadow flex flex-col justify-evenly items-center ">
                        <div className="flex flex-col justify-evenly items-center my-4">
                            <h2 className="text-3xl text-text font-bold tracking-wider py-4 my-2">Ergonomia i komfort:</h2>
                            <p className="p-5 circle text-text text-center bg-primary text-center tex">
                                Projektując wnętrza, priorytetem jest dla nas ergonomia i komfort mieszkańców. Dbamy
                                o <span
                                className="font-bold">ergonomiczne układy przestrzeni, optymalne oświetlenie oraz funkcjonalność każdego elementu.</span>.
                                Nasze domki mobilne to miejsca, gdzie ludzie mogą poczuć się swobodnie i
                                wygodnie, bez kompromisów.</p>
                        </div>
                        <div className="flex flex-col justify-evenly items-center my-4">
                            <h2 className="text-3xl text-text font-bold tracking-wider py-4 my-2">Energooszczędność:</h2>
                            <p className="p-5 mb-2 circle text-text text-center bg-primary text-center">
                                <span className="font-bold"> Jesteśmy zobowiązani do tworzenia energooszczędnych rozwiązań.</span>.
                                Wyposażamy nasze domki mobilne w systemy odnawialnej energii, takie jak panele
                                słoneczne.
                                To nie tylko zmniejsza koszty eksploatacyjne dla użytkowników, ale także przyczynia się
                                do zrównoważonego stylu życia.</p>
                            <Button text="Sprawdź rodzaje domków"/>

                        </div>
                    </div>

                    <div
                        className="circle-end m-3 p-5 bg-gradient-to-b from-primary to-transparent box-with-shadow flex flex-col justify-evenly items-center ">
                        <div className="flex flex-col justify-evenly items-center my-4">
                            <h2 className="text-3xl text-text font-bold tracking-wider py-4">Innowacyjność:</h2>
                            <p className="p-5 circle-end text-text text-center bg-primary text-center">
                                Kładziemy nacisk na innowacje oraz osiągnięcie <span className="font-bold">najwyższej jakości</span> w
                                swoich
                                produktach. Nasza dedykacja w obszarze innowacyjności i jakości ma na celu
                                przedefiniowanie standardów w branży domków mobilnych.</p>
                        </div>
                        <div className="flex flex-col justify-evenly items-center my-4">
                            <h2 className="text-3xl text-text font-bold tracking-wider py-4">Materiały najwyższej
                                jakości:</h2>
                            <p className="p-5 mb-2 circle-end text-text text-center bg-primary text-center">
                                Korzystamy tylko z materiałów najwyższej jakości, które są <span className="font-bold">trwałe, odporne na warunki atmosferyczne i przyjazne dla środowiska.</span> tosujemy
                                innowacyjne rozwiązania, takie jak nowoczesne izolacje termiczne i akustyczne,
                                które poprawiają komfort użytkowania i zmniejszają negatywny wpływ na środowisko.</p>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                                <Button text="Skontaktuj się z nami"/>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )

}
export default Benefits
