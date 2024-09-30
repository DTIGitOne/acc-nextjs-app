'use client'
import { aniPropsSlide } from "@/ts/interface";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";

const RevealAnimation = ({children, width, height, var1, var2, var3, var4, position, classes, dur, del} : aniPropsSlide) => {
    const elementDiv = useRef(null);
    const inView = useInView(elementDiv, {once: true})

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (inView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [inView]);

    return (
        <div className={classes} ref={elementDiv} style={{position, width, overflow: "hidden"}}>
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
            <motion.div
              variants={{
                hidden: var3,
                visible: var4,
              }}
              initial="hidden"
              transition={{duration: dur, ease: "easeIn", delay: del}}
              animate={slideControls}
              style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "#ff0000",
                zIndex: 20,
                height
              }}
            />
        </div>
    );
}

export default RevealAnimation;