import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { RevealText } from './RevealText';
import { ExternalLink, Github, Code2, Database, BarChart3 } from 'lucide-react';

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    python: <Code2 className="w-5 h-5" />,
    flask: <Code2 className="w-5 h-5" />,
    mysql: <Database className="w-5 h-5" />,
    'chart.js': <BarChart3 className="w-5 h-5" />
  };
  return iconMap[tech.toLowerCase()] || <Code2 className="w-5 h-5" />;
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <RevealText text="Featured Projects" delay={100} />
          </h2>

          <div className="grid gap-8">
            {profileData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
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

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group/tech"
                            >
                              <span className="text-cyan-400 group-hover/tech:text-cyan-300">
                                {getTechIcon(tech)}
                              </span>
                              <span className="text-gray-300 text-sm font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
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