import { motion } from 'motion/react';
import { Calendar, Users, Video } from 'lucide-react';

const webinars = [
  {
    title: 'Hour of AI + Prompting 101',
    date: 'February 2026',
    attendees: '4000+',
    description: 'A webinar conducted by Carl Balita Review Center and SmartCT AI Ready ASEAN to talk about the uses of AI and how to prompt properly.',
    topics: ['Artificial Intelligence', 'Prompt Engineering']
  },
  {
    title: 'Hour of Code',
    date: 'October 2025',
    attendees: '4000+',
    description: 'A webinar conducted by Carl Balita Review Center and SmartCT AI Ready ASEAN to broaden the knowledge of youth, parents, teachers, and other communities about the uses of AI.',
    topics: ['Artificial Intelligence', 'Coding']
  },
  {
    title: 'SYNTAX Endgame — The Second IT Congress: Gaming Towards Excellence',
    date: 'April 2024',
    attendees: '400+',
    description: 'Six of the biggest IT communities in the Philippines gathered to talk about the gaming industry in IT and leadership.',
    topics: ['Web3', 'IT Leadership', 'Filipino Web Development Peers', 'DEVCON PH', 'Java Users Group PH', 
      'StuDev PH', 'Angular PH', 'The SYNTAX Org']
  },
  {
    title: 'Beyond Binaries: A SYNTAXium on OS Threads and Web Trends',
    date: 'January 2024',
    attendees: '200+',
    description: 'A part of school activity is to conduct a college fair that will allow students to learn beyond the regular class setup. The event focused on the current trends on web, specifically on Web3 evironment.',
    topics: ['Operating Systems', 'Web3 Gaming']
  },
  {
    title: 'The SYNTAX Org — The First IT Congress: A Quantum Leap Towards Excellence',
    date: 'April 2023',
    attendees: '250+',
    description: 'An IT congress attended by students from different schools. Talks focused on testing frameworks and software engineering.',
    topics: ['Testing Frameworks', 'System Design', 'Software Engineering', 'Java Programming']
  },
];

export default function Webinars() {
  return (
    <section id="webinars" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Webinars & Talks</h2>
          <p className="text-gray-400 text-xl">Sharing knowledge across the multiverse</p>
        </motion.div>

        <div className="space-y-6">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(19, 108, 81, 0.2)',
                borderColor: '#136C51'
              }}
              className="p-6 rounded-xl border-2 bg-black group relative overflow-hidden"
              style={{ borderColor: '#136C51' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#136C51] to-transparent opacity-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%', opacity: 0.1 }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                {/* Left side - Icon */}
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(19, 108, 81, 0.2)', border: '2px solid #136C51' }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      backgroundColor: 'rgba(19, 108, 81, 0.3)'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Video className="w-8 h-8" style={{ color: '#136C51' }} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <motion.h3 
                    className="text-2xl mb-2 text-white"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {webinar.title}
                  </motion.h3>
                  <p className="text-gray-400 mb-4">{webinar.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {webinar.topics.map((topic, topicIndex) => (
                      <motion.span 
                        key={topic}
                        className="text-sm px-3 py-1 rounded-full text-white cursor-default"
                        style={{ backgroundColor: 'rgba(19, 108, 81, 0.3)' }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(19, 108, 81, 0.5)',
                          y: -2
                        }}
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-6 text-sm text-gray-400">
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Calendar className="w-4 h-4" style={{ color: '#136C51' }} />
                      </motion.div>
                      <span>{webinar.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <Users className="w-4 h-4" style={{ color: '#136C51' }} />
                      <span>{webinar.attendees} Attendees</span>
                    </motion.div>
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
