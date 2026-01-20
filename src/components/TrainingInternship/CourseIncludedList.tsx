import { Link } from "react-router-dom";
import type { IncludedCourse } from "./CoursesData";

interface CourseIncludedListProps {
  courses: IncludedCourse[];
}

const CourseIncludedList = ({ courses }: CourseIncludedListProps) => (
  <section className="course-section">
    <h2>Courses Included</h2>
    <div className="included-grid">
      {courses.map((c) => (
        <Link
          key={c.slug}
          to={`/courses/included/${c.id}`} 
          className="included-card"
        >
          {c.title}
        </Link>
      ))}
    </div>
  </section>
);

export default CourseIncludedList;
