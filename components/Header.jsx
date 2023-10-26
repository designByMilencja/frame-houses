'use client'
import {motion} from "framer-motion";
import {move2} from "@/utils/motion";
import Button from "@/components/Button";

const Header = ({h1, h2, text, href}) => {
    return (
        <motion.div
            variants={move2} initial="hidden" whileInView="show"
            className="flexCenter flex-col absolute h-[80%] z-[5] text-primary text-center">
            <h1 className="text-4xl xs:text-6xl uppercase text-with-darkShadow p-3"> {h1}</h1>
            <h2 className="text-2xl xs:text-3xl p-8">{h2}</h2>
            <Button text={text} href={href}/>
        </motion.div>
    )
}
export default Header
