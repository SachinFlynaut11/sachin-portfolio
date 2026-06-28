import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { ShieldAlert, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          SB Portfolio
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none", boxShadow: "none" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            {user && user.email ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link d-flex align-items-center gap-1.5" to="/admin/dashboard">
                    <ShieldAlert size={15} /> Dashboard
                  </Link>
                </li>
                <li className="nav-item ms-lg-2">
                  <button 
                    onClick={logout} 
                    className="btn btn-sm btn-outline-danger d-flex align-items-center gap-1.5 px-3 py-1.5 rounded-pill"
                    style={{ fontSize: "0.85rem" }}
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-lg-2">
                <Link 
                  className="btn btn-sm btn-premium-outline px-3 py-1.5 rounded-pill d-flex align-items-center gap-1"
                  style={{ fontSize: "0.85rem" }}
                  to="/admin/login"
                >
                  <ShieldAlert size={14} /> Admin
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;