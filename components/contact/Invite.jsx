import React from "react";

const Invite = () => {
    return (
        <section id="invite" className="w-full my-[50px]">
            <div className="flex flex-col sm:flex-row items-center justify-around">
                <div className="flex flex-col items-center justify-center my-8">
                    <h2 className="text-3xl sm:text-2xl p-8 sm:p-3 text-green font-bold leading-10">Zapraszamy
                        do
                        kontaktu</h2>
                    <p className="px-7 py-4 w-full max-w-[600px]">Nasza ekipa składa się z doświadczonych architektów,
                        projektantów i specjalistów od produkcji
                        domów
                        mobilnych. Jesteśmy gotowi, by Twoje marzenie o nowoczesnym i funkcjonalnym domu stało się
                        rzeczywistością. Napisz do nas! Chętnie odpowiemy na Twoje pytania, by wspólnie
                        rozpocząć
                        projekt Twojego
                        wymarzonego domu
                        mobilnego. Skorzystaj z poniższego formularza kontaktowego lub skontaktuj się z nami
                        bezpośrednio. A jeśli wolisz porozmawiać osobiście</p>

                    <div className="mb-8 p-4">
                        <button type="submit"
                                className="rounded-[15px] px-[40px] py-2 mt-3 box-with-darkShadow bg-contact">Zadzwoń
                            teraz
                        </button>
                    </div>
                </div>
                <div className="bg-green flex justify-center items-center rounded-[15px] sm:mr-1 ">
                    <img alt="arrow showing form section" src="/assets/images/arrow.jpg"
                         className="w-[300px] xs:w-[400px] md:w-[500px] rounded-[15px] p-5 "/>
                </div>
            </div>
        </section>
    )
}
export default Invite
