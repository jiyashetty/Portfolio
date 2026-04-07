import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Performance & Analytics Intern',
      company: 'Hitachi Energy',
      period: 'January 2026 to Present',
      description: 'Developing statistical analytics models and interactive dashboards for KPI performance tracking and data-driven decision making.',
      achievements: [
        'Developed statistical analytics models using rolling mean, z-score, and standard deviation for KPI performance tracking and anomaly detection',
        'Built interactive dashboards using Power BI, Excel and Dataverse to monitor performance metrics and support data-driven decision-making',
        'Automated data processing workflows, reducing manual effort and improving reporting efficiency',
        'Analyzed large-scale enterprise datasets to identify trends, patterns, and performance gaps',
      ],
      technologies: ['Power BI', 'Excel', 'Dataverse', 'Statistics', 'Data Analytics', 'KPI Tracking'],
    },
    {
      role: 'AI/ML Intern',
      company: 'L&D Nexus',
      period: 'October 2025 to December 2025',
      description: 'Integrated LLMs and APIs to generate validated, structured outputs for enterprise use cases with focus on modular and scalable system design.',
      achievements: [
        'Integrated LLMs and APIs to generate validated, structured outputs for enterprise use cases',
        'Focused on modular and scalable system design, enabling reuse across multiple business workflows',
        'Reduced manual research effort by automating data extraction and analysis processes',
        'Collaborated in a team environment to build production-ready AI solutions aligned with real-world business needs',
      ],
      technologies: ['Python', 'LLMs', 'API Integration', 'Automation', 'Enterprise Solutions', 'Data Extraction'],
    },
    {
      role: 'AI Engineer Intern',
      company: 'YCX London',
      period: 'June 2025 to September 2025',
      description: 'Designed and implemented multi-agent AI systems to automate company research and data extraction workflows.',
      achievements: [
        'Designed and implemented multi-agent AI systems to automate company research and data extraction workflows',
        'Built scalable pipelines using LangChain, Pydantic, and OpenAI-compatible APIs for structured JSON output generation',
        'Automated data validation and web scraping processes, improving research accuracy and efficiency',
        'Integrated LLMs with business intelligence tools to support lead generation and market analysis',
      ],
      technologies: ['LangChain', 'Pydantic', 'OpenAI API', 'Multi-Agent Systems', 'Web Scraping', 'Business Intelligence'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-br from-purple-50/50 to-blue-50/50 relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

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
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-accent/20 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-accent ring-4 ring-white hidden md:block transform -translate-x-[7px]"></div>

                <div className="md:ml-20 card-soft rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-lg font-semibold text-accent mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/60 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-accent mt-1 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-accent/10 text-foreground border-accent/20 font-mono text-xs px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
