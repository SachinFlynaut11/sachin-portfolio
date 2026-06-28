import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

const DEFAULT_PROJECTS = [
  {
    _id: "wtb-buzz-1",
    title: "WTB – What The Buzz",
    description: "A business and event management platform with distinct Admin, Business, and User panels. Features role-based dashboards, business promotion features, advertisement tools, and JWT authentication.",
    technologies: ["React.js", "Node.js", "Redux", "JWT", "MongoDB", "REST APIs"],
    imageUrl: "", // We will generate an abstract gradient if empty
    liveUrl: "https://sachin-basode-portfolio.netlify.app/",
    githubUrl: "https://github.com/sachinkb2812"
  },
  {
    _id: "r2yn-delivery-2",
    title: "R2YN – Rushing To Your Need",
    description: "A multi-service online shopping and delivery platform. Features modules for Restaurant, Grocery, Pharmacy, and Recommended Services, alongside product listing, cart, order management, and responsive CSS grids.",
    technologies: ["React.js", "Tailwind CSS", "Redux", "REST APIs", "Responsive Design"],
    imageUrl: "",
    liveUrl: "https://sachin-basode-portfolio.netlify.app/",
    githubUrl: "https://github.com/sachinkb2812"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load projects from local storage. Seed default ones if none exist.
    const localProjectsStr = localStorage.getItem("local_projects");
    if (!localProjectsStr) {
      localStorage.setItem("local_projects", JSON.stringify(DEFAULT_PROJECTS));
      setProjects(DEFAULT_PROJECTS);
    } else {
      try {
        const parsed = JSON.parse(localProjectsStr);
        setProjects(parsed);
      } catch (e) {
        setProjects(DEFAULT_PROJECTS);
      }
    }
  }, []);

  // Return a beautiful dynamic gradient representation if no image is uploaded
  const getGradientForProject = (title) => {
    const gradients = [
      "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
      "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      "linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)"
    ];
    // Hash title string to select a gradient deterministically
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % gradients.length;
    return gradients[idx];
  };

  return (
    <section className="py-5 my-5" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary col-md-6 mx-auto">
            A showcase of my applications, demonstrating clean code structure, role-based dashboards, and interactive user interfaces.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-5 card-glass">
            <p className="text-muted">No projects found. Add some in the Admin Panel!</p>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project) => (
              <div className="col" key={project._id || project.id}>
                <div className="card-glass h-100 overflow-hidden d-flex flex-column p-0">
                  
                  {/* Project Image Header */}
                  <div className="position-relative" style={{ height: "190px", width: "100%" }}>
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        className="w-100 h-100"
                        alt={project.title}
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          // Fallback on image error
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    <div 
                      className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white" 
                      style={{ 
                        background: getGradientForProject(project.title),
                        display: project.imageUrl ? 'none' : 'flex'
                      }}
                    >
                      <Code2 size={40} className="mb-2 text-white-50" />
                      <span className="fw-bold font-monospace text-uppercase tracking-wider" style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                        {project.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h3 className="fs-5 fw-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-secondary" style={{ fontSize: "0.9rem", lineHeight: "1.5", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-3">
                      {/* Tech Badges */}
                      <div className="d-flex flex-wrap gap-1.5 mb-3">
                        {project.technologies?.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="badge border fw-normal" 
                            style={{ 
                              background: "rgba(255,255,255,0.03)", 
                              borderColor: "var(--border-glass)", 
                              color: "var(--accent-cyan)",
                              fontSize: "0.75rem",
                              padding: "0.35rem 0.6rem",
                              borderRadius: "6px"
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;