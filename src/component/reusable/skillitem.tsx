import { motion } from "framer-motion";

interface SkillItemProps {
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <motion.span
      className="bg-blue-200 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillItem;
