"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function MotionDiv({ children, ...rest }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} {...rest}>
      {children}
    </motion.div>
  );
}
