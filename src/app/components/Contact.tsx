import { motion } from 'motion/react';
import { Mail, Linkedin, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Let's Connect</h2>
          <p className="text-gray-400 text-xl">Reach out across the multiverse</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 p-8 bg-black"
          style={{ borderColor: '#136C51' }}
        >
          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <motion.a
              href="mailto:knavarro242@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(19, 108, 81, 0.2)',
                boxShadow: '0 5px 15px rgba(19, 108, 81, 0.3)'
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all relative overflow-hidden"
              style={{ borderColor: '#136C51', backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-6 h-6" style={{ color: '#136C51' }} />
              </motion.div>
              <span className="text-white">knavarro242@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/navarro-kim-dev/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(19, 108, 81, 0.2)',
                boxShadow: '0 5px 15px rgba(19, 108, 81, 0.3)'
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all"
              style={{ borderColor: '#136C51', backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Linkedin className="w-6 h-6" style={{ color: '#136C51' }} />
              </motion.div>
              <span className="text-white">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/KimNavarro05"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'rgba(19, 108, 81, 0.2)',
                boxShadow: '0 5px 15px rgba(19, 108, 81, 0.3)'
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all"
              style={{ borderColor: '#136C51', backgroundColor: 'rgba(19, 108, 81, 0.1)' }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Facebook className="w-6 h-6" style={{ color: '#136C51' }} />
              </motion.div>
              <span className="text-white">Facebook</span>
            </motion.a>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-black border-2 text-white focus:outline-none transition-colors"
                  style={{ borderColor: '#136C51' }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-black border-2 text-white focus:outline-none transition-colors"
                  style={{ borderColor: '#136C51' }}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black border-2 text-white focus:outline-none transition-colors"
                style={{ borderColor: '#136C51' }}
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-black border-2 text-white focus:outline-none transition-colors resize-none"
                style={{ borderColor: '#136C51' }}
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(19, 108, 81, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-lg text-white text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden"
              style={{ backgroundColor: '#136C51' }}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%', opacity: 0.3 }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex items-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
