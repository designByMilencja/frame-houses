import {motion} from "framer-motion";
import {move2} from "@/utils/motion";

const HeaderHome = () => {
    return (
        <motion.div
            variants={move2} initial="hidden" whileInView="show"
            className="flex flex-col justify-center items-center absolute h-[80%] z-[5]">
            <h1 className="font-bricolage text-6xl uppercase p-3"> Space Mobile House</h1>
            <h2 className="font-bricolage text-3xl p-3">Twoja wymarzona przestrzeń</h2>
            <button className="bg-fourth rounded-[20px] p-3" > Sprawdź nasze projekty</button>
        </motion.div>
    )
}
export default HeaderHome
