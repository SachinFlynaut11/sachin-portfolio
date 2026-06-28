import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Edit3, Folder, Plus } from "lucide-react";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setLoading(true);
    const existing = localStorage.getItem("local_projects");
    if (existing) {
      try {
        setProjects(JSON.parse(existing));
      } catch (e) {
        setProjects([]);
      }
    } else {
      setProjects([]);
    }
    setLoading(false);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    const existing = localStorage.getItem("local_projects");
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        const filtered = parsed.filter((project) => (project._id || project.id) !== id);
        localStorage.setItem("local_projects", JSON.stringify(filtered));
        setProjects(filtered);
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const handleEdit = (id) => {
    // Aligns with App.jsx: /admin/dashboard/projects/edit/:id
    navigate(`/admin/dashboard/projects/edit/${id}`);
  };

  return (
    <div className="w-100 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Projects</h2>
        <button 
          onClick={() => navigate("/admin/dashboard/projects/add")} 
          className="btn-premium d-flex align-items-center gap-1.5 px-3 py-2"
          style={{ borderRadius: "10px", fontSize: "0.9rem" }}
        >
          <Plus size={16} /> Add New
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : projects.length === 0 ? (
        <div className="card-glass text-center py-5">
          <Folder size={48} className="text-muted mb-3" />
          <p className="text-muted">No projects found. Add one to display it on the portfolio homepage.</p>
        </div>
      ) : (
        <div className="row g-4">
          {projects.map((project) => {
            const id = project._id || project.id;
            return (
              <div className="col-md-6 col-lg-4" key={id}>
                <div className="card-glass h-100 p-0 overflow-hidden d-flex flex-column">
                  
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      className="w-100"
                      alt={project.title}
                      style={{ height: '160px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-100 d-flex align-items-center justify-content-center bg-dark text-muted" style={{ height: "160px" }}>
                      <Folder size={32} />
                    </div>
                  )}

                  <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h5 className="card-title text-white mb-2">{project.title}</h5>
                      <p className="text-secondary" style={{ fontSize: "0.85rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {project.description}
                      </p>
                      <p className="mb-3" style={{ fontSize: "0.8rem" }}>
                        <strong className="text-white">Tech:</strong> {project.technologies?.join(", ")}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center border-top border-secondary border-opacity-10 pt-3">
                      <div className="d-flex gap-2">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-decoration-none text-success" style={{ fontSize: "0.8rem" }}>
                            Live Link
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-decoration-none text-light" style={{ fontSize: "0.8rem" }}>
                            GitHub
                          </a>
                        )}
                      </div>
                      
                      <div className="d-flex gap-1">
                        <button className="btn btn-sm btn-outline-warning p-1.5" onClick={() => handleEdit(id)} title="Edit">
                          <Edit3 size={15} />
                        </button>
                        <button className="btn btn-sm btn-outline-danger p-1.5" onClick={() => handleDelete(id)} title="Delete">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
