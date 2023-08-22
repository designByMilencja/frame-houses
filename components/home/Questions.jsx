'use client'
import {motion} from "framer-motion";
import {move2, move3} from "@/utils/motion";

const Questions = ({questions}) => {
    return (
        <div className="p-1">
            {questions.map((question, index) => (
                <div
                    key={index}
                    className="flex ml-3">
                    <motion.img
                        variants={move2} initial="hidden" whileInView="show"
                        src='/assets/icons/checkmark-done-outline.svg' alt="checkmark icon"
                        className="w-[38px] p-1"/>
                    <motion.p
                        variants={move3} initial="hidden" whileInView="show"
                        className="mt-5 text-lg text-black sm:text-xl min-w-[200px] max-w-[600px]">{question}</motion.p>
                </div>
            ))}
        </div>
    )
}
export default Questions
