'use client'
import {motion} from "framer-motion";
import {move2} from "@/utils/motion";
import Button from "@/components/Button";

const HeaderHome = () => {
    return (
        <motion.div
            variants={move2} initial="hidden" whileInView="show"
            className="flex flex-col justify-center items-center absolute h-[80%] z-[5]">
            <h1 className="font-bricolage text-4xl xs:text-6xl uppercase p-3 text-primary text-center"> Space Mobile House</h1>
            <h2 className="font-bricolage text-2xl xs:text-3xl p-8 text-primary text-center">Twoja wymarzona przestrzeń</h2>
            <Button text="Sprawdź nasze domy szkieletowe"/>
        </motion.div>
    )
}
export default HeaderHome
