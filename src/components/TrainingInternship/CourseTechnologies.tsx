interface CourseTechnologiesProps {
  technologies: string[];
}

const CourseTechnologies = ({ technologies }: CourseTechnologiesProps) => (
  <section className="course-section">
    <h2>Technologies</h2>
    <div className="tech-list">
      {technologies.map((tech: string) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>
  </section>
);

export default CourseTechnologies;
