import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// --- Background Helper Components ---

const Particle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ backgroundColor: '#136C51' }}
      initial={{ x: Math.random() * 1200, y: 1000, opacity: 0 }}
      animate={{ y: -20, opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 20 + Math.random() * 4,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    />
  );
};

const HexagonalPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
        <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="#136C51" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
);

const CircuitLine = ({ delay, duration }: { delay: number; duration: number }) => {
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const endX = Math.random() * 100;
  const endY = Math.random() * 100;
  
  return (
    <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.3, 0] }} transition={{ duration, repeat: Infinity, delay, ease: "linear" }}>
      <motion.line x1={`${startX}%`} y1={`${startY}%`} x2={`${endX}%`} y2={`${endY}%`} stroke="#136C51" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration, repeat: Infinity, delay, ease: "linear" }} />
    </motion.svg>
  );
};

const DigitalGrid = () => (
  <div className="absolute inset-0 opacity-20">
    <div className="w-full h-full" style={{ backgroundImage: `linear-gradient(rgba(19, 108, 81, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 108, 81, 0.3) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
  </div>
);

// --- Typing Animation Component ---

const TypewriterText = ({ text, delay = 0, className, style }: { text: string; delay?: number; className?: string; style?: React.CSSProperties }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: { opacity: 1, display: 'inline' },
    hidden: { opacity: 0, display: 'none' },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={className} style={style}>
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>{letter}</motion.span>
      ))}
    </motion.div>
  );
};

// --- Main Hero Component ---

export default function Hero() {
  const nameDelay = 0.5;
  const titleDelay = 1.2; 
  const descDelay = 2.2;  
  const buttonDelay = 4.5;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background elements */}
      <DigitalGrid />
      <HexagonalPattern />
      {[...Array(8)].map((_, i) => <CircuitLine key={`circuit-${i}`} delay={i * 2} duration={8 + i} />)}
      {[...Array(20)].map((_, i) => <Particle key={i} delay={i * 0.5} />)}
      
      {/* Scanning line */}
      <motion.div className="absolute inset-x-0 h-px z-0" style={{ background: 'linear-gradient(90deg, transparent, #136C51, transparent)' }} animate={{ top: ['0%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-6xl md:text-8xl mb-4 text-white font-bold tracking-tight">
          <TypewriterText 
            text="KIM NAVARRO" 
            delay={nameDelay}
            style={{ textShadow: '0 0 30px rgba(19, 108, 81, 0.5)' }} 
          />
        </h1>
        
        {/* Title */}
        <div className="text-xl md:text-2xl mb-6 text-[#136C51] font-mono tracking-[0.2em] uppercase">
          <TypewriterText text="Software Developer" delay={titleDelay} />
        </div>
        
        {/* Description */}
        <div className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto min-h-[80px]">
          <TypewriterText 
            text="I transform your manual bottlenecks into streamlined digital systems. Explore my work to see how I replace 'paperwork' with 'process' to help you scale faster." 
            delay={descDelay}
          />
        </div>

        {/* Buttons - Fade in after typing is done */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: buttonDelay, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full text-white relative overflow-hidden"
            style={{ backgroundColor: '#136C51' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(19, 108, 81, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-full border-2 text-white"
            style={{ borderColor: '#136C51' }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: buttonDelay + 0.5, duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" style={{ color: '#136C51' }} />
      </motion.div>
    </section>
  );
}
