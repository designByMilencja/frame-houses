import {motion} from "framer-motion";
import {move3} from "@/utils/motion";

const Button = ({text}) => {
  return (
      <motion.button
          variants={move3} initial="hidden" whileInView="show"
          className="bg-dark text-primary rounded-[20px] m-2 p-3 box-with-shadow" >{text}</motion.button>
  )
}
export default Button
