import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  reverse?: boolean;
}

const TextAnimate = ({ children, delay = 0.0, reverse = false }: Props) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        viewport={{
          once: true,
          amount: "all",
          margin: reverse ? "0px 300px 0px 0px" : "0px 0px 0px 300px",
        }}
        initial={{ opacity: 0, x: reverse ? 300 : -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextAnimate;
