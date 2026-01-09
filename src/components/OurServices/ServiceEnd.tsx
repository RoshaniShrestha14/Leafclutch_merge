import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

export const ServiceEnd: React.FC = () => {
  return (
    <section className="end-section">
      <div className="end-container">
        <h2 className="end-title">Ready to Start Your Project?</h2>
        <p className="end-description">
          Let's discuss your requirements and create a solution that drives results.
        </p>
        <Link to="/contact" className="end-button">
          <span>Get a Free Consultation</span>
          <span className="end-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};
