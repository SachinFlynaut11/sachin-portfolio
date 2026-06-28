import { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setStatus('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const newMessage = {
        _id: 'msg-' + Date.now(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date().toISOString()
      };

      // Retrieve and append to local storage
      const existing = localStorage.getItem('local_messages');
      const messagesList = existing ? JSON.parse(existing) : [];
      messagesList.push(newMessage);
      localStorage.setItem('local_messages', JSON.stringify(messagesList));

      setSuccess(true);
      setStatus('Your message has been received! Review it in the Admin Dashboard.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSuccess(false);
      setStatus('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
      // Keep success banner for 4 seconds
      setTimeout(() => {
        setStatus('');
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-5 my-5">
      <div className="container">
        <div className="row align-items-center g-lg-5 py-5">
          {/* Left Column: Direct Contact Info */}
          <div className="col-lg-6 text-start">
            <h2 className="display-5 fw-bold mb-3">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="lead text-secondary mb-5">
              Have an exciting project idea, a position to fill, or just want to chat? Reach out to me directly or use the contact form!
            </p>

            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 card-glass d-flex align-items-center justify-content-center text-primary" style={{ stroke: "#6366f1", width: "54px", height: "54px" }}>
                  <Mail size={24} style={{ color: "#6366f1" }} />
                </div>
                <div>
                  <small className="text-muted font-monospace d-block" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>EMAIL ME</small>
                  <a href="mailto:sachinbansode2812@gmail.com" className="text-white text-decoration-none fw-semibold">
                    sachinbansode2812@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 card-glass d-flex align-items-center justify-content-center text-cyan" style={{ stroke: "#06b6d4", width: "54px", height: "54px" }}>
                  <Phone size={24} style={{ color: "#06b6d4" }} />
                </div>
                <div>
                  <small className="text-muted font-monospace d-block" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>CALL / WHATSAPP</small>
                  <a href="tel:+918805506894" className="text-white text-decoration-none fw-semibold">
                    +91 8805506894
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="p-3 rounded-4 card-glass d-flex align-items-center justify-content-center text-pink" style={{ stroke: "#ec4899", width: "54px", height: "54px" }}>
                  <MapPin size={24} style={{ color: "#ec4899" }} />
                </div>
                <div>
                  <small className="text-muted font-monospace d-block" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>LOCATION</small>
                  <span className="text-white fw-semibold">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="col-md-10 mx-auto col-lg-6 mt-5 mt-lg-0">
            <div className="card-glass p-4 p-md-5">
              <h3 className="fs-4 mb-4 text-white">Send a Message</h3>
              
              {status && (
                <div className={`alert ${success ? 'alert-success border-success text-success bg-success bg-opacity-10' : 'alert-danger border-danger text-danger bg-danger bg-opacity-10'} d-flex align-items-center gap-2 mb-4`} role="alert">
                  {success && <CheckCircle size={20} />}
                  <span style={{ fontSize: "0.9rem" }}>{status}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control form-glass"
                    id="nameInput"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="nameInput">Full Name</label>
                </div>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control form-glass"
                    id="emailInput"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="emailInput">Email Address</label>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control form-glass"
                    id="messageInput"
                    name="message"
                    placeholder="Your message"
                    style={{ height: '140px' }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <label htmlFor="messageInput">Your Message</label>
                </div>

                <button 
                  disabled={loading} 
                  className="w-100 btn-premium py-3 d-flex align-items-center justify-content-center gap-2 mt-2" 
                  type="submit"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
