import HeaderHome from "@/components/home/HeaderHome";
import Form from "@/components/contact/Form";

export default function Houses() {
    return (
        <>
            <section id="contact"
                     className="max-w-[1700px] flex justify-center items-center w-full h-screen text-primary relative bg-light ">
                <HeaderHome h1="Space Mobile Home" h2="Rozwiej swoje wątpliwości i napisz do nas" text="Przejdź do kontaktu"/>
                <div className="absolute h-[99%] w-[100%] bg-black opacity-30 rounded-[20px] z-[1]"></div>
                <img src='/assets/icons/home-outline.svg' alt="home icon" className="w-[408px] h-[408px] "/>
                <img src='/assets/icons/home-outline.svg' alt="home icon" className="w-[508px] h-[508px]"/>
                <img src='/assets/icons/home-outline.svg' alt="home icon" className="w-[408px] h-[408px] "/>
            </section>
            <section id="houses-types"
                     className=" max-w-[1700px] flex justify-center items-center w-full text-primary relative bg-light">
                <Form/>
            </section>
        </>
    )
}
