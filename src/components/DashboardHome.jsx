import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Folder, FolderPlus, ExternalLink } from "lucide-react";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    projectsCount: 0,
    messagesCount: 0
  });

  useEffect(() => {
    // Read messages count
    const messages = localStorage.getItem("local_messages");
    const parsedMessages = messages ? JSON.parse(messages) : [];
    
    // Read projects count
    const projects = localStorage.getItem("local_projects");
    const parsedProjects = projects ? JSON.parse(projects) : [];

    setStats({
      projectsCount: parsedProjects.length,
      messagesCount: parsedMessages.length
    });
  }, []);

  return (
    <div className="container py-4 text-start">
      <div className="mb-4">
        <h2 className="display-6 fw-bold text-white mb-1">Dashboard Overview</h2>
        <p className="text-secondary">Welcome back to your offline administration control room.</p>
      </div>

      {/* Stats row */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card-glass p-4 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted font-monospace" style={{ fontSize: "0.8rem" }}>TOTAL PROJECTS</span>
              <h3 className="display-4 fw-extrabold m-0 text-white mt-1">{stats.projectsCount}</h3>
            </div>
            <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-4" style={{ color: "#6366f1" }}>
              <Folder size={32} style={{ stroke: "#6366f1" }} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-glass p-4 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted font-monospace" style={{ fontSize: "0.8rem" }}>INQUIRIES RECEIVED</span>
              <h3 className="display-4 fw-extrabold m-0 text-white mt-1">{stats.messagesCount}</h3>
            </div>
            <div className="p-3 bg-pink bg-opacity-10 text-pink rounded-4" style={{ color: "#ec4899" }}>
              <MessageSquare size={32} style={{ stroke: "#ec4899" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <h3 className="fs-4 mb-4 text-white">Quick Actions</h3>
      <div className="row g-4">
        <div className="col-md-6 col-lg-3">
          <Link to="/admin/dashboard/messages" className="text-decoration-none">
            <div className="card-glass h-100 p-4 text-center hover-action">
              <MessageSquare className="mx-auto mb-3" size={32} style={{ stroke: "#ec4899" }} />
              <h4 className="fs-5 text-white mb-2">View Messages</h4>
              <p className="text-secondary m-0" style={{ fontSize: "0.85rem" }}>Review submissions left by portfolio visitors.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/admin/dashboard/projects" className="text-decoration-none">
            <div className="card-glass h-100 p-4 text-center hover-action">
              <Folder className="mx-auto mb-3" size={32} style={{ stroke: "#6366f1" }} />
              <h4 className="fs-5 text-white mb-2">Manage Projects</h4>
              <p className="text-secondary m-0" style={{ fontSize: "0.85rem" }}>Update tech details, titles, and live links.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/admin/dashboard/projects/add" className="text-decoration-none">
            <div className="card-glass h-100 p-4 text-center hover-action">
              <FolderPlus className="mx-auto mb-3" size={32} style={{ stroke: "#06b6d4" }} />
              <h4 className="fs-5 text-white mb-2">Add Project</h4>
              <p className="text-secondary m-0" style={{ fontSize: "0.85rem" }}>Upload a new development project to display.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/" className="text-decoration-none">
            <div className="card-glass h-100 p-4 text-center hover-action">
              <ExternalLink className="mx-auto mb-3" size={32} style={{ stroke: "#10b981" }} />
              <h4 className="fs-5 text-white mb-2">View Portfolio</h4>
              <p className="text-secondary m-0" style={{ fontSize: "0.85rem" }}>Return to the public portfolio landing page.</p>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        .hover-action {
          transition: var(--transition-smooth);
        }
        .hover-action:hover {
          border-color: rgba(255, 255, 255, 0.2) !important;
          background: rgba(255, 255, 255, 0.04);
        }
      `}</style>
    </div>
  );
};

export default DashboardHome;
