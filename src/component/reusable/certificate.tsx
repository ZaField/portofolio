import { motion } from "framer-motion";

interface CertProps {
  cert: {
    title: string;
    image: string;
    issuer: string;
  };
}

const CertCard: React.FC<CertProps> = ({ cert }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow hover:shadow-lg transition-all p-4 w-full sm:w-72 md:w-80 lg:w-96"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full aspect-video object-cover rounded-md mb-4"
      />
      <h3 className="text-base sm:text-lg font-semibold">{cert.title}</h3>
      <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
    </motion.div>
  );
};

export default CertCard;
