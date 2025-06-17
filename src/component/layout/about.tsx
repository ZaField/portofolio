import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 text-white"
    >
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={aboutVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Hey there! 🚀 I'm <span className="text-indigo-400 font-semibold">[Your Name]</span>, a passionate developer who loves building
          immersive web experiences. I explore the cosmos of code through modern tools like React, TypeScript, and Tailwind CSS.
          Inspired by the endless mysteries of space, my mission is to craft clean, performant, and beautiful interfaces.
        </p>
        <p className="text-md md:text-lg text-gray-400 italic">
          “Somewhere, something incredible is waiting to be known.” – Carl Sagan
        </p>
      </motion.div>
    </section>
  );
}
