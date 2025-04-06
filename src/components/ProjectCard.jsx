import React from "react";
import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";

const techColors = {
  "React": "bg-blue-600",
  "Node.js": "bg-green-600",
  "MongoDB": "bg-green-700",
  "Tailwind CSS": "bg-cyan-600",
  "Framer Motion": "bg-pink-600",
  "Redux": "bg-purple-600",
  "DICOM": "bg-orange-500",
  "Chart.js": "bg-yellow-600",
  "JavaScript": "bg-yellow-500",
  "AWS Amplify": "bg-purple-700",
  "AI": "bg-red-600",
  "MUI": "bg-blue-800",
  "Unlayer": "bg-rose-600",
  "Nodemailer": "bg-emerald-600"
};

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  github,
  live,
  type,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 rounded-2xl overflow-hidden shadow-xl border border-zinc-700 min-h-[32rem] flex flex-col"
    >
      {type && (
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow-md">
          {type}
        </span>
      )}

      <div className="overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className={`${
                  techColors[tech] || "bg-zinc-700"
                } text-white px-3 py-1 text-xs rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
            aria-label="View GitHub Repository"
            title="Source Code"
          >
            <Github className="w-4 h-4" />
            Code
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
            aria-label="View Live Project"
            title="Live Demo"
          >
            <Link className="w-4 h-4" />
            Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
