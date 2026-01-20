import coursesData, { type Benefit } from "./CoursesData";

type Props = {
  benefits: Benefit[];
};

const CourseBenefits = ({ benefits }: Props) => (
  <section className="course-section">
    <h2>Benefits</h2>
    <div className="benefits-grid">
      {benefits.map((b: Benefit) => (
        <div className="benefit-card" key={b.title}>
           <div className="benefit-header">
            <b.icon size={20} className="benefit-icon" />
            <h3>{b.title}</h3>
          </div>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CourseBenefits;
