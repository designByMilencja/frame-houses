import {equipment, equipmentVariants} from "@/constants";

const Equipment = () => {
    return (
        <section id="equipment" className="flex flex-col my-[50px]">
            <div className="bg-gradient-to-b from-primary to-transparent m-3 p-5">
                <div className="h-[100%] flexEvenly flex-col text-center">
                    <h2 className="text-3xl text-contact font-bold tracking-wider p-3 mb-7">{equipment.h2}</h2>
                    <div className="shadow text-green bg-primary rounded-[15px] p-2">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">{equipment.p}</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-2xl text-green text-center p-10">{equipment.h3}</h3>
                <div className={`grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-4 border-contact border rounded-[15px]`}>
                    {equipmentVariants.map((variant, index) => (
                        <div className="col-span-1 p-3" key={index}>
                            <h4 className="font-bold text-center p-3">{variant.title}</h4>
                            <div className={`grid grid-rows-${variant.title.length} gap-2 bg-green text-primary rounded-[15px] p-5`}>
                                {variant.equipment.split(', ').map((equipmentItem, equipmentIndex) => (
                                    <div key={equipmentIndex} className="flex items-baseline">
                                        <div className="w-[16px] h-[16px] bg-contact rounded-[15px] p-2"></div>
                                        <div className="row-span-1 p-2">{equipmentItem.replace(/'/g, '')}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Equipment
