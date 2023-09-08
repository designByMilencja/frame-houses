import Plus from "@/components/houses/Plus";

const Products = () => {
    return (
        <section id="products" className="flex">
            <div className="m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                <div className="h-[100%] flex flex-col justify-evenly items-center text-center">
                    <h2 className="text-2xl text-green p-3 mb-7 font-bold tracking-wider"> Nasze
                        Produkty</h2>
                    <div className="shadow p-2 text-green bg-primary rounded-[15px]">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">
                            Oferujemy szeroką gamę domków mobilnych i modułowych, które dostosowujemy do
                            różnorodnych potrzeb klientów, jesteśmy otwarci na pomysły, które chętnie wcielamy w życie.</p>
                        <ul>
                            <li>
                                <h3 className="font-bold p-[16px] text-2xl text-green"> Domki Mobilne:</h3>
                                <div className="flex flex-col sm:flex-row justify-around items-center px-[10px] ss:px-[26px]">
                                    <p className="w-[100%] max-w-[500px] sm:max-w-[350px] md:max-w-[350px] lg:max-w-[450px] p-[20px] my-4 text-center text-green text-sm shadow rounded-[15px] order-last sm:order-1 ">
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
                                    <img alt="house image" src="/assets/images/house.jpg"
                                         className="w-[100%] max-w-[500px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-[20px] sm:ml-5 box-with-darkShadow bg-green rounded-[15px] order-1 sm:order-2"/>
                                </div>
                            </li>
                            <li>
                                <h3 className="font-bold p-4 text-2xl text-dark "> Domki modułowe:</h3>
                                <div className="flex flex-col sm:flex-row justify-around items-center px-[10px] ss:px-[26px] ">
                                    <img alt="house image" src="/assets/images/home-module.jpg"
                                         className="w-[100%] max-w-[500px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] p-[20px] sm:mr-5 box-with-darkShadow bg-green rounded-[15px]"/>
                                    <p className="w-[100%] max-w-[500px] sm:max-w-[350px] md:max-w-[350px] lg:max-w-[450px] p-[20px] my-4 text-center text-green text-sm shadow rounded-[15px]">
                                        Specjalnie zaprojektowane domki modułowe oferują
                                        przestronne wnętrza, idealne dla rodzin. Wyposażone w różnego rodzaju
                                        udogodnienia,
                                        zapewniają
                                        przytulne miejsce do spędzania czasu razem. Domki modułowe to rewolucyjny sposób
                                        na tworzenie przestrzeni mieszkalnych, łączący nowoczesność, wygodę i innowację.
                                        Nasze domki modułowe redefiniują pojęcie mieszkania i oferują niezrównany
                                        komfort w zgodzie z duchem czasu.</p>
                                </div>
                            </li>
                        </ul>
                        <Plus/>
                    </div>
                </div>
            </div>
        </section>
)
}
export default Products
