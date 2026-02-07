import { motion, useInView } from 'framer-motion';
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

// Sub-component for individual project cards to handle their own scroll reveal
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden aspect-video md:aspect-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

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
                {project.tech.map((tech: string) => (
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
            {/* FIXED: Added content and properly closed tags */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/10"
            >
              <Github className="w-5 h-5" />
              <span>Source</span>
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors border border-cyan-500/30"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>