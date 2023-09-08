'use client'
import {motion} from "framer-motion";
import {move2} from "@/utils/motion";
import Button from "@/components/Button";

const HeaderHome = ({h1, h2, text}) => {
    return (
        <motion.div
            variants={move2} initial="hidden" whileInView="show"
            className="flex flex-col justify-center items-center absolute h-[80%] z-[5] text-primary text-center">
            <h1 className="text-4xl xs:text-6xl uppercase text-with-shadow p-3"> {h1}</h1>
            <h2 className="text-2xl xs:text-3xl p-8">{h2}</h2>
            <Button text={text}/>
        </motion.div>
    )
}
export default HeaderHome
