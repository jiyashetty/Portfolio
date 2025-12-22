import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Instagram, Home, User, Briefcase, Wrench, Folder } from 'lucide-react';
import { useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden p-4">
      {/* Navigation Menu - Left Side */}
     <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
  <motion.div 
    className="flex flex-col space-y-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 }}
  >
    {[
      { name: 'Home', icon: <Home className="h-5 w-5" /> },
      { name: 'About', icon: <User className="h-5 w-5" /> },
      { name: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
      { name: 'Skills', icon: <Wrench className="h-5 w-5" /> },
      { name: 'Projects', icon: <Folder className="h-5 w-5" /> },
    ].map((item) => (
      <motion.a 
        key={item.name}
        href={`#${item.name.toLowerCase()}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:text-slate-900 hover:bg-white"        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={item.name}
      >
        {item.icon}
        <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {item.name}
        </span>
      </motion.a>
    ))}
  </motion.div>
</nav>
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
<div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Right Side Social Media Links */}
          <motion.div 
            className="hidden md:flex flex-col space-y-6 fixed right-8 top-1/2 transform -translate-y-1/2 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
  { 
    icon: <Linkedin className="h-5 w-5" />, 
    url: "https://www.linkedin.com/in/jiya-shetty-1441222b6",
    tooltip: "LinkedIn"
  },
  { 
    icon: <Github className="h-5 w-5" />, 
    url: "https://github.com/jiyashetty",
    tooltip: "GitHub"
  }
].map((social, index) => (
  <motion.a 
    key={index}
    href={social.url} 
    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:text-slate-900 hover:bg-white transition-all duration-300"
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {social.icon}
  </motion.a>
))}
          </motion.div>
          {/* Left Side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div variants={item} className="mb-8">
              <motion.span 
               className="inline-block text-sm font-medium text-slate-700 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 mb-6"
                variants={item}
              >
                Jiya Shetty
              </motion.h1>
              <motion.p 
                className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
                variants={item}
              >
                AI & Data Science Student | Full Stack Developer | Tech Enthusiast
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a 
  onClick={(e) => {
    e.preventDefault();
    setShowContactModal(true);
  }}
  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
>
  Get In Touch
</motion.a>
                
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Profile Card */}
          <motion.div 
            className="relative"
            variants={item}
          >
            <motion.div 
              className="relative"
              animate={floatingAnimation}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl">
                  <img
                    src="/profile.png"
                    alt="Jiya Shetty"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Email at the bottom */}
                <motion.div 
                  className="mt-8 flex items-center justify-center text-slate-600 bg-white/80 backdrop-blur-sm py-3 px-6 rounded-full shadow-sm mx-auto max-w-max"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Mail className="h-5 w-5 mr-2 text-indigo-500" />
                  <a href="mailto:your.email@example.com" className="hover:underline">jiyashetty29@gmail.com</a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Social Media Links - Horizontal for mobile */}
          <motion.div 
            className="flex md:hidden space-x-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/jiya-shetty-1441222b6"},
              { icon: <Github className="h-5 w-5" />, url: "https://github.com/jiyashetty" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-slate-700 hover:text-slate-900 hover:bg-white transition-all duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="text-sm text-slate-500 mb-2 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.div>
        <div className="w-8 h-12 border-2 border-slate-200 rounded-full flex justify-center p-1 bg-white/50 backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop" as const,
            }}
           className="w-1 h-3 bg-gradient-to-b from-slate-600 to-slate-800 rounded-full"
          />
        </div>
      </motion.div>
      {showContactModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <motion.div 
      className="bg-white rounded-2xl p-8 max-w-md w-full relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <button 
        onClick={() => setShowContactModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-indigo-500" />
          <a href="mailto:jiyashetty29@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
            jiyashetty29@gmail.com
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Linkedin className="h-5 w-5 text-indigo-500" />
          <a 
            href="https://www.linkedin.com/in/jiya-shetty-1441222b6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            linkedin.com/in/jiya-shetty
          </a>
        </div>
        
        <div className="flex items-center space-x-3">
          <Github className="h-5 w-5 text-indigo-500" />
          <a 
            href="https://github.com/jiyashetty" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            github.com/jiyashetty
          </a>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </section>
  );
};

export default Hero;