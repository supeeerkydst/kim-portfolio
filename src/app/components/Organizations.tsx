import { motion } from 'motion/react';
import { Building2, Users, Gamepad, Laptop } from 'lucide-react';

const organizations = [
  {
    name: 'KRYOXIN Technologies',
    role: 'Software Engineer',
    description: 'A freelancing team that turns imagination to digitalization.',
    icon: Laptop,
    members: '2+',
    established: '2026',
    highlights: ['Web Development', 'Mobile Applications', 'Desktop Applications', 'IT Consulting', 'Frontend Engineering', 'Database Engineering']
  },
  {
    name: 'FRX Esports',
    role: 'Co-Founder / Chief Executive Officer',
    description: 'An esports organization that focuses on balancing gaming and academics of all aspiring esports students athletes.',
    icon: Gamepad,
    members: '40+',
    established: '2023',
    highlights: ['League Operations', 'Pro Training', 'Mobile Legends: Bang bang!', 'Call of Duty: Mobile', 'DOTA 2', 'League of Legends', 'Wildrift', 'Tetris', 'Valorant', 'Honor of Kings']
  },
  {
    name: 'Society of Youth for the Next Technological Advancement and Excellence',
    role: 'Founder / Chief Executive Officer',
    description: 'Global network of tech professionals fostering collaboration and knowledge sharing.',
    icon: Users,
    members: '300+',
    established: '2020',
    highlights: ['IT Congress', 'Tech talks', 'Peer Talks', 'IT Community']
  }
];

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Organizations</h2>
          <p className="text-gray-400 text-xl">Building communities that shape the future</p>
        </motion.div>

        <div className="space-y-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(19, 108, 81, 0.3)'
              }}
              className="rounded-xl border-2 bg-gradient-to-br from-black to-gray-900 overflow-hidden relative"
              style={{ borderColor: '#136C51' }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0"
                style={{ background: '#136C51' }}
                whileHover={{ opacity: 0.1, scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="p-8 relative z-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(19, 108, 81, 0.2)', border: '2px solid #136C51' }}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                        backgroundColor: 'rgba(19, 108, 81, 0.3)'
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <org.icon className="w-10 h-10" style={{ color: '#136C51' }} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <motion.h3 
                          className="text-3xl mb-1 text-white"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {org.name}
                        </motion.h3>
                        <motion.p 
                          className="text-lg" 
                          style={{ color: '#136C51' }}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {org.role}
                        </motion.p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <motion.div 
                          className="text-center p-3 rounded-lg" 
                          style={{ backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(19, 108, 81, 0.2)',
                            y: -3
                          }}
                        >
                          <div className="text-xl mb-1" style={{ color: '#136C51' }}>{org.members}</div>
                          <div className="text-gray-400">Members</div>
                        </motion.div>
                        <motion.div 
                          className="text-center p-3 rounded-lg" 
                          style={{ backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(19, 108, 81, 0.2)',
                            y: -3
                          }}
                        >
                          <div className="text-xl mb-1" style={{ color: '#136C51' }}>{org.established}</div>
                          <div className="text-gray-400">Founded</div>
                        </motion.div>
                      </div>
                    </div>

                    <motion.p 
                      className="text-gray-400 text-lg mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {org.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-3">
                      {org.highlights.map((highlight, hIndex) => (
                        <motion.div 
                          key={highlight}
                          className="px-4 py-2 rounded-lg text-white text-sm"
                          style={{ backgroundColor: 'rgba(19, 108, 81, 0.3)', border: '1px solid #136C51' }}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + hIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(19, 108, 81, 0.5)',
                            x: 5
                          }}
                        >
                          ✓ {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
