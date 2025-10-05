import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectItem({ image, name, id, skills }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="project-item"
      onClick={() => navigate("/Project/" + id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate("/Project/" + id);
        }
      }}
      aria-label={`View details for ${name} project`}
    >
      <div
        className="project-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="project-content">
        <h2 className="project-title">{name}</h2>
        <p className="project-skills">{skills}</p>
        <div className="project-cta">View details</div>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
