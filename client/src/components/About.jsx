import { GraduationCap, Languages } from "lucide-react";

const About = () => {
  return (
    <section className="py-5 my-5" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* Left Column: Tech Terminal Mockup */}
          <div className="col-lg-5">
            <div className="card-glass h-100 p-4 d-flex flex-column justify-content-between" style={{ minHeight: "360px" }}>
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="bg-danger rounded-circle" style={{ width: "12px", height: "12px" }}></div>
                  <div className="bg-warning rounded-circle" style={{ width: "12px", height: "12px" }}></div>
                  <div className="bg-success rounded-circle" style={{ width: "12px", height: "12px" }}></div>
                  <span className="ms-2 text-muted font-monospace" style={{ fontSize: "0.8rem" }}>sachin_bansode.json</span>
                </div>
                
                <pre className="m-0 font-monospace text-success" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  <code>
{`{
  "name": "Sachin Bansode",
  "title": "Full Stack Developer",
  "experience": "2+ Years",
  "location": "Pune, India",
  "core_stack": [
    "React.js", "Next.js", "Node.js", 
    "Express.js", "MongoDB", "Redux"
  ],
  "passion": "Building scalable web apps",
  "collaborative": true
}`}
                  </code>
                </pre>
              </div>
              
              <div className="mt-4 pt-3 border-top border-secondary border-opacity-10 text-muted font-monospace" style={{ fontSize: "0.8rem" }}>
                <span>// Open to remote & local opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Education, Languages */}
          <div className="col-lg-7 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fs-3 fw-bold mb-3">Professional Summary</h3>
              <p className="lead text-secondary mb-4" style={{ fontSize: "1.05rem" }}>
                Full Stack Developer with 2+ years of experience building scalable web applications using MongoDB, Express.js, React.js, Node.js, Vue.js, and Next.js. Strong in REST API integration, Redux state management, and performance optimization. Experienced in delivering production-ready features in collaborative agile teams.
              </p>
            </div>

            <div className="row g-4 mt-auto">
              {/* Education Sub-card */}
              <div className="col-md-7">
                <div className="card-glass h-100 p-3">
                  <h4 className="fs-5 mb-3 d-flex align-items-center gap-2">
                    <GraduationCap size={20} className="text-cyan" style={{ stroke: "#06b6d4" }} />
                    Education
                  </h4>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="fs-6 m-0 text-white">MCA</h5>
                      <span className="text-muted font-monospace" style={{ fontSize: "0.75rem" }}>2022 – 2024</span>
                    </div>
                    <small className="text-secondary d-block">Savitribai Phule Pune University</small>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between align-items-baseline">
                      <h5 className="fs-6 m-0 text-white">BSc (Computer Science)</h5>
                      <span className="text-muted font-monospace" style={{ fontSize: "0.75rem" }}>2019 – 2022</span>
                    </div>
                    <small className="text-secondary d-block">Savitribai Phule Pune University</small>
                  </div>
                </div>
              </div>

              {/* Languages Sub-card */}
              <div className="col-md-5">
                <div className="card-glass h-100 p-3">
                  <h4 className="fs-5 mb-3 d-flex align-items-center gap-2">
                    <Languages size={20} className="text-pink" style={{ stroke: "#ec4899" }} />
                    Languages
                  </h4>
                  <div className="d-flex flex-column gap-2">
                    <div className="lang-badge justify-content-between">
                      <span>English</span>
                      <small className="text-secondary fw-normal">Professional</small>
                    </div>
                    <div className="lang-badge justify-content-between">
                      <span>Hindi</span>
                      <small className="text-secondary fw-normal">Native</small>
                    </div>
                    <div className="lang-badge justify-content-between">
                      <span>Marathi</span>
                      <small className="text-secondary fw-normal">Native</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;