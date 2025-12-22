import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Sparkles, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="about" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>

          <motion.div variants={itemVariants} className="card-soft rounded-3xl p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Building the Future with AI</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                  I'm a fourth-year undergraduate specializing in Artificial Intelligence and Data Science, 
                  driven by a passion for creating intelligent systems that solve real-world problems. My 
                  journey in AI began with curiosity about how machines learn, and has evolved into hands-on 
                  experience building production-ready LLM applications and automation tools.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Through my internship and personal projects, I've developed expertise in deploying AI 
                  solutions that balance cutting-edge technology with practical usability. I believe the 
                  best AI systems are those that empower users while remaining transparent and reliable.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="card-soft rounded-3xl p-8">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-foreground/80 mb-2">
                <span className="font-semibold">Bachelor's in AI & Data Science</span>
              </p>
              <p className="text-foreground/60 text-sm mb-4">Expected 2026</p>
              <p className="text-foreground/70">
                Focused on machine learning, deep learning, natural language processing, and 
                data engineering with hands-on projects in neural networks and AI systems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-soft rounded-3xl p-8">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Core Strengths</h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Building and deploying LLM-powered applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Automating workflows with intelligent agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Full-stack development with modern frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▸</span>
                  <span>Problem-solving with data-driven approaches</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
