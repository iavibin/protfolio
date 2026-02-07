import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export const RevealText = ({ text, className = '', delay = 0 }: RevealTextProps) => {
  const [displayText, setDisplayText] = useState(text.split('').map(() => characters[Math.floor(Math.random() * characters.length)]).join(''));
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(interval);
          setRevealed(true);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {revealed ? text : displayText}
    </motion.span>
  );
};
