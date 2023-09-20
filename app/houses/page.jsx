import HeroHouses from "@/components/houses/HeroHouses";
import Products from "@/components/houses/Products";
import HeaderHome from "@/components/home/HeaderHome";

export default function Houses() {
    return (
        <>
            <section id="houses"
                     className="w-full h-screen max-w-[1700px] flexCenter text-primary relative">
                <HeroHouses/>
                <HeaderHome h1="Space Mobile Home" h2="Sprawdź jaki dom mamy dla Ciebie" text="Modele domów szkieletowych" href="/houses#models"/>
            </section>
            <section id="houses-types"
                     className="w-full max-w-[1700px] flexCenter text-primary relative">
                <Products/>
            </section>
        </>
    )
}
