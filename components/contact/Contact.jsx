'use client'
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-green">

            <div className="max-w-[1200px] mx-auto">
                <div className="absolute inset-0 clip-trapezoid-primary"></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center mt-[40px]">
                        <img alt="logo icon - house" src="/assets/icons/home-outline.svg" className="w-[138px] m-5"/>
                        <div className="flex flex-col ">
                            <p className="font-extrabold tracking-wider text-primary text-2xl">Space Mobile House</p>
                            <p className="font-extrabold tracking-wider text-primary text-1xl">Spełniamy twoje
                                marzenia</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className=" flex flex-col sm:flex-row ">
                            <div className="p-6 text-primary">
                                <p className="tracking-wider text-2xl p-2">Martyna Przanowska</p>
                                <p className=" tracking-wider p-2">NIP: 8212462873</p>
                                <p className=" tracking-wider p-2">Regon: 523714418</p>
                            </div>

                            <div className="p-6 text-1xl text-primary">
                                <p className="tracking-wider p-3">Zapraszamy do kontaktu</p>
                                <Button text="kontakt@spacemobilehome.pl"/>
                                <div className="flex  justify-center items-center text-primary">
                                    <Button text="Facebook"/>
                                    <Button text="Instagram"/>
                                    <Button text="Linkedin"/>
                                </div>
                            </div>
                            <div className="p-6 flex sm:flex-col items-center  justify-center text-primary">
                                <a href="https://facebook.com" className="p-2">
                                    Strona główna
                                </a>
                                <a href="https://instagram.com" className="p-2">
                                    Domy szkieletowe
                                </a>
                                <a href="https://linkedin.com" className="p-2">
                                    Produkcja
                                </a>
                                <a href="https://linkedin.com" className="p-2">
                                    EN
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>

        </section>
    )
}
export default Contact
