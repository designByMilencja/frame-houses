import HeaderHome from "@/components/home/HeaderHome";
import Form from "@/components/contact/Form";

export default function Houses() {
    return (
        <>
            <section id="contact"
                     className="w-full h-screen max-w-[1700px] flex justify-center items-center text-text bg-primary relative">
                <HeaderHome h1="Space Mobile House" h2="Rozwiej swoje wątpliwości i napisz do nas" text="Przejdź do kontaktu"/>
                <div className="bg-cover bg-center w-[98%] h-[98%] rounded-[15px]" style={{backgroundImage: "url('/assets/images/pawel-czerwinski-Ub0pkOC02Sg-unsplash.jpg')"}}></div>
            </section>
            <section id="houses-types"
                     className="w-full max-w-[1700px] flex justify-center items-center text-text bg-primary relative">
                <h3>Prześlij nam wiadomość a skontaktujemy się z Tobą najszybciej jak to możliwe</h3>
                <Form/>
            </section>
        </>
    )
}
