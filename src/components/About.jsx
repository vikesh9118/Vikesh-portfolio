import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-image.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold text-center text-blue-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={aboutImg} alt="About Me" className="rounded-xl shadow-lg" />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">
              I specialize in crafting elegant solutions using modern web technologies. My passion for software development started early, and I’ve built a variety of applications that emphasize speed, performance, and a great user experience.
            </p>
            <p className="mb-6">
              From building scalable backends in Node.js to creating stunning UIs with React and Tailwind, I focus on delivering quality software that solves real problems.
            </p>
            <ul className="list-disc ml-6">
              <li>🌐 Frontend: React, Vue, Angular</li>
              <li>🧠 Backend: Node.js, Express, MongoDB</li>
              <li>🎨 Styling: Tailwind CSS, MUI, SCSS</li>
              <li>⚙️ Tools: Git, Webpack, Postman</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
