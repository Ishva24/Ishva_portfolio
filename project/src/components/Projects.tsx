import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  technologies?: string[];
  features?: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'AI Chatbot',
      description: 'The multi-modal chatbot seamlessly integrates text, voice, images, offering users a dynamic and intuitive conversational experience.',
      image: 'https://images.unsplash.com/photo-1675557009875-436f73cc2d45?auto=format&fit=crop&w=600&q=80',
      longDescription: 'A sophisticated AI-powered chatbot that leverages natural language processing and machine learning to provide human-like interactions. The system supports multiple input modalities including text, voice, and images, making it highly versatile for various use cases.',
      technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'Speech Recognition'],
      features: ['Multi-modal input support', 'Real-time response generation', 'Context awareness', 'Sentiment analysis']
    },
    {
      title: 'Dashboard Using Tableau (Prime)',
      description: 'Employing Tableau, the Prime Video dashboard provides insightful analytics on viewer engagement, content performance, and user demographics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      longDescription: 'A comprehensive analytics dashboard built using Tableau that provides deep insights into Prime Video streaming patterns, user behavior, and content performance metrics. The dashboard helps in making data-driven decisions for content strategy and user experience improvements.',
      technologies: ['Tableau', 'SQL', 'Data Analysis', 'Data Visualization'],
      features: ['Real-time metrics tracking', 'User behavior analysis', 'Content performance analytics', 'Custom reporting']
    },
    {
      title: 'Weather Prediction',
      description: 'Utilizing machine learning algorithms to analyze historical weather data for accurate weather condition forecasting.',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=600&q=80',
      longDescription: 'An advanced weather prediction system that uses machine learning algorithms to analyze historical weather data and provide accurate forecasts. The system takes into account multiple meteorological parameters to generate reliable predictions.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy'],
      features: ['Temperature prediction', 'Precipitation forecasting', 'Wind pattern analysis', 'Historical data analysis']
    },
    {
      title: 'Face Recognition System',
      description: 'Employing deep learning techniques for accurate face recognition in images and videos, enhancing security solutions.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      longDescription: 'A state-of-the-art face recognition system built using deep learning techniques. The system can accurately detect and identify faces in both images and video streams, making it ideal for security and authentication applications.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
      features: ['Real-time face detection', 'Multiple face recognition', 'Expression analysis', 'Age and gender estimation']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-900 rounded-lg shadow-xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech) => (
                      <span key={tech} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {selectedProject.features?.map((feature) => (
                      <li key={feature} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}