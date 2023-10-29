import { motion } from "framer-motion";
import { move3 } from "@/utils/motion";
import Link from "next/link";

const Button = ({ text, href }) => {
  return (
      <Link href={href}>
        <motion.button
            variants={move3}
            initial="hidden"
            whileInView="show"
            className="bg-green text-primary rounded-[15px] box-with-lightShadow m-2 px-5 py-4 hover:text-contact"
        >
          {text}
        </motion.button>
      </Link>
  );
};

export default Button;

