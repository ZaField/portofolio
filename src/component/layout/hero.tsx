import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white px-6 text-center"
    >
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
      >
        Hello, I’m <span className="text-cyan-400">ZaField</span>
      </motion.h1>

      <motion.p
        variants={textVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
        className="mt-4 text-lg md:text-2xl max-w-xl text-gray-300"
      >
        A Front-End Explorer crafting galaxies of UI, one pixel at a time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8"
      >
        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
