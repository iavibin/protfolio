import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { RevealText } from './RevealText';
import { Check, Zap } from 'lucide-react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <RevealText text="Technical Arsenal" delay={100} />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Check className="w-6 h-6 text-green-500" />
                <h3 className="text-2xl font-semibold text-white">Proficient In</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {profileData.skills.known.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="px-5 py-2 bg-green-500/10 border border-green-500/40 rounded-lg text-green-400 text-sm font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-cyan-500" />
                <h3 className="text-2xl font-semibold text-white">Currently Mastering</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {profileData.skills.learning.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="px-5 py-2 bg-cyan-500/10 border border-cyan-500/40 rounded-lg text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
