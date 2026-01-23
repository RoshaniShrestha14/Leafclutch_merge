
import Button from "../ui/buttons";
import "./Courses.css";
import { ArrowRight } from "lucide-react";
function CourseEnrollCTA() {
  return (
    <section className="course-enroll-cta">
      <div className="cta-content">
        <h2>Build skills that move you forward.</h2>
        <p>
         Learn from structured courses designed to help you grow, practice,
          and succeed in real-world tech roles.
        </p>

        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSehIqCJm6ITkjUJcu9djYG4H60Uku61Z4Wlg_naCjTLUTjqlQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
          <Button variant="hero" icon={<ArrowRight size={18}  />}>
            Enroll Now
          </Button>
          </a>

      </div>
    </section>
  );
}

export default CourseEnrollCTA;
