import { motion } from "framer-motion";
import SkillItem from "../reusable/skillitem";
import CertCard from "../reusable/certificate";

const skills = ["React", "TypeScript", "Tailwind", "Node.js", "Framer Motion"];
const certifications = [
  {
    title: "Full Stack Web Dev",
    image: "/assets/certs/fullstack.png",
    issuer: "Coursera",
  },
  {
    title: "React Advanced",
    image: "/assets/certs/react.png",
    issuer: "Udemy",
  },
];

const Skill = () => {
  return (
    <section id="skill" className="h-screen text-white flex items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Certifications
        </motion.h2>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
