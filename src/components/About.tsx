import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { RevealText } from './RevealText';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <RevealText text="About Me" delay={100} />
          </h2>

          <motion.div
            className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-gray-200 leading-relaxed text-lg">
              {profileData.about.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
