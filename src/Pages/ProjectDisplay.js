import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from "../helpers/ProjectList.js";
import { Github } from 'lucide-react';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{project.name}</h1>

      <img
        src={project.image}
        alt={project.name}
        className="rounded-lg shadow-lg w-full"
      />

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-indigo-500 mb-2">
          Skills Used:
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.Skills.split(',').map((skill, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900"
        >
          <Github size={20} /> View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
