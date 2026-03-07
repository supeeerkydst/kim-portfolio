import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// Floating particles with tech feel
const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ backgroundColor: '#136C51' }}
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 20,
        opacity: 0 
      }}
      animate={{
        y: -20,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

// Hexagonal grid pattern
const HexagonalPattern = () => {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
          <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" 
                fill="none" 
                stroke="#136C51" 
                strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );
};

// Animated circuit lines
const CircuitLine = ({ delay, duration }: { delay: number; duration: number }) => {
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const endX = Math.random() * 100;
  const endY = Math.random() * 100;
  
  return (
    <motion.svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ 
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    >
      <motion.line
        x1={`${startX}%`}
        y1={`${startY}%`}
        x2={`${endX}%`}
        y2={`${endY}%`}
        stroke="#136C51"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "linear"
        }}
      />
    </motion.svg>
  );
};

// Digital grid
const DigitalGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(19, 108, 81, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19, 108, 81, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Technology-Inspired Background */}
      <div className="absolute inset-0 bg-black">
        {/* Radial gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(19, 108, 81, 0.15) 0%, transparent 70%)'
          }}
        />
        
        {/* Digital Grid */}
        <DigitalGrid />
        
        {/* Hexagonal Pattern */}
        <HexagonalPattern />
        
        {/* Animated Circuit Lines */}
        {[...Array(8)].map((_, i) => (
          <CircuitLine key={`circuit-${i}`} delay={i * 2} duration={8 + i} />
        ))}
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
        
        {/* Animated Tech Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: '#136C51' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: '#136C51' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Scanning line effect */}
        <motion.div
          className="absolute inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #136C51, transparent)' }}
          animate={{
            top: ['0%', '100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Corner accent lines */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2"
          style={{ borderColor: '#136C51' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2"
          style={{ borderColor: '#136C51' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2"
          style={{ borderColor: '#136C51' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2"
          style={{ borderColor: '#136C51' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl mb-6 text-white"
            style={{ 
              textShadow: '0 0 30px rgba(19, 108, 81, 0.5), 0 0 60px rgba(19, 108, 81, 0.3)'
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(19, 108, 81, 0.5), 0 0 60px rgba(19, 108, 81, 0.3)',
                '0 0 40px rgba(19, 108, 81, 0.7), 0 0 80px rgba(19, 108, 81, 0.5)',
                '0 0 30px rgba(19, 108, 81, 0.5), 0 0 60px rgba(19, 108, 81, 0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Kim Navarro
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-4 text-white"
            style={{ 
              textShadow: '0 0 20px rgba(19, 108, 81, 0.6)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Software Developer
          </motion.p>
          
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I transform your manual bottlenecks into streamlined digital systems. Explore my work to see how I replace 'paperwork' with 'process' to help you scale faster.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full text-white transition-all relative overflow-hidden"
              style={{ backgroundColor: '#136C51' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(19, 108, 81, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%', opacity: 0.2 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Hire Me</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full border-2 text-white transition-all relative"
              style={{ borderColor: '#136C51' }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(19, 108, 81, 0.1)',
                boxShadow: '0 0 20px rgba(19, 108, 81, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" style={{ color: '#136C51' }} />
      </motion.div>
    </section>
  );
}
