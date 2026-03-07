import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Profile from './components/Profile';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Webinars from './components/Webinars';
import Organizations from './components/Organizations';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <Hero />
      <Profile />
      <TechStack />
      <Projects />
      <Webinars />
      <Organizations />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#136C51' }}>
        <p className="text-gray-400">
          © 2026 KimNavarro. Built across infinite realities.
        </p>
      </footer>
    </div>
  );
}
