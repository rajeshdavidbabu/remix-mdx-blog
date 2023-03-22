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
  hidden: { y: -20, opacity: 0 },
  show: { opacity: 1, y: 0 },
};

export const mobileNavExitProps = {
  exit: { y: -20, opacity: 0 },
};
