import {
  Github,
  Linkedin,
  ShieldAlert
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row align-items-center justify-content-between g-4">
          
          {/* Logo & Copyright */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fs-5 fw-bold mb-1 gradient-text">Sachin Bansode</h5>
            <p className="text-secondary m-0" style={{ fontSize: "0.85rem" }}>
              © {new Date().getFullYear()} Sachin Bansode. All rights reserved.
            </p>
          </div>

          {/* Social Icons - LinkedIn & GitHub only */}
          <div className="col-md-4 d-flex justify-content-center gap-3">
            <a
              className="footer-icon"
              href="https://www.linkedin.com/in/sachinkb2812/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              className="footer-icon"
              href="https://github.com/SachinFlynaut11"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <Github size={22} />
            </a>
          </div>

          {/* Discreet Admin Login */}
          <div className="col-md-4 text-center text-md-end">
            <Link 
              to="/admin/login" 
              className="text-secondary text-decoration-none hover-white d-inline-flex align-items-center gap-1.5"
              style={{ fontSize: "0.8rem" }}
            >
              <ShieldAlert size={14} /> Admin Access
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
