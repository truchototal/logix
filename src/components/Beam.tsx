import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BeamProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}

const Beam = ({ direction = "horizontal", className = "", delay = 0 }: BeamProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: "hidden" }}>
      {direction === "horizontal" ? (
        <div style={{ width: "100%", height: "1px", position: "relative" }}>
          <div style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.15), transparent)",
          }} />
          {isInView && (
            <motion.div
              initial={{ left: "-20%", opacity: 0 }}
              animate={{ left: "120%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2,
                delay,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "-1px",
                width: "80px",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #00d9ff, transparent)",
                borderRadius: "2px",
                boxShadow: "0 0 15px rgba(0, 217, 255, 0.5), 0 0 30px rgba(0, 217, 255, 0.2)",
              }}
            />
          )}
        </div>
      ) : (
        <div style={{ width: "1px", height: "100%", position: "relative" }}>
          <div style={{
            width: "1px",
            height: "100%",
            background: "linear-gradient(180deg, transparent, rgba(0, 217, 255, 0.15), transparent)",
          }} />
          {isInView && (
            <motion.div
              initial={{ top: "-20%", opacity: 0 }}
              animate={{ top: "120%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                delay,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                left: "-1px",
                width: "3px",
                height: "80px",
                background: "linear-gradient(180deg, transparent, #00d9ff, transparent)",
                borderRadius: "2px",
                boxShadow: "0 0 15px rgba(0, 217, 255, 0.5), 0 0 30px rgba(0, 217, 255, 0.2)",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Beam;
