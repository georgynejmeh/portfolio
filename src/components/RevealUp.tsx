import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const RevealUp = ({ children, delay = 0.0 }: Props) => {
  return (
    <motion.div
      viewport={{
        once: true,
        amount: "all",
        margin: "0px 0px 25px 0px",
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealUp;
