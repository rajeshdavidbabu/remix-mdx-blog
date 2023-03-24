// Framer motion animation config
export const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

export const imageLoadAnimationProps = {
  initial: { scale: 1.5 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    duration: 1,
  },
};

export const mobileNavContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export const mobileNavListVariant = {
  hidden: { y: -20, height: 0, opacity: 0 },
  show: { opacity: 1, height: "auto", y: 0 },
};

export const mobileNavExitProps = {
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

export const logoRotationVariant = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 50,
      ease: "linear",
    },
  },
};
