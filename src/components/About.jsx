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
            className="w-full md:w-5/12 max-w-sm md:max-w-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="About Me"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-7/12 text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-6">
              I'm Vikesh Kumar, a passionate Full Stack Developer currently working at EduviTech India Pvt Ltd. I specialize in building modern, responsive, and user-focused web applications using cutting-edge technologies.
            </p>
            <p className="mb-6">
              I've developed complex applications including medical imaging platforms, dynamic email editors, and AI-powered second opinion systems. I enjoy bringing designs to life and ensuring seamless user experiences.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>🌐 Frontend: React, Next.js, Angular 19, Vue.js</li>
              <li>🧠 Backend: Node.js, Express, MongoDB, Firebase</li>
              <li>🎨 UI Libraries: Tailwind CSS, MUI, shadcn/ui, SCSS</li>
              <li>☁️ Cloud & Auth: AWS Amplify, Firebase Auth, Role-based access</li>
              <li>📊 Tools: Git, Postman, Chart.js, Framer Motion</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
