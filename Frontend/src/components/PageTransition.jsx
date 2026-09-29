import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const { state } = useLocation();
  const isBack = state?.back;

  return (
    <motion.div
      initial={{ opacity: 0, x: isBack ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isBack ? 60 : -60 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: "100%", minHeight: "100svh" }}
    >
      {children}
    </motion.div>
  );
}
