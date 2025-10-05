import React from "react";
import '../styles/Experience.css';
// Mock icons (in real app, use Material-UI icons)
const SchoolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </svg>
);

const WorkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-2.5l-1.1-1.4c-.3-.4-.7-.6-1.2-.6h-6.4c-.5 0-.9.2-1.2.6L6.5 6H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function Experience() {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Engineering - Computer Science",
      subtitle: "Solapur University, Maharashtra, India",
      date: "Aug 2016 - Jun 2019",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, database systems, and software engineering principles.",
      icon: <SchoolIcon />,
      color: "#667eea"
    },
    {
      type: "work",
      title: "Software Engineer",
      subtitle: "Text Mercato Solutions Pvt. Ltd., Bengaluru",
      date: "Apr 2021 - Dec 2022",
      description: [
        "Built APIs for client data processing (Node.js, MongoDB, Express.js), ensuring 99% accurate ingestion",
        "Automated daily reporting via scheduled cron jobs, increasing operational efficiency and billing accuracy",
        "Developed end-to-end automated workflow system (Node.js, React.js, MongoDB)",
        "Implemented file processing endpoints, web scraping, and AWS-based delivery pipeline",
        "Reduced manual intervention by 50% and improved client turnaround time significantly"
      ],
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "AWS", "Cron Jobs"],
      icon: <WorkIcon />,
      color: "#10b981"
    },
    {
      type: "work",
      title: "Module Lead",
      subtitle: "Trigent Software Pvt. Ltd., Bengaluru",
      date: "Jan 2023 - Present",
      description: [
        "Modernized legacy IBC application (Informix to Node.js, Angular.js, Azure, PostgreSQL)",
        "Designed scalable DB schemas and built 70+ REST APIs with advanced search, pagination, and filtering",
        "Implemented Azure B2C authorization and integrated Azure Blob Storage for file management",
        "Automated shipment data validation and processing via cron jobs, reducing manual workload by 40%",
        "Built 30+ REST APIs with unit tests (Jest) and implemented RBAC using NestJS Guards",
        "Automated DynamoDB test data cleanup, improving QA efficiency by 25%"
      ],
      technologies: ["Node.js", "NestJS", "PostgreSQL", "DynamoDB", "Azure", "Jest", "RBAC"],
      icon: <StarIcon />,
      color: "#8b5cf6"
    },
    {
      type: "certification",
      title: "Scaler Academy - Software Development",
      subtitle: "Advanced System Design & Backend Development",
      date: "Ongoing - 2025",
      description: [
        "Advanced System Design (LLD & HLD)",
        "Backend Development with Java & Spring Boot",
        "Distributed System & Design Patterns",
        "Data Structures & Algorithms (DSA)",
        "Database Design & Optimization"
      ],
      technologies: ["Java", "Spring Boot", "System Design", "DSA", "Distributed Systems"],
      icon: <StarIcon />,
      color: "#f59e0b"
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">Professional Journey</h1>
        <p className="experience-subtitle">My career progression from student to technical leader</p>
      </div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <div 
                  className="timeline-icon"
                  style={{ backgroundColor: exp.color }}
                >
                  {exp.icon}
                </div>
                <div className="timeline-date">{exp.date}</div>
              </div>
              
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-company">{exp.subtitle}</h4>
              
              <div className="timeline-description">
                {typeof exp.description === 'string' ? (
                  <p>{exp.description}</p>
                ) : (
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              
              {exp.technologies && (
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
            
            {index < experiences.length - 1 && <div className="timeline-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// Import the CSS file for Experience component
export default Experience;