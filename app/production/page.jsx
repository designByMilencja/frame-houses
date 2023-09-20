import HeaderHome from "@/components/home/HeaderHome";
import ProductionBox from "@/components/production/ProductionBox";

export default function Production() {
    return (
        <>
            <section id="production"
                     className="w-full h-screen max-w-[1700px] flexCenter text-text bg-primary relative">
                <HeaderHome h1="Space Mobile House" h2="Poznaj etapy budowy naszych domów" text="Przejdź do kontaktu" href="/contact#form"/>
                <div className="shadow absolute bg-cover bg-center h-[97%] w-[97%] rounded-[15px] overflow-hidden z-[1]"
                     style={{backgroundImage: "url('/assets/images/production.jpg')"}}>
                </div>
                <div className="absolute h-[98%] w-[98%] bg-text opacity-20 rounded-[15px] z-[2]"></div>
            </section>
            <section id="houses-types"
                     className="w-full max-w-[1200px] flexCenter flex-col text-text relative">
                <ProductionBox/>
            </section>
        </>
    )
}
