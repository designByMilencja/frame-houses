import Plus from "@/components/houses/Plus";
import HouseGrid from "@/components/houses/HouseGrid";
import {mobileHouses, products} from "@/constants";
import ProductSection from "@/components/houses/ProductSection";

const Products = () => {
    return (
        <section id="products" className="flex flex-col">
            <div className="m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                <div className="h-[100%] flexEvenly flex-col text-center">
                    <h2 className="text-3xl text-contact p-3 mb-7 font-bold tracking-wider">{products.h2}</h2>
                    <div className="p-2 text-green bg-primary rounded-[15px]">
                        <h3 className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">{products.h3}</h3>
                    </div>
                </div>
            </div>
            <div className="h-[100%] flexEvenly flex-col text-center">
                <div className="p-2 text-green bg-primary">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        {products.houses.map((house, index) => (
                            <ProductSection
                                key={index}
                                title={house.h4}
                                imageUrl={house.imageUrl}
                                description={house.p}
                            />
                        ))}
                    </div>
                    <HouseGrid houses={mobileHouses}/>
                    <Plus/>
                </div>
            </div>
        </section>
    )
}
export default Products
