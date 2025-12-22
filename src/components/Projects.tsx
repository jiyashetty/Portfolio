import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'GestuMouse: Gesture-Controlled Virtual Mouse',
      description: 'A secure gesture-controlled mouse using computer vision for hands-free navigation.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', // Hand tracking/gesture control      
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      outcomes: ['90% accuracy in gesture recognition', '60% reduction in latency', 'Real-time hand tracking'],
      github: 'https://github.com/jiyashetty/GestuMouse-Virtual-Mouse',
    },
    {
      title: 'YouTube Trending Content Predictor',
      description: 'Interactive dashboard for analyzing and predicting trending YouTube content across regions.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      outcomes: ['Multi-region trend analysis', 'Category filtering', 'Interactive visualizations'],
      github: 'https://github.com/jiyashetty/Youtube-trends-analyzer',
    },
    {
      title: 'Weather Forecasting Using Machine Learning',
      description: 'ML-powered weather prediction system with interactive dashboard for weather insights.',
      image: 'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=800&q=80', // Weather forecast
      technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
      outcomes: ['Temperature prediction', 'Rainfall forecasting', 'Interactive visual feedback'],
      github: 'https://github.com/jiyashetty/Weather-forecasting',
    },
    {
      title: 'Agentic RAG Chatbot',
      description: 'Document QA system with multi-format support and semantic search capabilities.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
      technologies: ['Python', 'LLMs', 'FAISS', 'LangChain', 'Streamlit'],
      outcomes: ['Multi-format document support', 'Semantic search', 'Document summarization'],
      github: 'https://github.com/jiyashetty/Agentic-rag-document-qa',
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-32 px-6 bg-gradient-to-br from-blue-50/50 to-green-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-foreground/70 text-lg mb-16 max-w-2xl mx-auto"
          >
            A collection of AI/ML projects showcasing practical applications of intelligent systems
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative card-soft rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                style={{
                  transform: hoveredProject === index ? 'perspective(1000px) rotateX(2deg)' : 'none',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-accent/10 text-foreground border-accent/20 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="bg-accent/10 text-foreground border-accent/20 font-mono text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Outcomes - shown on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      height: hoveredProject === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-foreground/10 pt-4 mb-4">
                      <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-2">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                            <span className="text-accent mt-0.5">▸</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* GitHub link */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center gap-2 hover:bg-accent/10 hover:text-accent transition-colors"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
