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

export const mobileMenuAnimationProps = {
  exit: { opacity: 0, y: -25, transition: { ease: "easeOut", duration: 0.5 } },
  animate: { opacity: 1, y: 0, transition: { ease: "easeIn", duration: 0.5 } },
  initial: { opacity: 0, y: -25 },
};
