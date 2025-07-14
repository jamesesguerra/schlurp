"use client";
import { animate } from "motion";
import { motion, useMotionValue, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [rotate, setRotate] = useState("0");
  const [height, setHeight] = useState("100px");
  const [showText, setShowText] = useState(false);

  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 👈 each child starts 0.2s after the previous
        delayChildren: 0.1, // optional delay before starting the first
      },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="h-1000">
      <div className="mt-50 h-500 flex justify-center">
        <div className="border-solid mx-5 border-2 w-[80%] flex items-center flex-col gap-10">
          <div className="flex gap-5">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="x"
              onChange={(e) => setX(e.target.value)}
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="y"
              onChange={(e) => setY(e.target.value)}
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="rotate"
              onChange={(e) => setRotate(e.target.value)}
            />

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
                    leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="height"
              onChange={(e) => setHeight(e.target.value + "px")}
            />
          </div>
          <motion.div
            style={box}
            animate={{ x, y, rotate, height }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />

          <motion.div
            style={box}
            animate={{
              x: [0, 100, 0],
              scale: [1, 2, 1],
            }}
          />

          <motion.ul initial="hidden" whileInView="visible" variants={list}>
            <motion.li variants={item}>hi</motion.li>
            <motion.li variants={item}>hello</motion.li>
            <motion.li variants={item}>hola</motion.li>
          </motion.ul>

          <motion.pre>{count}</motion.pre>


          <button onClick={() => setShowText(!showText)}>Show me!</button>

          <motion.div layout style={{ background: '#ff0088', borderRadius: 5}}>
            hahaha
            {showText && <p>This text will slide into view smoothly</p>}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};
