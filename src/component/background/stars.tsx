import { motion } from "framer-motion";
import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: string;
  duration: number;
  delay: number;
};

const generateStars = (count: number): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    });
  }
  return stars;
};

const Stars = () => {
  const stars = useMemo(() => generateStars(120), []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: "9999px",
            backgroundColor: "white",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
