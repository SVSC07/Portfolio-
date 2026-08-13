export const splashContainerVariants = {
  initial: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const counterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
  },
};

// SVG Parts
export const part1Variants = {
  initial: { opacity: 0, x: -30, y: 0 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const part2Variants = {
  initial: { opacity: 0, x: 0, y: -20 },
