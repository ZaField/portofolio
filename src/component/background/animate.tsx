import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  // Dynamically get scroll height from container
  useEffect(() => {
    const update = () => {
      scrollContainerRef.current = document.querySelector("#scroll-container");
      if (scrollContainerRef.current) {
        setScrollHeight(scrollContainerRef.current.scrollHeight - window.innerHeight);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, scrollHeight], [0, -scrollHeight]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ y }}
    >
      <img
        src="/background.jpg"
        alt="Starfield"
        className="w-full object-cover"
        style={{ height: scrollHeight + window.innerHeight }}
      />
    </motion.div>
  );
};

export default ParallaxBackground;
