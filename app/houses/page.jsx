import HeroHouses from "@/components/houses/Hero";
import Products from "@/components/houses/Products";

export default function Houses() {
    return (
        <>
            <section id="houses"
                     className="max-w-[1700px] flex justify-center items-center w-full h-screen text-primary relative">
                <HeroHouses/>
            </section>
            <section id="houses-types"
                     className=" max-w-[1700px] flex justify-center items-center w-full text-primary relative">
                <Products/>
            </section>
        </>
    )
}
