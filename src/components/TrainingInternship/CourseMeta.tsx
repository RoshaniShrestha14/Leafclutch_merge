import type { Course } from "./CoursesData";
import "./Courses.css";
import { Clock, DollarSign } from "lucide-react";

interface CourseMetaProps {
  course: Course;
}

const CourseMeta = ({ course }: CourseMetaProps) => (
  <section className="course-meta-wrapper">
    <div className="course-meta">
      <div className="course-meta-item">
        <Clock className="course-meta-icon" />
        <strong>Duration:</strong> {course.duration}
      </div>

      <div className="course-meta-item">
        <DollarSign className="course-meta-icon" />
        <strong>Total Fee:</strong> {course.totalFee}
      </div>

      <div className="course-meta-item">
        <strong>Starting Fee:</strong> {course.startFee}
      </div>
    </div>
  </section>
);

export default CourseMeta;
