const About = () => {
    return (
        <>
            <section className="w-full bg-green rounded-[10px] flex p-3 sm:p-8 flex flex-col">
                <div className="flex flex-col sm:flex-row">
                    <div
                        className="circle m-1 sm:m-5 p-3 sm:p-5 bg-gradient-to-b from-primary to-transparent box-with-shadow">
                        <h2 className="text-4xl sm:text-5xl text-green font-bricolage p-4 text-with-shadow text-center tracking-wider ">Space
                            Mobile House</h2>
                        <p className="shadow p-5 sm:p-8 mb-4 circle bg-primary text-text text-center box-with-shadow">
                            Nasza firma specjalizuje się w projektowaniu, produkcji i dostarczaniu
                            wysokiej jakości domków mobilnych. Łączy funkcjonalność,
                            estetykę i innowacyjność, aby stworzyć komfortowe przestrzenie mieszkalne dostosowane do
                            potrzeb
                            współczesnego stylu życia.</p>
                        <p className="p-8 circle bg-primary text-text text-center box-with-shadow">
                            Główna siedziba mieści się w Warszawie, ale domki jesteśmy dzięki rozwiązaniu z ruchomą
                            platformą w stanie dostarczyć w każde miejsce na świecie. Wszelkie szczegóły możemy omówić
                            indywidualnie, by jak najbardziej sprostać potrzebom naszych klientów</p>

                    </div>

                    <div className="circle-end m-3 p-5 bg-gradient-to-b from-primary to-transparent box-with-shadow flex flex-col ">
                        <div className="flex flex-col justify-evenly items-center">
                            <h2 className="text-2xl text-green font-bold tracking-wider py-4">Misja:</h2>
                            <p className="p-5 circle-end text-text text-center bg-primary text-center font-bold">
                                Dostarczamy klientom domy mobilne, które łączą w sobie wygodę
                                tradycyjnych domów z zaletami mobilności. Chcemy umożliwić ludziom cieszenie się domem
                                na
                                kołach, niezależnie od lokalizacji czy zmieniających się warunków życiowych.</p>
                        </div>
                        <div className="flex flex-col justify-evenly items-center">
                            <h2 className="text-2xl text-green font-bold tracking-wider py-4">Innowacyjność:</h2>
                            <p className="p-5 circle-end text-text text-center bg-primary text-center font-bold">
                                Kładziemy nacisk na innowacje oraz osiągnięcie najwyższej jakości w swoich
                                produktach. Nasza dedykacja w obszarze innowacyjności i jakości ma na celu
                                przedefiniowanie standardów w branży domków mobilnych.</p>
                            <button className="bg-green text-primary rounded-[20px] py-2 px-4 m-5 box-with-shadow">Skontaktuj się z nami </button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default About
