import React from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  Server,
  Shield,
  CheckCircle,
  BarChart3,
  Megaphone,
} from "lucide-react";
import Button from "../ui/buttons";
import "./Services.css";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    icon: Globe,
    href: "/services/web-development",
    features: ["Custom Web Apps", "E-commerce", "CMS Solutions", "API Development"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
    icon: Smartphone,
    href: "/services/mobile-development",
    features: ["iOS Apps", "Android Apps", "Cross-platform", "App Maintenance"],
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline your development with CI/CD pipelines, cloud infrastructure, and automation.",
    icon: Server,
    href: "/services/devops",
    features: ["CI/CD Pipelines", "Cloud Migration", "Containerization", "Monitoring"],
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security audits, penetration testing, and compliance.",
    icon: Shield,
    href: "/services/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Training"],
  },
  {
    title: "Data Science & AI",
    description:
      "Transform data into actionable insights with machine learning, analytics and automation.",
    icon: BarChart3,
    href: "/services/data-science",
    features: ["ML Models", "Data Analytics", "AI Integration", "Automation"],
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence with SEO, social media marketing, and paid advertising.",
    icon: Megaphone,
    href: "/services/digital-marketing",
    features: ["SEO", "Social Media", "PPC Campaigns", "Content Strategy"],
  },
];

export const ServiceCard: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-badge">What We Offer</span>
        <h2 className="services-section-title">Available Services</h2>
        <p className="services-description">
          Comprehensive technology solutions tailored to your business needs.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link to={service.href} className="service-card" key={service.title} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-icon">
                <Icon size={26} stroke="#072069" />
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="service" href={service.href}>
                Learn More <span>→</span>
              </Button>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default ServiceCard;