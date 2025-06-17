import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

const icons = [
  { icon: <FaEnvelope />, link: "mailto:zakyhafiedz10@gmail.com" },
  { icon: <FaGithub />, link: "https://github.com/yourusername" },
  { icon: <FaInstagram />, link: "https://instagram.com/yourhandle" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourhandle" },
  { icon: <FaDiscord />, link: "https://discord.com/users/yourDiscordID"},
];

export default function Contact() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const rotation = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate IN
          controls.start({
            opacity: 1,
            scale: 1,
            rotate: 360,
            transition: {
              duration: 1.2,
              rotate: {
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              },
            },
          });
        } else {
          // Animate OUT
          controls.start({
            opacity: 0,
            scale: 0.5,
            transition: { duration: 1 },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      },
    });

    const inverseRotation = useTransform(rotation, (value) => -value);

    return (
        <section
        id="contact"
        ref={sectionRef}
        className="h-screen text-white flex items-center justify-center relative overflow-hidden"
        >
        <h1 className="text-6xl text-center font-bold z-10 whitespace-pre-line">
            Contact me{'\n'}at
        </h1>

        <motion.div
            className="absolute w-64 h-64 rounded-full"
            animate={controls}
            style={{ rotate: rotation }}
            initial={{ opacity: 0, scale: 0.5 }}
        >
            {icons.map((item, i) => {
            const angle = (i / icons.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const radius = 250;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
                <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute"
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                style={{
                    left: `calc(50% + ${x}px - 1rem)`,
                    top: `calc(50% + ${y}px - 1rem)`,
                    rotate: inverseRotation,
                }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <div className="w-8 h-8 md:w-13 md:h-13 bg-white text-black rounded-full flex items-center justify-center">
                    {item.icon}
                </div>
                </motion.a>
            );
            })}
        </motion.div>
        </section>
    );
}
