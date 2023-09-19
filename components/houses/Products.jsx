import Plus from "@/components/houses/Plus";
import HouseGrid from "@/components/houses/HouseGrid";
import {mobileHouses} from "@/constants";

const Products = () => {
    return (
        <section id="products" className="flex flex-col">
            <div className="m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                <div className="h-[100%] flex flex-col justify-evenly items-center text-center">
                    <h2 className="text-3xl text-contact p-3 mb-7 font-bold tracking-wider"> Rodzaje naszych
                        produktów</h2>
                    <div className="p-2 text-green bg-primary rounded-[15px]">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">
                            Oferujemy szeroką gamę domków mobilnych i modułowych, które dostosowujemy do
                            różnorodnych potrzeb klientów, jesteśmy otwarci na pomysły, które chętnie wcielamy w
                            życie.</p>
                    </div>
                </div>
            </div>
            <div className="h-[100%] flex flex-col justify-evenly items-center text-center">
                <div className="p-2 text-green bg-primary">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="flex flex-col justify-evenly p-[30px]">
                            <h3 className="font-bold p-8 text-2xl"> Domki Mobilne:</h3>
                            <div className="w-[90%] h-[400px] bg-cover bg-center mx-auto rounded-[15px]"
                                 style={{backgroundImage: "url('/assets/images/house.jpg')"}}></div>
                            <div className="flexCenter h-[200px] mt-[40px]">
                                <p className="w-[90%] mx-auto sm:w-[100%] p-[20px] leading-5 my-8 text-sm shadow rounded-[15px]">
                                    Nasze klasyczne domki mobilne łączą w sobie minimalistyczny design
                                    z
                                    funkcjonalnością. Są one idealnym rozwiązaniem dla osób, które pragną
                                    mieć swoje cztery kąty,
                                    mimo niestety wygórowananych ceny mieszkań na rynku. W
                                    rezultacie, nasze domki mobilne
                                    nie tylko odzwierciedlają nasze zaangażowanie w innowacyjność i jakość, ale
                                    stanowią również dowód na naszą zdolność do tworzenia przyszłościowej i
                                    zrównoważonej przestrzeni mieszkalnej dla naszych klientów bez wygórowanych
                                    kosztów.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-evenly p-[30px]">
                            <h3 className="font-bold p-8 text-2xl"> Domki modułowe:</h3>
                            <div className="w-[90%] h-[400px] bg-cover bg-center mx-auto rounded-[15px]"
                                 style={{backgroundImage: "url('/assets/images/houses.jpg')"}}></div>
                            <div className="flexCenter h-[200px] mt-[40px]">
                                <p className="w-[90%] mx-auto sm:w-[100%] p-[20px] leading-5 my-8 text-sm shadow rounded-[15px]">
                                    Specjalnie zaprojektowane domki modułowe oferują
                                    przestronne wnętrza, idealne dla rodzin. Wyposażone w różnego rodzaju
                                    udogodnienia,
                                    zapewniają
                                    przytulne miejsce do spędzania czasu razem. Domki modułowe to rewolucyjny sposób
                                    na tworzenie przestrzeni mieszkalnych, łączący nowoczesność, wygodę i innowację.
                                    Nasze domki modułowe redefiniują pojęcie mieszkania i oferują niezrównany
                                    komfort w zgodzie z duchem czasu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <HouseGrid houses={mobileHouses}/>
                    <Plus/>
                </div>
            </div>
        </section>
    )
}
export default Products
