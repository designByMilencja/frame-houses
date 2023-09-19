import {equipmentBasic, equipmentExtend, equipmentPremium} from "@/constants";

const Equipment = () => {
    return (
        <section id="equipment" className="flex flex-col my-[50px]">
            <div className="m-3 p-5 bg-gradient-to-b from-primary to-transparent">
                <div className="h-[100%] flexEvenly flex-col text-center">
                    <h2 className="text-3xl text-contact p-3 mb-7 font-bold tracking-wider"> Wyposażenie naszych domów
                        mobilnych</h2>
                    <div className="shadow p-2 text-green bg-primary rounded-[15px]">
                        <p className="font-bold text-center px-[20px] ss:px-[30px] sm:mx-[100px] md:mx-[200px] my-8">
                            Nasze domki mobilne są perfekcyjnie wyposażone, aby zapewnić Ci jak największy komfort. Nie
                            musisz martwić się urządzaniem, przejdź od razu do korzystania ze swojego nowego domu,
                            dzięki naszym projektantom</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="p-10 text-2xl text-green text-center">W skład wyposażenia wchodzą:</h3>
                <div className={`grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-4 border-contact border rounded-[15px]`}>
                    <div className="col-span-1 p-3">
                        <h4 className="p-3 font-bold text-center">Pakiet podstawowy</h4>
                        <div
                            className={`grid grid-rows-${equipmentBasic.length} gap-2 bg-green text-primary rounded-[15px] p-5`}>
                            {equipmentBasic.map((equipment, index) => (
                                <div key={index} className="flex items-baseline">
                                    <div className="w-[16px] h-[16px] bg-contact rounded-[15px] p-2"></div>
                                    <div className="row-span-1 p-2">{equipment}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-span-1 p-3">
                        <h4 className="p-3 font-bold text-center">Pakiet rozszerzony</h4>
                        <div
                            className={`grid grid-rows-${equipmentExtend.length} gap-2 bg-green text-primary rounded-[15px] p-5`}>
                            {equipmentExtend.map((equipment, index) => (
                                <div key={index} className="flex items-baseline">
                                    <div className="w-[16px] h-[16px] p-2 bg-contact rounded-[15px]"></div>
                                    <div className="row-span-1 p-2">{equipment}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="col-span-1 p-3 ">
                        <h4 className="p-3 font-bold text-center">Pakiet premium</h4>
                        <div
                            className={`grid grid-rows-${equipmentPremium.length} gap-2 bg-green text-primary rounded-[15px] p-5`}>
                            {equipmentPremium.map((equipment, index) => (
                                <div key={index} className="flex items-baseline">
                                    <div className="w-[16px] h-[16px] p-2 bg-contact rounded-[15px]"></div>
                                    <div className="row-span-1 p-2">{equipment}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Equipment
