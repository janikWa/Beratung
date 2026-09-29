"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Blendet Inhalte beim Scrollen sanft ein (einmalig). */
export default function FadeIn({ delay = 0, y = 24, children, ...props }: FadeInProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
