'use client'
import Footer from "@/components/Footer";
import Button from "@/components/Button";
// import Button from "@/components/Button";

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-green">

            <div className="max-w-[1200px] mx-auto">
                <div className="absolute inset-0 clip-trapezoid-primary"></div>
                <div className="flex flex-col justify-center items-center mb-[20px]">
                    <div className="flex justify-center items-center mt-[80px]">
                        <img alt="logo icon - house" src="/assets/icons/home-outline.svg" className="w-[138px] m-5"/>
                        <div className="flex flex-col text-primary">
                            <h2 className="font-extrabold text-2xl p-2">Space Mobile House</h2>
                            <h3 className="text-1xl p-2">Spełniamy Twoje
                                marzenia</h3>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex flex-col sm:flex-row">
                            <div className="p-6 text-primary tracking-wider">
                                <p className="text-2xl p-2">Martyna Przanowska</p>
                                <p className="p-2">NIP: 8212462873</p>
                                <p className="p-2">Regon: 523714418</p>
                                <a href="/privacy-policy" className="p-2">
                                    Polityka prywatności
                                </a>
                            </div>

                            <div className="p-6 text-1xl text-primary">
                                <p className="tracking-wider p-3">Zapraszamy do kontaktu</p>
                                <Button text="kontakt@spacemobilehome.pl" href="mailto:kontakt@spacemobilehome.pl"/>
                                <div className="flex flex-wrap justify-center items-center">
                                    <Button text="Facebook" href="https://facebook.com"/>
                                    <Button text="Instagram" href="https://instagram.com"/>
                                    <Button text="Linkedin" href="https://linkedin.com"/>
                                </div>
                            </div>
                            <div className="p-6 flex sm:flex-col flex-wrap items-center justify-center text-primary">
                                <a href="/" className="p-2">
                                    Strona główna
                                </a>
                                <a href="/houses" className="p-2">
                                    Domy szkieletowe
                                </a>
                                <a href="/production" className="p-2">
                                    Produkcja
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </section>
    )
}
export default Contact
