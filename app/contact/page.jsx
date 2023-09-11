import HeaderHome from "@/components/home/HeaderHome";
import ContactForm from "@/components/contact/ContactForm";
import Invite from "@/components/contact/Invite";

export default function Houses() {
    return (
        <>
            <section id="contact"
                     className="w-full h-screen max-w-[1700px] flex justify-center items-center text-text bg-primary relative">
                <HeaderHome h1="Space Mobile House" h2="Napisz do nas, by rozwiać swoje wątpliwości" text="Przejdź do kontaktu"/>
                <div className="bg-cover bg-center w-[98%] h-[98%] rounded-[15px]" style={{backgroundImage: "url('/assets/images/pawel-czerwinski-Ub0pkOC02Sg-unsplash.jpg')"}}></div>
            </section>
            <section id="houses-types"
                     className="w-full max-w-[1200px] flex flex-col justify-center items-center text-text relative">
                <Invite/>
                <ContactForm/>
            </section>
        </>
    )
}
