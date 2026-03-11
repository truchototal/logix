import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spotlightColor?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const SpotlightCard = ({
  children,
  className = "",
  style = {},
  spotlightColor = "rgba(0, 217, 255, 0.08)",
  onMouseEnter,
  onMouseLeave,
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    onMouseEnter?.(e);
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    onMouseLeave?.(e);
  }, [onMouseLeave]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight radial gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${spotlightColor.replace("0.08", "0.15")}, transparent 65%)`,
          zIndex: 1,
        }}
      />
      {/* Animated border glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(0, 217, 255, 0.12), transparent 40%)`,
          zIndex: 0,
          borderRadius: "inherit",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
