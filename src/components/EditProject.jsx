import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    githubUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = () => {
    setLoading(true);
    const existing = localStorage.getItem("local_projects");
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        const project = parsed.find(p => (p._id || p.id) === id);
        if (project) {
          setFormData({
            title: project.title || "",
            description: project.description || "",
            technologies: project.technologies?.join(", ") || "",
            imageUrl: project.imageUrl || "",
            liveUrl: project.liveUrl || "",
            githubUrl: project.githubUrl || ""
          });
        } else {
          setStatus("Project not found in local storage.");
        }
      } catch (e) {
        console.error(e);
        setStatus("Failed to parse projects list.");
      }
    } else {
      setStatus("No projects list found.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const existing = localStorage.getItem("local_projects");
    if (existing) {
      try {
        const parsed = JSON.parse(existing);
        const updatedList = parsed.map(project => {
          if ((project._id || project.id) === id) {
            return {
              ...project,
              title: formData.title,
              description: formData.description,
              technologies: formData.technologies.split(",").map(t => t.trim()).filter(Boolean),
              imageUrl: formData.imageUrl,
              liveUrl: formData.liveUrl,
              githubUrl: formData.githubUrl
            };
          }
          return project;
        });

        localStorage.setItem("local_projects", JSON.stringify(updatedList));
        setStatus("Project updated successfully!");
        setTimeout(() => navigate("/admin/dashboard/projects"), 1200);
      } catch (err) {
        console.error("Error updating project:", err);
        setStatus("Failed to update project.");
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4 text-start">
      <div className="d-flex align-items-center gap-3 mb-4">
        <button 
          onClick={() => navigate("/admin/dashboard/projects")} 
          className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1.5"
          style={{ borderRadius: "8px" }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <h2 className="m-0">Edit Project</h2>
      </div>

      <div className="card-glass p-4">
        {status && (
          <div className="alert alert-info border-info text-info bg-info bg-opacity-10 mb-4" role="alert">
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="form-group text-start">
            <label className="form-label text-white">Project Title</label>
            <input
              type="text"
              className="form-control form-glass"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group text-start">
            <label className="form-label text-white">Description</label>
            <textarea
              className="form-control form-glass"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
          </div>

          <div className="form-group text-start">
            <label className="form-label text-white">Technologies (comma separated)</label>
            <input
              type="text"
              className="form-control form-glass"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group text-start">
            <label className="form-label text-white">Image URL</label>
            <input
              type="text"
              className="form-control form-glass"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group text-start">
            <label className="form-label text-white">Live URL</label>
            <input
              type="text"
              className="form-control form-glass"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group text-start">
            <label className="form-label text-white">GitHub URL</label>
            <input
              type="text"
              className="form-control form-glass"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-premium py-3 d-flex align-items-center justify-content-center gap-2 mt-3" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Saving Changes...
              </>
            ) : (
              <>
                <Save size={18} /> Update Project
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
