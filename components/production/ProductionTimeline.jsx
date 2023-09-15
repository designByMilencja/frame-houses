'use client'
import {motion} from "framer-motion";
import {move2} from "@/utils/motion";
import {steps} from "@/constants";

function ProductionTimeline() {
    return (
        <div className="my-[50px]">
            {steps.map((step) => (
                <div className={`flex ${step.id % 2 === 0 ? "flex-row-reverse": ""} justify-center w-full relative overflow-hidden`}>
                    <motion.div
                        key={step.id}
                        variants={move2} initial="hidden" whileInView="show"
                        className="flex flex-col w-[90%] sm:w-2/5 bg-green rounded-[15px] text-primary p-5 text-center mx-[10px] my-[20px] sm:m-0">
                        <h3 className="text-center">{step.title}</h3>
                        <p className="px-3 py-6">{step.desc}</p>
                        <img src={step.src} alt={step.alt} className="w-[300px] mx-auto rounded-[15px]"/>
                    </motion.div>
                    <motion.div
                        variants={move2} initial="hidden" whileInView="show"
                        className="justify-center w-1/5 hidden sm:flex">
                        <div className="w-[16px] h-[16px] bg-contact rounded-[15px] dot"></div>
                    </motion.div>
                    <div className="w-2/5 hidden sm:block"></div>
                </div>
            ))}
        </div>
    )
}

export default ProductionTimeline;
