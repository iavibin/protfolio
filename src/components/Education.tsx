import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { RevealText } from './RevealText';
import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <RevealText text="Academic Journey" delay={100} />
          </h2>

          <motion.div
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {profileData.education.degree}
                </h3>
                <p className="text-cyan-400">
                  {profileData.education.institution}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {profileData.education.semesters.map((semester, index) => (
              <motion.div
                key={semester.number}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/8 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-xl font-bold text-white">
                      Semester {semester.number}
                    </h4>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                      semester.status === 'Completed'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    {semester.status}
                  </span>
                </div>

                {semester.gpa && (
                  <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-white/10">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    <span className="text-3xl font-bold text-cyan-400">
                      {semester.gpa}
                    </span>
                    <span className="text-gray-400 text-sm">GPA</span>
                  </div>
                )}

                <div className="space-y-3">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Focus Areas</p>
                  {semester.focus.map((course) => (
                    <div key={course} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
