'use client'
import {motion} from "framer-motion";
import {move2} from "@/utils/motion";
import Button from "@/components/Button";

const HeaderHome = ({h1, h2, text}) => {
    return (
        <motion.div
            variants={move2} initial="hidden" whileInView="show"
            className="flex flex-col justify-center items-center absolute h-[80%] z-[5]">
            <h1 className="font-bricolage text-with-shadow text-4xl xs:text-6xl uppercase p-3 text-primary text-center"> {h1}</h1>
            <h2 className="font-bricolage text-2xl xs:text-3xl p-8 text-primary text-center">{h2}</h2>
            <Button text={text}/>
        </motion.div>
    )
}
export default HeaderHome
