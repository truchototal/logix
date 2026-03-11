import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

const BlurReveal = ({ children, delay = 0, duration = 0.8, className = "", y = 20 }: BlurRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: "blur(4px)",
        willChange: "filter, opacity, transform",
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      } : {
        opacity: 0,
        y,
        filter: "blur(4px)",
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurReveal;
