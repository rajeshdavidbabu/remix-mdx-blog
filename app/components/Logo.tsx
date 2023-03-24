import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoRotationVariant } from "~/data/animationConfig";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.img
        alt="Blog Logo"
        src="/assets/images/logo.webp"
        className="block w-[75px]"
        width="75"
        height="50"
        variants={logoRotationVariant}
        animate="rotate"
        layout="position"
      />
    </NavLink>
  );
};

export default Logo;
