import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FolderPlus, ArrowLeft } from "lucide-react";

const AddProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    githubUrl: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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

    try {
      const newProject = {
        _id: 'proj-' + Date.now(),
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies.split(",").map(tech => tech.trim()).filter(Boolean),
        imageUrl: formData.imageUrl,
        liveUrl: formData.liveUrl,
        githubUrl: formData.githubUrl,
        createdAt: new Date().toISOString()
      };

      const existing = localStorage.getItem("local_projects");
      const projectsList = existing ? JSON.parse(existing) : [];
      projectsList.push(newProject);
      localStorage.setItem("local_projects", JSON.stringify(projectsList));

      setStatus("Project added successfully!");
      setFormData({
        title: "",
        description: "",
        technologies: "",
        imageUrl: "",
        liveUrl: "",
        githubUrl: ""
      });
      
      setTimeout(() => navigate("/admin/dashboard/projects"), 1200);
    } catch (error) {
      console.error(error);
      setStatus("Failed to add project.");
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="m-0">Add New Project</h2>
      </div>

      <div className="card-glass p-4">
        {status && (
          <div className="alert alert-success border-success text-success bg-success bg-opacity-10 mb-4" role="alert">
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
              placeholder="e.g. React, Node.js, Redux, Express.js"
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
              placeholder="https://example.com/project-image.jpg"
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
              placeholder="https://my-demo.com"
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
              placeholder="https://github.com/my-profile/project"
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn-premium py-3 d-flex align-items-center justify-content-center gap-2 mt-3" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Adding Project...
              </>
            ) : (
              <>
                <FolderPlus size={18} /> Add Project
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
