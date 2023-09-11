import {motion} from "framer-motion";
import {move3} from "@/utils/motion";

const Button = ({text}) => {
  return (
      <motion.button
          variants={move3} initial="hidden" whileInView="show"
          className="bg-green text-primary rounded-[15px] box-with-lightShadow m-2 px-5 py-4" >{text}</motion.button>
  )
}
export default Button
