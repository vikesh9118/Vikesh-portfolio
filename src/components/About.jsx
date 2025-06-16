import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-zinc-900 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm <span className="text-primary font-semibold">Vikesh Kumar</span>, a React-focused Software Developer with a passion for building modern, interactive, and scalable web applications. Currently working at EduviTech India Pvt Ltd.
          </p>
          <p className="text-gray-400 text-base">
            I specialize in technologies like{" "}
            <span className="text-white font-medium">
              React, Tailwind CSS, Next.js, Bootstrap, and ShadCN UI
            </span>
            . With experience across healthcare, email marketing, and dashboards, I strive to craft responsive and user-centric solutions.
          </p>
        </motion.div>

        {/* Side Visual / Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-full flex justify-center"
        >
          <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] bg-primary rounded-full blur-[120px] opacity-20 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 md:p-10 rounded-2xl shadow-lg border border-zinc-600">
            <p className="text-xl text-white font-semibold">
              Clean Code. Smooth UI. Real-world Impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
