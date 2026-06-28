import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Flynaut",
      role: "Full Stack Developer",
      duration: "01/2024 – 31 Mar 2026",
      location: "Pune, India",
      bullets: [
        "Developed responsive web applications using React.js & Next.js, improving cross-device compatibility by 30%.",
        "Built RESTful APIs with Node.js & Express.js and integrated them with frontend using Axios.",
        "Optimized UI performance and reduced page load time by ~25%.",
        "Implemented Redux for global state management and MongoDB for backend data handling.",
        "Collaborated with cross-functional teams to deliver end-to-end features in agile sprints."
      ]
    },
    {
      company: "TechLeaper Systems Pvt. Ltd.",
      role: "Frontend Developer",
      duration: "11/2023 – 12/2023",
      location: "Pune, India",
      bullets: [
        "Built responsive user interfaces using HTML, CSS, JavaScript, and React.js.",
        "Developed reusable React components and managed state using hooks to enhance application modularity."
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-secondary col-md-6 mx-auto">
            A history of building responsive web products and robust API integrations across frontend and backend environments.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="timeline-container">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot" />
                  
                  <div className="card-glass">
                    <div className="d-flex flex-wrap justify-content-between align-items-start mb-3 gap-2">
                      <div>
                        <span className="timeline-date">{exp.duration}</span>
                        <h3 className="fs-4 m-0 d-flex align-items-center gap-2">
                          <Briefcase size={20} className="text-primary" style={{ stroke: "#8b5cf6" }} />
                          {exp.role}
                        </h3>
                        <h4 className="fs-5 text-secondary fw-semibold mt-1">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="d-flex align-items-center text-secondary fs-6 gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="ps-3 mb-0 text-secondary">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="mb-2">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
