import "./Courses.css";
interface CourseProgramProps {
  structure: string[];
}

const CourseProgram = ({ structure }: CourseProgramProps) => (
  <section className="course-section">
    <h2>Program Structure</h2>
    <ul>
      {structure.map((item: string) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default CourseProgram;
