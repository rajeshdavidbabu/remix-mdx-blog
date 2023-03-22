import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <motion.img
        alt="Blog Logo"
        src="/assets/images/logo.webp"
        className="block w-[75px]"
        width="75"
        height="50"
        animate={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        whileHover={{ rotate: 180 }}
      />
    </a>
  );
};

export default Logo;
