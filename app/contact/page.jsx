import HeaderHome from "@/components/home/HeaderHome";

export default function Houses() {
    return (
        <>
            <section id="contact"
                     className="max-w-[1700px] flex justify-center items-center w-full h-screen text-primary relative bg-light">
                <HeaderHome h1="Space Mobile Home" h2="Sprawdź jaki dom mamy dla Ciebie" text="Rodzaje domów szkieletowych"/>
            </section>
            <section id="houses-types"
                     className=" max-w-[1700px] flex justify-center items-center w-full text-primary relative">
            </section>
        </>
    )
}
