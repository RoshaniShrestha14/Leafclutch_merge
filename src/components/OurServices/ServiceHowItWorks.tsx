import React from "react";
import "./Services.css";

interface Step {
  step: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { step: "01", title: "Discovery", description: "Understanding your needs and goals." },
  { step: "02", title: "Planning", description: "Creating a detailed roadmap and timeline." },
  { step: "03", title: "Development", description: "Building with agile methodology." },
  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support." },
];

export const ServiceHowItWorks: React.FC = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <span className="how-badge">Our Process</span>
          <h2 className="how-title">How We Work</h2>
          <p className="how-description">
            A proven methodology that ensures project success.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((item) => (
            <div key={item.step} className="how-card">
              <div className="how-step">{item.step}</div>
              <h3 className="how-heading">{item.title}</h3>
              <p className="how-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
