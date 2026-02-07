import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profileData } from '../constants/profile';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      name: 'Email',
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      icon: Mail,
      color: 'hover:border-red-500 hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profileData.contact.linkedin,
      icon: Linkedin,
      color: 'hover:border-blue-500 hover:text-blue-400'
    },
    {
      name: 'GitHub',
      value: 'View my repositories',
      href: profileData.contact.github,
      icon: Github,
      color: 'hover:border-purple-500 hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-slate-900" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Let's <span className="text-cyan-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-2 border-slate-700 ${link.color} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-slate-700/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {link.name}
                      </h3>
                      <p className="text-gray-400 text-sm break-all">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="inline-block p-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700">
              <p className="text-gray-400 mb-4">
                "Building the future, one line of code at a time."
              </p>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
