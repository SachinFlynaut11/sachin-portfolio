import { useState, useEffect } from "react";
import { Code2 } from "lucide-react";

const DEFAULT_PROJECTS = [
  {
    _id: "wtb-buzz-1",
    title: "WTB – What The Buzz",
    description: "A business and event management platform with distinct Admin, Business, and User panels. Features role-based dashboards, business promotion features, advertisement tools, and JWT authentication.",
    technologies: ["React.js", "Node.js", "Redux", "JWT", "MongoDB", "REST APIs"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/sachin-portfolio"
  },
  {
    _id: "r2yn-delivery-2",
    title: "R2YN – Rushing To Your Need",
    description: "A multi-service online shopping and delivery platform. Features modules for Restaurant, Grocery, Pharmacy, and Recommended Services, alongside product listing, cart, order management, and responsive CSS grids.",
    technologies: ["React.js", "Tailwind CSS", "Redux", "REST APIs", "Responsive Design"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/sachin-portfolio"
  },
  {
    _id: "producthub-mern-3",
    title: "ProductHub – MERN Store Manager",
    description: "A full-stack product management application built with the MERN stack. Supports adding, editing, deleting, and listing products with a RESTful API backend and a responsive React frontend.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/product-mern-project"
  },
  {
    _id: "pettrack-registry-4",
    title: "PetTrack – Animal Registry System",
    description: "A web-based registry system for managing pet records. Allows owners to register dogs, update health records, and search entries. Demonstrates CRUD operations with a clean UI.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "Express.js", "HTML", "CSS"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/dog_registry"
  },
  {
    _id: "taskflow-todo-5",
    title: "TaskFlow – Next.js Todo App",
    description: "A fast and minimal task management app built with Next.js. Supports creating, completing, and deleting tasks with persistent state and a sleek, responsive interface.",
    technologies: ["Next.js", "React.js", "CSS Modules", "JavaScript"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/next-todo"
  },
  {
    _id: "edumanager-crud-6",
    title: "EduManager – Student Records System",
    description: "A full-stack application for managing student data with complete Create, Read, Update, and Delete operations. Demonstrates clean API design with a well-structured backend and interactive frontend.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/student-CRUD-operations"
  },
  {
    _id: "fullstack-api-challenge-7",
    title: "FullStack API Challenge",
    description: "A technical full-stack assessment project showcasing REST API design, authentication middleware, and frontend integration. Demonstrates ability to implement real-world features under time constraints.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/nadsoft-test"
  },
  {
    _id: "stocksense-inventory-8",
    title: "StockSense – Inventory Dashboard",
    description: "A product inventory management system with real-time stock tracking, add/edit/delete operations, and category filtering. Built for business workflows with a clean dashboard UI.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    imageUrl: "",
    githubUrl: "https://github.com/SachinFlynaut11/product-inventory-system"
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Version stamp — bump this whenever DEFAULT_PROJECTS changes to force a reseed
    const PROJECT_VERSION = "v3";
    const storedVersion = localStorage.getItem("local_projects_version");

    if (storedVersion !== PROJECT_VERSION) {
      // Reseed with the latest default projects
      localStorage.setItem("local_projects", JSON.stringify(DEFAULT_PROJECTS));
      localStorage.setItem("local_projects_version", PROJECT_VERSION);
      setProjects(DEFAULT_PROJECTS);
    } else {
      // Load from local storage (may include admin-added projects)
      try {
        const localProjectsStr = localStorage.getItem("local_projects");
        const parsed = localProjectsStr ? JSON.parse(localProjectsStr) : DEFAULT_PROJECTS;
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