'use client'
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import {contact} from "@/constants";

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-green">
            <div className="max-w-[1200px] mx-auto">
                <div className="absolute inset-0 clip-trapezoid-primary"></div>
                <div className="flexCenter flex-col mb-[20px]">
                    <div className="flexCenter mt-[80px]">
                        <img alt="logo icon - house" src="/assets/icons/home-outline.svg" className="w-[138px] m-5"/>
                        <div className="flex flex-col text-primary">
                            <h2 className="font-extrabold text-2xl p-2">{contact.h2}</h2>
                            <h3 className="text-1xl p-2">{contact.h3}</h3>
                        </div>
                    </div>
                    <div className="flexCenter flex-col text-center">
                        <div className="flex flex-col sm:flex-row">
                            <div className="p-6 text-primary tracking-wider">
                                <p className="text-2xl p-2">{contact.p1}</p>
                                <p className="p-2">{contact.p2}</p>
                                <p className="p-2">{contact.p3}</p>
                                <a href="/privacy-policy" className="p-2">
                                    {contact.a1}
                                </a>
                            </div>

                            <div className="p-6 text-1xl text-primary">
                                <p className="tracking-wider p-3">{contact.p4}</p>
                                <Button text="kontakt@spacemobilehome.pl" href="mailto:kontakt@spacemobilehome.pl"/>
                                <div className="flexCenter flex-wrap">
                                    <Button text="Facebook" href="https://facebook.com"/>
                                    <Button text="Instagram" href="https://instagram.com"/>
                                    <Button text="Linkedin" href="https://linkedin.com"/>
                                </div>
                            </div>
                            <div className="p-6 flexCenter sm:flex-col flex-wrap text-primary">
                                <a href="/" className="p-2">{contact.a2}</a>
                                <a href="/houses" className="p-2">{contact.a3}</a>
                                <a href="/production" className="p-2">{contact.a4}</a>
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
