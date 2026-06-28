import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, KeyRound, Mail, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-100 p-3 d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="col-md-5 col-lg-4">
        
        {/* Back Link */}
        <div className="mb-4 text-start">
          <Link to="/" className="text-secondary text-decoration-none hover-white d-inline-flex align-items-center gap-1.5 font-monospace" style={{ fontSize: "0.85rem" }}>
            <ArrowLeft size={16} /> Return to Portfolio
          </Link>
        </div>

        <div className="card-glass p-4 p-md-5 text-center">
          <div className="d-inline-flex p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-4" style={{ color: "#8b5cf6" }}>
            <ShieldAlert size={36} style={{ stroke: "#8b5cf6" }} />
          </div>
          
          <h2 className="fs-3 fw-bold mb-2 text-white">Admin Portal</h2>
          <p className="text-secondary mb-4" style={{ fontSize: "0.85rem" }}>Enter your credentials to manage the portfolio offline.</p>

          {error && (
            <div className="alert alert-danger border-danger text-danger bg-danger bg-opacity-10 text-start mb-4" style={{ fontSize: "0.85rem" }} role="alert">
              {error}
            </div>
          )}
         
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <div className="form-group text-start">
              <label className="form-label text-white" style={{ fontSize: "0.8rem" }}>Admin Email</label>
              <div className="position-relative">
                <input
                  type="email"
                  name="email"
                  placeholder="name@portfolio.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-glass ps-4"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-group text-start mb-2">
              <label className="form-label text-white" style={{ fontSize: "0.8rem" }}>Password</label>
              <div className="position-relative">
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control form-glass ps-4"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Helper Credentials Tip Banner */}
            <div className="card p-2.5 mb-2 text-start border-0" style={{ background: "rgba(99, 102, 241, 0.08)", borderRadius: "10px" }}>
              <span className="text-white fw-bold d-block mb-1" style={{ fontSize: "0.75rem", color: "var(--accent-cyan)" }}>
                💡 Access Credentials:
              </span>
              <span className="text-secondary font-monospace d-block" style={{ fontSize: "0.75rem" }}>
                Email: <strong>sachin@portfolio.com</strong>
              </span>
              <span className="text-secondary font-monospace d-block" style={{ fontSize: "0.75rem" }}>
                Password: <strong>admin</strong>
              </span>
            </div>
            
            <button type="submit" className="btn-premium py-2.5 mt-2" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing In...
                </>
              ) : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;