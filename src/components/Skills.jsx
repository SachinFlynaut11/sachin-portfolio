import { Code, Layout, Database, Zap, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Development",
      icon: <Code className="text-primary-gradient" size={24} style={{ stroke: "#6366f1" }} />,
      skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vue.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Frontend & Styling",
      icon: <Layout size={24} style={{ stroke: "#a855f7" }} />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux", "Responsive Design", "Cross-Browser Compatibility"]
    },
    {
      title: "Backend & APIs",
      icon: <Database size={24} style={{ stroke: "#06b6d4" }} />,
      skills: ["REST APIs", "CRUD Operations", "Authentication", "JWT Integration", "Database Schema Design"]
    },
    {
      title: "Performance & Optimization",
      icon: <Zap size={24} style={{ stroke: "#ec4899" }} />,
      skills: ["Code Splitting", "Lazy Loading", "Web Performance Optimization", "SEO Best Practices"]
    },
    {
      title: "Tools & Cloud Infrastructure",
      icon: <Terminal size={24} style={{ stroke: "#3b82f6" }} />,
      skills: ["Git & GitHub", "CI/CD Pipelines", "Postman API Client", "Amazon Web Services (S3, EC2, Lambda)"]
    }
  ];

  return (
    <section id="skills" className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-secondary col-md-6 mx-auto">
            A comprehensive overview of my expertise in web technologies, frameworks, backend services, and cloud tools.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {skillCategories.map((cat, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card-glass h-100">
                <div className="d-flex align-items-center mb-3">
                  <div className="p-2 rounded bg-opacity-10 bg-white me-3 d-flex align-items-center justify-content-center">
                    {cat.icon}
                  </div>
                  <h4 className="m-0 fs-5">{cat.title}</h4>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {cat.skills.map((skill, sIndex) => (
                    <span className="skill-tag" key={sIndex}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
