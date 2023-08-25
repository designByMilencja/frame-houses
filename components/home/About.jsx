const About = () => {
    return (
        <>
        <section className="w-full bg-green rounded-[10px] flex p-8 flex flex-col">
            <div className="flex flex-col sm:flex-row">
                <div className="circle m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                    <h2 className="text-2xl text-green font-bricolage p-4">Space Mobile House</h2>
                    <p className="p-5 circle bg-primary text-text text-center">
                        Nasza firma specjalizuje się w projektowaniu, produkcji i dostarczaniu
                        wysokiej jakości domków mobilnych. Łączy funkcjonalność,
                        estetykę i innowacyjność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do potrzeb
                        współczesnego stylu życia. Nasza innowacyjna firma specjalizuje się w projektowaniu, produkcji i
                        dostarczaniu
                        wysokiej jakości domków mobilnych. Łączy funkcjonalność,
                        estetykę i mobilność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do potrzeb
                        współczesnego stylu życia. Nasza innowacyjna firma specjalizuje się w projektowaniu, produkcji i
                        dostarczaniu
                        wysokiej jakości domków mobilnych. Łączy funkcjonalność,
                        estetykę i mobilność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do potrzeb
                        współczesnego stylu życia.</p>
                </div>

                <div className="circle-end m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                    <div className="h-[100%] flex flex-col justify-evenly items-center">
                        <h2 className="text-2xl text-green">Misja:</h2>
                        <p className="p-5 circle-end text-text text-center bg-primary text-center font-bold">
                            Dostarczamy klientom domy mobilne, które łączą w sobie wygodę
                            tradycyjnych domów z zaletami mobilności. Chcemy umożliwić ludziom cieszenie się domem na
                            kołach, niezależnie od lokalizacji czy zmieniających się warunków życiowych.</p>
                    </div>
                </div>
            </div>

        </section>
            <div className="flex">
                <div className="circle m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                    <div className="h-[100%] flex flex-col justify-evenly items-center">
                        <h2 className="text-2xl text-green">Produkty:</h2>
                        <div className="p-5 circle text-text text-center bg-primary">
                            <h3>
                                Oferujemy szeroką gamę domków mobilnych, które dostosowują się do różnorodnych
                                potrzeb klientów:</h3>
                            <ul>
                                <li>
                                    <h4 className="font-bold"> Klasyczne Domki Mobilne:</h4>
                                    <p>
                                        Nasze klasyczne domki mobilne łączą w sobie minimalistyczny design
                                        z
                                        funkcjonalnością. Są one idealnym rozwiązaniem dla osób, które pragną
                                        podróżować,
                                        jednocześnie
                                        nie rezygnując z komfortu własnego mieszkania.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold"> Rodzinne Przyczepy Kampingowe:</h4>
                                    <p>
                                        Specjalnie zaprojektowane przyczepy kampingowe oferują
                                        przestronne wnętrza, idealne dla rodzin. Wyposażone w różnego rodzaju
                                        udogodnienia,
                                        zapewniają
                                        przytulne miejsce do spędzania czasu razem.
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold"> Domki na Imprezy i Wydarzenia:</h4>
                                    <p>
                                        Nasza oferta obejmuje również domki mobilne dedykowane
                                        imprezom,
                                        festiwalom i wydarzeniom specjalnym. Te dynamiczne przestrzenie są doskonałe do
                                        użytku jako
                                        mobilne punkty sprzedaży, kawiarnie czy stoiska informacyjne.

                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-bold">Domki Mobilne Pracownicze:</h4>
                                    <p>
                                        Dla firm poszukujących tymczasowych rozwiązań mieszkaniowych dla
                                        pracowników, oferujemy domki mobilne dostosowane do potrzeb zatrudnionych.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About
