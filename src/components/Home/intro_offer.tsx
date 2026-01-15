import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "./intro_offer.css";
import Badge from "../ui/Badge";
import IconBox from "../ui/IconBox";
import Gifs from "../ui/Gifs";

const offers = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    gif: "https://lottie.host/eeaa52a2-1603-4150-8205-69d247c3c39d/6dS2EIJYCZ.lottie",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android.",
    gif: "https://lottie.host/83a47d93-b483-41f1-956b-e4001086101b/LUV1JQrazi.lottie",
    href: "/services/mobile-development",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamline your development with CI/CD, cloud infrastructure, and automation.",
    gif: "https://lottie.host/15ceb664-add9-41ad-9d27-0d5dec486a15/pbbbA3LPgs.lottie",
    href: "/services/devops",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security solutions.",
    gif: "https://lottie.host/54862872-7dea-4048-ab1f-dd50597bd2ed/B1SmJbnac0.lottie",
    href: "/services/cybersecurity",
  },
  {
    title: "Data Science & AI",
    description:
      "Transform data into actionable insights with ML and analytics.",
    gif: "https://lottie.host/6b8a7540-5ef8-4a39-a5ed-fd4d29d0abe4/hw4OBlWPdJ.lottie",
    href: "/services/data-science",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence with targeted marketing strategies.",
    gif: "https://lottie.host/2b7e8f0c-5a07-45c5-aab0-244d7da729a8/j8H5ri9v9b.lottie",
    href: "/services/digital-marketing",
  },
];

const IntroOffer: React.FC = () => {
  return (
    <>
      <section className="services intro-offer">
        <div className="intro-offer-header">
          <Badge variant="structure">What we offer</Badge>

          <h2 className="intro-offer-title">
            Comprehensive Technology
            <br />
            Solutions
          </h2>

          <p className="intro-offer-description">
            From custom software to AI automation, we deliver end-to-end
            <br />
            solutions that transform your business operations.
          </p>
        </div>

        <div className="intro-offer-grid">
          {offers.map((service) => (
            <Link
              to={service.href}
              key={service.title}
              className="intro-offer-card"
            >
              <div className="intro-offer-icon">
              <Gifs src={service.gif} className="intro-offer-gif" />
              </div>

              <h3 className="intro-offer-card-title">{service.title}</h3>

              <p className="intro-offer-card-desc">{service.description}</p>

              <span className="intro-offer-link">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="training-cta">
        <div className="training-box">
          <div className="training-left">
            <IconBox variant="benefit">
              <GraduationCap size={28} />
            </IconBox>

            <div className="training-text">
              <h3>Training & Internship Programs</h3>
              <p>
                Industry-focused learning in Data Science, AI, Software
                Development & more.
              </p>
            </div>
          </div>

          <Link to="/training/courses" className="training-btn">
            Explore Programs →
          </Link>
        </div>
      </section>
    </>
  );
};

export default IntroOffer;

