import { Folder, FolderPlus, Home, Mail, LogOut, User } from "lucide-react";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();
  
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 d-lg-flex d-none sidebar-custom"
      style={{ width: 280 }}
    >
      <Link to="/admin/dashboard" className='nav-link text-white d-flex align-items-center gap-2 mb-3'>
        <span className="fs-4 fw-bold gradient-text">Admin Panel</span>
      </Link>
      <hr className="border-secondary border-opacity-25" />
      
      <ul className="nav nav-pills flex-column gap-2 mb-auto">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link active d-flex align-items-center gap-2" aria-current="page">
            <Home size={18} />
            Dashboard Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/dashboard/messages" className="nav-link text-white d-flex align-items-center gap-2">
            <Mail size={18} />
            Messages
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/dashboard/projects" className="nav-link text-white d-flex align-items-center gap-2">
            <Folder size={18} />
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/dashboard/projects/add" className="nav-link text-white d-flex align-items-center gap-2">
            <FolderPlus size={18} />
            Add Project
          </Link>
        </li>
      </ul>
      
      <hr className="border-secondary border-opacity-25" />
      
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div 
            className="rounded-circle me-2 d-flex align-items-center justify-content-center bg-primary text-white fw-bold" 
            style={{ width: "32px", height: "32px", fontSize: "0.85rem", background: "var(--primary-gradient)" }}
          >
            SB
          </div>
          <strong>{user?.name || "Sachin Bansode"}</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link to="/" className="dropdown-item">
              View Portfolio
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li onClick={logout}>
            <a className="dropdown-item d-flex align-items-center gap-2" href="#">
              <LogOut size={14} /> Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;