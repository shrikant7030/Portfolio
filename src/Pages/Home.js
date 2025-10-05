import '../styles/Home.css';

// Modern icon components with improved styling
const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="stat-icon">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const WorkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="stat-icon">
    <path d="M20 6h-2.5l-1.1-1.4c-.3-.4-.7-.6-1.2-.6h-6.4c-.5 0-.9.2-1.2.6L6.5 6H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="scroll-indicator">
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

function Home() {
  const skills = [
    {
      category: "Programming Languages",
      technologies:
        "C, Java, JavaScript, TypeScript, MySQL, NoSQL",
    },
    {
      category: "Frameworks & Libraries",
      technologies:
        "Node.js, Express.js, NestJS, React.js, Angular.js",
    },
    {
      category: "Databases",
      technologies:
        "MySQL, PostgreSQL, MongoDB, DynamoDB",
    },
    {
      category: "Cloud & DevOps",
      technologies:
        "AWS (Lambda, S3, CloudWatch, DynamoDB, SQS, RDS, KMS), Azure (Functions, B2C, Blob Storage), FTP/SFTP",
    },
    {
      category: "Tools & Technologies",
      technologies:
        "Git, Postman, VS Code, RabbitMQ, REST APIs, Microservices",
    },
    {
      category: "Current Learning",
      technologies:
        "Advanced System Design (LLD & HLD), Java Spring Boot, Distributed Systems, Design Patterns",
    },
  ];

  const achievements = [
    "Modernized legacy IBC application (Informix to NodeJS, AngularJS, Azure, PostgreSQL)",
    "Designed scalable DB schemas and built 70+ REST APIs with advanced search and pagination",
    "Automated shipment data validation reducing manual workload by 40%",
    "Developed invoice auto-processing system improving billing accuracy",
    "Built 30+ REST APIs with unit tests and implemented RBAC using NestJS Guards",
    "Automated DynamoDB test data cleanup, improving QA efficiency by 25%",
    "Reduced manual intervention by 50% and improved client turnaround time significantly",
    "Won Sparkler Award (Q1 2024) for driving backend automation and API optimization",
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Shrikant Goski</span>
            </h1>
            <p className="hero-description">
              A passionate <strong>Backend & Cloud Engineer</strong> with{" "}
              <strong className="highlight">4+ years of experience</strong> in designing scalable microservices, 
              automating workflows, and building enterprise-grade applications. I specialize in Node.js, 
              PostgreSQL, AWS, Azure, and currently upskilling through Scaler Program in Software Development.
            </p>

            <div className="hero-stats">
              <div className="stat-card">
                <WorkIcon />
                <div className="stat-content">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="stat-card">
                <CodeIcon />
                <div className="stat-content">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">REST APIs Built</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a
                href="https://www.linkedin.com/in/shrikant-goski-68455016b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <a 
                href="mailto:goskishrikant111@gmail.com" 
                className="social-link"
                aria-label="Email Contact"
              >
                <EmailIcon />
              </a>
              <a
                href="tel:+919561252643"
                className="social-link"
                aria-label="Phone Contact"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ArrowDownIcon />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">{skill.category}</h3>
                <p className="skill-technologies">{skill.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Key Achievements</h2>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-bullet"></div>
                <p className="achievement-text">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">
                <StarIcon />
              </div>
              <h3 className="award-title">Sparkler Award</h3>
              <p className="award-company">Trigent Software (Q1 2024)</p>
              <p className="award-description">
                Recognized for driving backend automation and APIs optimization, 
                significantly improving client delivery and system performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Import the CSS file for Home component

export default Home;
