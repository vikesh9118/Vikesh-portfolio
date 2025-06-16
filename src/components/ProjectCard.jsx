import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title = "",
  description = "",
  techStack = [],
  image = "",
  github = "",
  live = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 p-5 rounded-2xl shadow-xl flex flex-col lg:flex-row gap-6 border border-zinc-700"
    >
      <img
        src={image}
        alt={title}
        className="w-full lg:w-1/2 h-auto rounded-xl object-cover border border-zinc-700"
      />

      <div className="flex flex-col justify-between w-full">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {techStack?.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-primary text-white font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
              title="GitHub Repo"
            >
              <Github size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
