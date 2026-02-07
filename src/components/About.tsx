import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { Code2, Rocket } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About <span className="text-cyan-500">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-cyan-500" />
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {profileData.about.description}
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-cyan-500" />
                <h3 className="text-2xl font-semibold text-white">My Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {profileData.about.goal}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
