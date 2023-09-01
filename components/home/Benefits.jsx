import {benefits} from "@/constants";

const Benefits = () => {
    return (
        <>
            <section id="benefits" className="w-full flex flex flex-col max-w-[1200px] mx-auto">
                <div className="flex flex-1 flex-row flex-wrap justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            className="circle bg-gradient-to-b from-dark to-transparent box-with-shadow my-5 sm:mx-5 ">
                            <div key={index} className="w-[300px] xs:w-[400px] ss:w-[450px] sm:w-[300px] md:w-[400px]   text-text m-3">
                                <h2 className="text-center text-2xl px-3 py-4 font-bold">{benefit.title}</h2>
                                <p className="text-center text-sm px-3 py-4">
                                    {benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )

}
export default Benefits
