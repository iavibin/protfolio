import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Academic <span className="text-cyan-500">Journey</span>
          </h2>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-cyan-500 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {profileData.education.degree}
                </h3>
                <p className="text-gray-400 text-lg">
                  {profileData.education.institution}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {profileData.education.semesters.map((semester, index) => (
              <motion.div
                key={semester.number}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-cyan-500" />
                    <h4 className="text-xl font-bold text-white">
                      Semester {semester.number}
                    </h4>
                  </div>
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      semester.status === 'Completed'
                        ? 'bg-green-500/10 text-green-400 border border-green-500'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500'
                    }`}
                  >
                    {semester.status}
                  </span>
                </div>

                {semester.gpa && (
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                    <span className="text-2xl font-bold text-white">
                      {semester.gpa}
                    </span>
                    <span className="text-gray-400">GPA</span>
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    Key Focus Areas
                  </p>
                  {semester.focus.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                      <span>{course}</span>
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
