import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";


const Hero = () => {
  const handleViewResume = () => {
    // Open the resume PDF stored in /public folder
    window.open('/Sachin_Bansode_FullStack_Developer_Resume.pdf', '_blank');
  };

  return (
    <section className="py-5 my-md-5" id="home">
      <div className="container">
        <div className="row align-items-center g-5 py-5">
          {/* Left Column - Intro details */}
          <div className="col-lg-7 text-start">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-4 rounded-pill card-glass border-opacity-20" style={{ border: "1px solid #f43f5e" }}>
              <span className="position-relative d-flex" style={{ width: "8px", height: "8px" }}>
                <span className="animate-ping position-absolute inline-flex h-100 w-100 rounded-circle bg-danger opacity-75"></span>
                <span className="relative inline-flex rounded-circle bg-danger" style={{ width: "8px", height: "8px" }}></span>
              </span>
              <span className="font-monospace text-white" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>NOT CURRENTLY WORKING · Last day: 31 Mar 2026</span>
            </div>

            <h1 className="display-4 fw-extrabold lh-sm mb-3">
              Hi, I am <br />
              <span className="gradient-text">Sachin Bansode</span>
            </h1>
            
            <h2 className="fs-3 text-white fw-bold mb-4 font-monospace">
              &lt;Full Stack Developer /&gt;
            </h2>

            <p className="lead text-secondary mb-4 col-lg-11" style={{ fontSize: "1.1rem" }}>
              I have 2+ years of experience building high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Specializing in responsive frontend design, seamless REST API integration, and Redux state management.
            </p>

            {/* Quick Contacts */}
            <div className="d-flex flex-wrap gap-4 mb-4 text-secondary font-monospace" style={{ fontSize: "0.85rem" }}>
              <a href="mailto:sachinbansode2812@gmail.com" className="text-decoration-none text-secondary hover-white d-flex align-items-center gap-2">
                <Mail size={16} /> sachinbansode2812@gmail.com
              </a>
              <a href="tel:+918805506894" className="text-decoration-none text-secondary hover-white d-flex align-items-center gap-2">
                <Phone size={16} /> +91 8805506894
              </a>
            </div>

            {/* Actions */}
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-premium d-flex align-items-center gap-2 text-decoration-none">
                View My Projects <ArrowRight size={18} />
              </a>
              <button onClick={handleViewResume} className="btn-premium-outline d-flex align-items-center gap-2">
                <Download size={18} /> View Resume
              </button>
            </div>

            {/* Social Connects */}
            <div className="d-flex gap-3 mt-4">
              <a href="https://www.linkedin.com/in/sachinkb2812/" target="_blank" rel="noreferrer" className="text-secondary hover-white" title="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/SachinFlynaut11" target="_blank" rel="noreferrer" className="text-secondary hover-white" title="GitHub">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Abstract representation */}
          <div className="col-lg-5">
            <div className="position-relative mx-auto" style={{ maxWidth: "380px" }}>
              {/* Decorative radial glows */}
              <div className="position-absolute" style={{
                top: "-10%", left: "-10%", width: "120%", height: "120%",
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)",
                zIndex: -1
              }}></div>
              
              <div className="card-glass p-4 rounded-5 text-start font-monospace shadow-2xl relative overflow-hidden" style={{ border: "1px solid rgba(99, 102, 241, 0.15)" }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex gap-1.5">
                    <span className="rounded-circle bg-danger" style={{ width: "10px", height: "10px" }}></span>
                    <span className="rounded-circle bg-warning" style={{ width: "10px", height: "10px" }}></span>
                    <span className="rounded-circle bg-success" style={{ width: "10px", height: "10px" }}></span>
                  </div>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>react-component.jsx</span>
                </div>

                <div className="text-secondary" style={{ fontSize: "0.8rem", lineHeight: "1.6" }}>
                  <p className="m-0"><span style={{ color: "#ec4899" }}>import</span> React <span style={{ color: "#ec4899" }}>from</span> <span style={{ color: "#06b6d4" }}>'react'</span>;</p>
                  <p className="m-0"><span style={{ color: "#ec4899" }}>import</span> &#123; Redux &#125; <span style={{ color: "#ec4899" }}>from</span> <span style={{ color: "#06b6d4" }}>'state'</span>;</p>
                  <br />
                  <p className="m-0 text-white"><span style={{ color: "#8b5cf6" }}>const</span> Developer = () =&gt; &#123;</p>
                  <p className="m-0 ps-3"><span style={{ color: "#ec4899" }}>const</span> [skills] = useState([</p>
                  <p className="m-0 ps-5" style={{ color: "#06b6d4" }}>"React", "Node", "MongoDB", "Next.js"</p>
                  <p className="m-0 ps-3">]);</p>
                  <br />
                  <p className="m-0 ps-3 text-white"><span style={{ color: "#ec4899" }}>return</span> (</p>
                  <p className="m-0 ps-4 text-muted">&lt;<span style={{ color: "#3b82f6" }}>div</span> className=<span style={{ color: "#06b6d4" }}>"full-stack"</span>&gt;</p>
                  <p className="m-0 ps-5 text-muted">&lt;<span style={{ color: "#3b82f6" }}>AboutMe</span> /&gt;</p>
                  <p className="m-0 ps-5 text-muted">&lt;<span style={{ color: "#3b82f6" }}>Experience</span> items=&#123;skills&#125; /&gt;</p>
                  <p className="m-0 ps-4 text-muted">&lt;/<span style={{ color: "#3b82f6" }}>div</span>&gt;</p>
                  <p className="m-0 ps-3 text-white">);</p>
                  <p className="m-0 text-white">&#125;;</p>
                  <p className="m-0"><span style={{ color: "#ec4899" }}>export default</span> Developer;</p>
                </div>

                {/* Micro tech indicators floating background */}
                <div className="position-absolute" style={{ bottom: "10px", right: "20px", fontSize: "4.5rem", opacity: "0.03", pointerEvents: "none" }}>
                  &lt;/&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-white {
          transition: var(--transition-smooth);
        }
        .hover-white:hover {
          color: var(--text-primary) !important;
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;