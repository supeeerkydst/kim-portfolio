import { motion } from 'motion/react';
import { Code2, Database, Globe, Laptop, Server, Smartphone } from 'lucide-react';
// Importing specific brand icons
import { DiVisualstudio, DiMsqlServer  } from "react-icons/di";
import { TiVendorMicrosoft } from "react-icons/ti";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiBootstrap,
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiPhp, 
  SiDotnet,
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiFirebase, 
  SiAndroid, 
  SiOpenjdk, 
  SiDocker, 
  SiGithubactions, 
  SiVercel, 
  SiNetlify, 
  SiGit, 
  SiFigma, 
  SiPostman, 
  SiJira
} from 'react-icons/si';

const techCategories = [
  {
    name: 'Frontend',
    icon: Globe,
    techs: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Bootstrap', icon: SiBootstrap },
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    techs: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Python', icon: SiPython },
      { name: 'PHP', icon: SiPhp },
      { name: 'ASP.NET', icon: SiDotnet },
    ]
  },
  {
    name: 'Database',
    icon: Database,
    techs: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'MS SQL', icon: DiMsqlServer },
    ]
  },
  {
    name: 'DevOps',
    icon: Laptop,
    techs: [
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
    ]
  },
  {
    name: 'Tools',
    icon: Code2,
    techs: [
      {name:'Git' , icon: SiGit},
      {name:'VS Code' , icon: DiVisualstudio},
      {name:'Figma' , icon: SiFigma},
      {name:'Postman' , icon: SiPostman},
      {name:'Jira' , icon: SiJira},
      {name:'MS Office Applications' , icon: TiVendorMicrosoft},
      
    ]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white font-bold">Tech Stack</h2>
          <p className="text-gray-400 text-xl">The tools I use to build amazing things</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border-2 bg-black relative overflow-hidden group"
              style={{ borderColor: '#136C51' }}
            >
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <category.icon className="w-6 h-6" style={{ color: '#136C51' }} />
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-white"
                    style={{ backgroundColor: 'rgba(19, 108, 81, 0.15)', border: '1px solid rgba(19, 108, 81, 0.3)' }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(19, 108, 81, 0.4)',
                      borderColor: '#136C51' 
                    }}
                  >
                    <tech.icon className="w-4 h-4" />
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
