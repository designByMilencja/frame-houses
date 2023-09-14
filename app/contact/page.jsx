import HeaderHome from "@/components/home/HeaderHome";
import ContactForm from "@/components/contact/ContactForm";
import Invite from "@/components/contact/Invite";

export default function Contact() {
    return (
        <>
            <section id="contact"
                     className="w-full h-screen max-w-[1700px] flex justify-center items-center text-text bg-primary relative">
                <HeaderHome h1="Space Mobile House" h2="Napisz do nas, by rozwiać swoje wątpliwości" text="Przejdź do kontaktu" href="#form"/>
                <div className="shadow absolute bg-cover bg-center h-[97%] w-[97%] rounded-[15px] overflow-hidden z-[1]"
                     style={{backgroundImage: "url('/assets/images/contact.jpg')"}}>
                </div>
                <div className="absolute h-[98%] w-[98%] bg-text opacity-10 rounded-[15px] z-[2]"></div>
            </section>
            <section id="houses-types"
                     className="w-full max-w-[1200px] flex flex-col justify-center items-center text-text relative">
                <Invite/>
                <ContactForm/>
            </section>
        </>
    )
}
