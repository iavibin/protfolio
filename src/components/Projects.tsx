import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>

          <div className="grid gap-8">
            {profileData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
