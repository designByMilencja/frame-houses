import ProductionTimeline from "@/components/production/ProductionTimeline";
import Equipment from "@/components/production/Equipment";

const ProductionBox = () => {
    return (
        <section id="steps" className="flex flex-col">
            <div className="m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                <div className="h-[100%] flex flex-col justify-evenly items-center text-center">
                    <h2 className="text-3xl text-contact p-3 mb-7 font-bold tracking-wider"> Etapy
                        produkcji domów mobilnych</h2>
                    <div className="shadow p-2 text-green bg-primary rounded-[15px]">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">
                            W dzisiejszych czasach, kiedy tempo życia staje się coraz bardziej dynamiczne, a wymagania
                            dotyczące elastyczności i mobilności wzrastają, domy mobilne stają się coraz bardziej
                            popularne. To innowacyjne podejście do budownictwa oferuje nie tylko wyjątkową swobodę w
                            kwestii lokalizacji, ale także pozwala na dostosowanie się do zmieniających się potrzeb
                            mieszkańców.</p>
                    </div>
                </div>
            </div>
            <div className="h-[100%] p-2 text-green bg-primary">
                    <h3 className="p-8 text-2xl text-green text-center">Przyjrzyjmy się bliżej etapom budowy domów
                        mobilnych, od początkowej koncepcji po finalny produkt. Dowiedzmy się, jakie są kluczowe kroki i
                        wyzwania związane z tym procesem oraz jakie korzyści płyną z wyboru tego nowoczesnego
                        rozwiązania.</h3>
            </div>
            <ProductionTimeline/>
            <Equipment/>
        </section>
    )
}
export default ProductionBox
