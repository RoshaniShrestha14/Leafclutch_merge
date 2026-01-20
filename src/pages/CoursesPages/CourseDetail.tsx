import { useParams } from "react-router-dom";
import coursesData from "../../components/TrainingInternship/CoursesData";
import CourseHero from "../../components/TrainingInternship/CourseHero";
import CourseMeta from "../../components/TrainingInternship/CourseMeta";
import CourseProgram from "../../components/TrainingInternship/CourseProgram";
import CourseBenefits from "../../components/TrainingInternship/CourseBenefits";
import CourseTechnologies from "../../components/TrainingInternship/CourseTechnologies";
import CourseIncludedList from "../../components/TrainingInternship/CourseIncludedList";
import "../../components/TrainingInternship/Courses.css";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = coursesData[slug as keyof typeof coursesData];

  if (!course) return <div className="not-found">Course Not Found</div>;

  return (
    <div className="course-page">
      <CourseHero course={course} />
      <div className="divider">
      <CourseMeta course={course} />
      <CourseProgram structure={course.programStructure} />
      {course.coursesIncluded && (
        <CourseIncludedList courses={course.coursesIncluded} />
      )}
      <CourseBenefits benefits={course.benefits} />
      {course.technologies && (
        <CourseTechnologies technologies={course.technologies} />
      )}
      </div>
    </div>
  );
};

export default CourseDetail;
