import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from './ui/badge';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      category: 'Programming',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C++'],
    },
    {
      category: 'AI/ML',
      color: 'bg-purple-50 text-purple-700 border-purple-200',
      skills: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face', 'scikit-learn', 'RAG Systems', 'Fine-tuning'],
    },
    {
      category: 'Web Development',
      color: 'bg-green-50 text-green-700 border-green-200',
      skills: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Express', 'Tailwind CSS', 'REST APIs'],
    },
    {
      category: 'Databases & Tools',
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      skills: ['PostgreSQL', 'MongoDB', 'Pinecone', 'Docker', 'Git', 'AWS', 'Supabase'],
    },
    {
      category: 'Soft Skills',
      color: 'bg-pink-50 text-pink-700 border-pink-200',
      skills: ['Problem Solving', 'Team Collaboration', 'Technical Writing', 'Agile Development', 'Communication'],
    },
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={categoryVariants}
            className="text-5xl md:text-6xl font-bold text-center mb-16"
          >
            Skills & Technologies
          </motion.h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                className="card-soft rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">{category.category}</h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      variants={skillVariants}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        className={`${category.color} border px-4 py-2 text-sm font-medium font-mono cursor-default transition-all duration-200 hover:shadow-md`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={categoryVariants}
            className="mt-12 text-center"
          >
            <p className="text-foreground/60 italic">
              Always learning and exploring new technologies in the AI space
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
