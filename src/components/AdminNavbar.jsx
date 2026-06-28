import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { logout } = useAuth();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top w-100">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/admin/dashboard">
          SB Dashboard
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarContent"
          aria-controls="adminNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none", boxShadow: "none" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="adminNavbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard/messages">
                Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/dashboard/projects/add">
                Add Project
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <button className="btn btn-sm btn-danger px-3 py-1.5 rounded-pill" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;