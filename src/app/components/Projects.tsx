import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Credit and Development Cooperative Web-Based Voting System ',
    description: 'A web application that allows thousands of CDC members to cast their votes in less than a minute during their annual committee members election.',
    image: 'https://images.unsplash.com/photo-1707388863824-ef70a83ec52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI2Nzc0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['React', 'Vite', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'CleverApp: Web and Mobile Computer Laboratory Monitoring Application',
    description: 'An android application that allows the school administrators and teachers to control the computers in their computer laboratory during their classes.',
    image: 'https://images.unsplash.com/photo-1764053430604-d585d1f1dad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcyNjc3NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
    github: '#',
    live: 'https://relate-shadow-20813923.figma.site'
  },
  {
    title: 'Biolink Supplies: E-Commerce Web Application Design',
    description: 'A proposed web prototype of an e-commerce application for selling products worldwide.',
    image: 'https://images.unsplash.com/photo-1758876203342-fc14c0bba67c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0YXJ0dXB8ZW58MXx8fHwxNzcyNjc3NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tech: ['Figma', 'React', 'Vite'],
    github: '#',
    live: 'https://shape-sharp-96021183.figma.site'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-400 text-xl">Building solutions across multiple realities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(19, 108, 81, 0.3)'
              }}
              className="rounded-xl overflow-hidden border-2 bg-black group"
              style={{ borderColor: '#136C51' }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.4 }}
                />
                
                {/* Animated overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#136C51] opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-2xl mb-3 text-white"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      className="text-xs px-2 py-1 rounded text-white"
                      style={{ backgroundColor: 'rgba(19, 108, 81, 0.3)' }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.15,
                        backgroundColor: 'rgba(19, 108, 81, 0.5)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.div>
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                    style={{ color: '#136C51' }}
                    whileHover={{ x: 3 }}
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
