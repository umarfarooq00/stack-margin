import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="footer-content"
        whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        <motion.p
          className="copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © {currentYear} <span className="brand">StackMargin</span>. All Rights
          Reserved.
        </motion.p>

        <motion.div
          className="footer-decoration"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
        />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
