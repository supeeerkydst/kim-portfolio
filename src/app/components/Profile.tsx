import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const increment = end / (duration * 60);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, hasAnimated]);

  return <span>{count}+</span>;
};

export default function Profile() {
  return (
    <section id="profile" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
              style={{ backgroundColor: '#136C51' }}
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="https://raw.githubusercontent.com/supeeerkydst/kim-portfolio/refs/heads/main/public/kim.jpg"
              alt="Profile"
              className="relative rounded-2xl w-full h-[500px] object-cover border-2"
              style={{ borderColor: '#136C51' }}
              whileHover={{ rotate: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <User className="w-8 h-8" style={{ color: '#136C51' }} />
                </motion.div>
                <h2 className="text-4xl text-white">About Me</h2>
              </div>
              
              <motion.p 
                className="text-gray-300 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm a passionate developer and tech innovator with a deep love for creating 
                impactful digital solutions. My journey through the tech multiverse has led me 
                to master various technologies and frameworks, building projects that make a difference.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                With expertise spanning full-stack development, I've established organizations, 
                conducted webinars, and contributed to the developer community. I believe in the 
                power of technology to transform ideas into reality.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { value: 10, label: 'Projects' },
                  { value: 5, label: 'Webinars' },
                  { value: 3, label: 'Organizations' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 rounded-lg border relative overflow-hidden"
                    style={{ borderColor: '#136C51' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: '#136C51',
                      boxShadow: '0 0 15px rgba(19, 108, 81, 0.3)'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-transparent to-[#136C51] opacity-0"
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="text-3xl mb-2 relative z-10" style={{ color: '#136C51' }}>
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <div className="text-gray-400 relative z-10">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
