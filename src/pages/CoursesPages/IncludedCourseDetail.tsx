// import { useParams } from "react-router-dom";
// import { courseIncludedData } from "../../components/TrainingInternship/CoursesData";
// import "../../components/TrainingInternship/Courses.css";

// const IncludedCourseDetail = () => {
//   const { id } = useParams();
//   const course = courseIncludedData.find(c => c.id === id);

//   if (!course) return <div>Not Found</div>;

//   return (
//     <div className="included-page">
//       <h1>{course.name}</h1>
//       <p>{course.description}</p>

//       <section>
//         <h2>Skills</h2>
//         <ul>{course.skills.map(s => <li key={s}>{s}</li>)}</ul>
//       </section>

//       <section>
//         <h2>Curriculum</h2>
//         <ul>{course.curriculum.map(c => <li key={c}>{c}</li>)}</ul>
//       </section>

//       <section>
//         <h2>Projects</h2>
//         <ul>{course.projects.map(p => <li key={p}>{p}</li>)}</ul>
//       </section>

//       <section>
//         <h2>Career Paths</h2>
//         <ul>{course.careerPaths.map(c => <li key={c}>{c}</li>)}</ul>
//       </section>
//     </div>
//   );
// };

// export default IncludedCourseDetail;

import { useParams, useNavigate } from "react-router-dom";
import { courseIncludedData } from "../../components/TrainingInternship/CoursesData";
import "../../components/TrainingInternship/Courses.css";

const IncludedCourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseIncludedData.find(c => c.id === id);

  if (!course) return <div>Not Found</div>;

  return (
    <div className="included-page">
      {/* Hero Section */}
      <div className="course-hero">
        <div className="hero-background">
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
          <div className="hero-circle hero-circle-3"></div>
        </div>
        
        <button onClick={() => navigate(-1)} className="back-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        
        <h1 className="course-hero-title">{course.name}</h1>
        <p className="course-hero-description">{course.description}</p>
      </div>

      <section className="skills-section">
        <div className="section-header">
          <h2>Master These Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {course.skills.map((skill) => (
            <div key={skill} className="skill-card">
              <div className="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="curriculum-section">
        <div className="section-header">
          <h2>Learning Journey</h2>
          <div className="section-line"></div>
        </div>
        <div className="curriculum-timeline">
          {course.curriculum.map((item, idx) => (
            <div key={item} className="timeline-item">
              <div className="timeline-marker">
                <span>{idx + 1}</span>
              </div>
              <div className="timeline-content">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="projects-section">
        <div className="section-header">
          <h2>Build Real Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-showcase">
          {course.projects.map((project, idx) => (
            <div key={project} className="project-card">
              <div className="project-number">0{idx + 1}</div>
              <div className="project-content">
                <div className="project-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <p>{project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section">
        <div className="section-header">
          <h2>Career Opportunities</h2>
          <div className="section-line"></div>
        </div>
        <div className="career-grid">
          {course.careerPaths.map((path) => (
            <div key={path} className="career-card">
              <div className="career-glow"></div>
              <div className="career-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>{path}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IncludedCourseDetail;