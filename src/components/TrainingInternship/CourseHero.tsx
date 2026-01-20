import type { Course } from "./CoursesData";
import "./Courses.css"; 
type Props = {
  course: Course;
};

const CourseHero = ({ course }: Props) => (
  <section className="course-hero">
    <p className="courses-badge">{course.subtitle}</p>
    <h1>{course.title}</h1>
    <p className="desc">{course.description}</p>
  </section>
);

export default CourseHero;
