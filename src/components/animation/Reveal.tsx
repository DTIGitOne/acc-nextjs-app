'use client'
import { aniProps } from "@/ts/interface";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const Reveal = ({children, width, var1, var2, height} : aniProps) => {
    const elementDiv = useRef(null);
    const inView = useInView(elementDiv, {once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
        }
    }, [inView]);

    return (
        <div className=" flex justify-center items-center" ref={elementDiv} style={{position: "relative", width, height, overflow: "hidden"}}>
            <motion.div
              style={{height}}
              variants={{
                hidden: var1,
                visible: var2,
              }}
              initial="hidden"
              transition={{duration: 0.65, delay: 0.3}}
              animate={mainControls}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Reveal;