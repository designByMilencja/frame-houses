import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-green">

            <div className="max-w-[1200px] mx-auto relative rounded-[20px]">

                <div className="absolute inset-0 clip-trapezoid-primary"></div>

                <div className="w-[90%] mx-auto p-2">

                    <div className="flex flex-col ss:flex-row justify-between items-center p-5">
                        <div className="flex flex-col justify-center items-start text-white font-bricolage p-2">
                            <img alt="logo icon - house" src="/assets/icons/home-outline.svg" className="w-[38px] bg-black"/>
                            <h2 className="font-extrabold tracking-wider text-2xl">Space Mobile House</h2>
                            <h2 className="tracking-wider text-1xl ">Martyna Przanowska</h2>
                        </div>

                        <div className="flex flex-col text-white ">
                            <h2 className=" tracking-wider text-1xl p-1">NIP: 8212462873</h2>
                            <h2 className=" tracking-wider text-1xl p-1">Regon: 523714418</h2>
                        </div>
                    </div>

                    <div className="flex flex-col ss:flex-row justify-evenly items-center">


                        <div className="flex flex-col justify-evenly items-center">
                            <h3 className="py-3 font-bricolage text-white">Kontakt</h3>
                            <div className="flex py-4">
                                <p className="px-2 text-white">kontakt@spacemobilehome.pl</p>
                            </div>

                            <div className="flex min-w-[200px] justify-center py-1 bg-white rounded-[20px]">
                                <a href="https://facebook.com" className="px-2"><img alt="facebook icon" src="/assets/contact/facebook.svg"
                                                                 className="w-[28px]"/>
                                </a>
                                <a href="https://instagram.com" className="px-2"><img alt="instagram icon" src="/assets/contact/instagram.svg"
                                                                 className="w-[28px]"/>
                                </a>
                                <a href="https://linkedin.com" className="px-2">
                                    <img alt="linkedin icon" src="/assets/contact/linkedin.svg"
                                         className="w-[28px]"/>
                                </a>
                            </div>
                        </div>
                        <div className="h-[100px] w-[2px] bg-primary hidden ss:block m-[20px]"></div>

                        <div className="flex justify-center items-center py-2 ">
                            <div className="flex flex-col justify-center items-center text-white  p-2">
                                <h3 className="py-3 font-bricolage">Produkty</h3>
                                <p className="p-1">Zapraszamy</p>
                                <p className="p-1">Zapraszamy</p>
                                <p className="p-1">Zapraszamy</p>
                            </div>
                            <div className="flex flex-col justify-center items-center text-white  p-2">
                                <h3 className="py-3 font-bricolage">Galeria</h3>
                                <p className="p-1">Zapraszamy</p>
                                <p className="p-1">Zapraszamy</p>
                                <p className="p-1">Zapraszamy</p>
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
