import Image from "next/image";
import React from "react";
import "./bottle.css";
import { motion } from "motion/react";

const Bottle = ({ src, y, scale }: { src: any; y: any, scale: any }) => {
  return (
    <motion.div
      className="fixed bottle left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 perspective-dramatic"
      style={{ scale, y }}
    >
      <Image
        src={src}
        width={500}
        height={1000}
        alt="a bottle of Schlurp"
        id="bottle"
      />
    </motion.div>
  );
};

export default Bottle;
