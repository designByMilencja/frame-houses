'use client'
import {contact, contactInfo, contactLinks} from "@/constants";
import Image from "next/image";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactLinks from "@/components/contact/ContactLinks";

const Contact = () => {
    return (
        <section id="contact" className="w-full flexStart flex-col lg:px-20 py-6 px-5 gap-12 bg-green">
            <div className="flex flex-col gap-12 max-w-[1200px]">
                <div className="absolute inset-0 clip-trapezoid-primary"></div>
                <div className="flex items-center flex-col mt-5">
                    <Image src="/assets/icons/home-outline.svg" alt="home icon - logo" width={138} height={138}/>
                    <div className="flex flex-col text-primary text-center mt-2 max-w-xs">
                        <h2 className="font-extrabold text-2xl p-2">{contact.h2}</h2>
                        <h3 className="text-1xl p-2">{contact.h3}</h3>
                    </div>
                </div>
                <div className="flex flex-wrap gap-12 text-primary text-center">
                    <ContactInfo title={contactInfo[0].title} infos={contactInfo[0].infos}/>
                    <ContactLinks title={contactLinks[0].title} links={contactLinks[0].links}/>
                    <ContactLinks title={contactLinks[1].title} links={contactLinks[1].links}/>
                </div>
            </div>
        </section>
    )
}
export default Contact
