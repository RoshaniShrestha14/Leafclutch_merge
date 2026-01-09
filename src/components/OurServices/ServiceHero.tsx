import React from "react";
import "./Services.css";
import Badge from "../ui/Badge";
import Container from "../ui/Container";

const ServiceHero: React.FC = () => {
  return (
    <section className="service-hero">
      <div className="hero-overlay" />
      <Container className="hero-content">
        <Badge variant="hero">Our Services</Badge>
        <h1 className="hero-title">
          Comprehensive Technology
          <br />
          Solutions
        </h1>

        <p className="hero-description">
          From concept to deployment, we provide end-to-end technology services to
          help your business thrive in the digital landscape.
        </p>
      </Container>
    </section>
  );
};

export { ServiceHero };
export default ServiceHero;
