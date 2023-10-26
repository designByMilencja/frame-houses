import ProductionTimeline from "@/components/productions/ProductionTimeline";
import Equipment from "@/components/productions/Equipment";
import {production} from "@/constants";

const Productions = () => {
    return (
        <section id="productions" className="flex flex-col">
            <div className="bg-gradient-to-b from-primary to-transparent m-3 p-5">
                <div className="h-[100%] flexEvenly flex-col text-center">
                    <h2 className="text-3xl text-contact font-bold tracking-wider p-3 mb-7">{production.h2}</h2>
                    <div className="shadow text-green bg-primary rounded-[15px] p-2">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">{production.p}</p>
                    </div>
                </div>
            </div>
            <div className="h-[100%] text-green bg-primary p-2">
                    <h3 className="text-2xl text-center p-8">{production.h3}</h3>
            </div>
            <ProductionTimeline/>
            <Equipment/>
        </section>
    )
}
export default Productions
