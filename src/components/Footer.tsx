import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-8 mt-12"
      style={{
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
      }}
    >
      <p className="text-sm text-gray-600 text-center">
        © Taram Engineering - Taram.in | Powered by WEBEM | Best view with resolution 1024*768.
      </p>
    </motion.footer>
  );
};

export default Footer;
