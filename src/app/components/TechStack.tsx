import { motion } from 'motion/react';
import { Code2, Database, Globe, Laptop, Server, Smartphone } from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    icon: Globe,
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Bootstrap']
  },
  {
    name: 'Backend',
    icon: Server,
    techs: ['Node.js', 'Express', 'Python', 'PHP', 'ASP.NET']
  },
  {
    name: 'Database',
    icon: Database,
    techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'MS SQL Server']
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    techs: ['Java', 'Android', 'XAML']
  },
  {
    name: 'DevOps',
    icon: Laptop,
    techs: ['Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Netlify']
  },
  {
    name: 'Tools',
    icon: Code2,
    techs: ['Git', 'VS Code', 'Figma', 'Postman', 'Jira', 'MS Office Applications']
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Tech Stack</h2>
          <p className="text-gray-400 text-xl">The tools I use to build amazing things</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 10px 30px rgba(19, 108, 81, 0.3)'
              }}
              className="p-6 rounded-xl border-2 bg-black relative overflow-hidden"
              style={{ borderColor: '#136C51' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent to-[#136C51] opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="w-6 h-6" style={{ color: '#136C51' }} />
                </motion.div>
                <h3 className="text-xl text-white">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm text-white cursor-default"
                    style={{ backgroundColor: 'rgba(19, 108, 81, 0.2)', border: '1px solid #136C51' }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(19, 108, 81, 0.4)',
                      y: -2
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
