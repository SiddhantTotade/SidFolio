import { motion } from "framer-motion";

import { patterns } from "../../data/coloredText";

export const highlightText = (text: string) => {
  let highlightedText = text;
  patterns.forEach(({ pattern, className }) => {
    highlightedText = highlightedText.replace(
      pattern,
      `<span class="text-transparent bg-gradient-to-r bg-clip-text animate-text ${className}">$&</span>`
    );
  });

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );
};
