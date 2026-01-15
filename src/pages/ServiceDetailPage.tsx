import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Server,
  Shield,
  BarChart3,
  Megaphone,
  ArrowRight,
  CheckCircle,
  Code,
  Layers,
  Zap,
  Clock,
  PhoneCall,
} from "lucide-react";
import Button from "../components/ui/buttons";
import Badge from "../components/ui/Badge";
import Container from "../components/ui/Container";
import IconBox from "../components/ui/IconBox";
import Card from "../components/ui/Card";
import "./ServiceDetail.css";

type Benefit = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// type Service = {
//   title: string;
//   subtitle: string;
//   description: string;
//   icon: React.ElementType;
//   heroImage: string;
//   features: string[];
//   technologies: string[];
//   benefits: Benefit[];
// };
type Service = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  heroImage: string;
  features: string[];
  technologies: string[];
  benefits: Benefit[];
  developmentTypes?: {
    title: string;
    description: string;
    stack: string[];
  }[];
};


const serviceData: Record<string, Service> = {
  "web-development": {
    title: "Web Development",
    subtitle: "Build modern, Scalable web applications",
    description:
      "We create custom websites and web applications that are fast, secure, and user-friendly. Our team specializes in modern frameworks and follows best practices for SEO, accessibility, and performance.",
    icon: Globe,
    heroImage: "/Web%20development.jpg",
    developmentTypes: [
  {
    title: "Frontend Development",
    description: "We build fast, beautiful, and responsive user interfaces that deliver outstanding user experience.",
    stack: ["React", "Next.js", "Vue", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    description: "We develop secure APIs, databases, and server logic that power your application.",
    stack: ["Node.js", "Python", "PostgreSQL", "REST API"]
  },
  {
    title: "Full Stack Development",
    description: "We handle everything from UI to server, database, and deployment.",
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  }
],

    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "API Development",
      "Web Optimization",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    benefits: [
      { icon: Zap, title: "Fast Performance", description: "Optimized for speed and efficiency" },
      { icon: Layers, title: "Scalable Architecture", description: "Built to grow with your business" },
      { icon: Code, title: "Clean Code", description: "Maintainable and well-documented" },
      { icon: Clock, title: "On-Time Delivery", description: "Reliable project timelines" },
    ],
  },

  "mobile-development": {
    title: "Mobile App Development",
    subtitle: "Native and cross-platform mobile solutions",
    description:
      "We build mobile applications that provide exceptional user experiences on iOS and Android.",
    icon: Smartphone,
    heroImage: "/Mobile%20App%20Development.jpg",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Support",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    benefits: [
      { icon: Zap, title: "Native Performance", description: "Smooth and responsive apps" },
      { icon: Layers, title: "Cross-Platform", description: "One codebase, multiple platforms" },
      { icon: Code, title: "Modern Design", description: "Beautiful interfaces" },
      { icon: Clock, title: "Quick Updates", description: "Fast iteration cycles" },
    ],
  },

  devops: {
    title: "DevOps Solutions",
    subtitle: "Streamline your development pipeline",
    description:
      "Accelerate your software delivery with CI/CD, cloud automation, and monitoring.",
    icon: Server,
    heroImage: "https://wallpaperbat.com/img/873635-devops-testing-services-agile-testing.jpg",
    features: [
      "CI/CD Pipelines",
      "Cloud Migration",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Automation",
    ],
    technologies: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Jenkins"],
    benefits: [
      { icon: Zap, title: "Faster Releases", description: "Ship with confidence" },
      { icon: Layers, title: "Scalable Systems", description: "Built for growth" },
      { icon: Code, title: "Automation First", description: "Reduced manual work" },
      { icon: Clock, title: "24/7 Monitoring", description: "Always-on reliability" },
    ],
  },

  cybersecurity: {
    title: "Cybersecurity",
    subtitle: "Protect your digital assets",
    description:
      "Comprehensive cybersecurity solutions to protect systems and data.",
    icon: Shield,
    heroImage: "/Cybersecurity.jpg",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance (SOC2, GDPR)",
      "Incident Response",
      "Security Training",
      "Vulnerability Management",
    ],
    technologies: ["SIEM", "IDS/IPS", "WAF", "MFA", "Encryption"],
    benefits: [
      { icon: Zap, title: "Threat Prevention", description: "Proactive defense" },
      { icon: Layers, title: "Compliance Ready", description: "Meet standards" },
      { icon: Code, title: "Expert Team", description: "Certified professionals" },
      { icon: Clock, title: "Rapid Response", description: "Quick incident handling" },
    ],
  },

  "data-science": {
    title: "Data Science & AI",
    subtitle: "Transform data into insights",
    description:
      "Custom AI models and analytics solutions for smarter decisions.",
    icon: BarChart3,
    heroImage: "/Datascience.jpg",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Data Visualization",
      "AI Automation",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Spark", "Power BI"],
    benefits: [
      { icon: Zap, title: "Smart Insights", description: "Data-driven decisions" },
      { icon: Layers, title: "Custom Models", description: "Built for your data" },
      { icon: Code, title: "AI Integration", description: "Seamless adoption" },
      { icon: Clock, title: "Real-Time Analytics", description: "Live dashboards" },
    ],
  },

  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Grow your online presence",
    description:
      "Strategic marketing campaigns that deliver measurable growth.",
    icon: Megaphone,
    heroImage: "/Digital%20Marketing.jpg",
    features: [
      "SEO",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
    ],
    technologies: ["Google Ads", "Meta Ads", "SEMrush", "HubSpot"],
    benefits: [
      { icon: Zap, title: "More Traffic", description: "Qualified visitors" },
      { icon: Layers, title: "Brand Growth", description: "Wider reach" },
      { icon: Code, title: "Data Driven", description: "Measurable ROI" },
      { icon: Clock, title: "Consistent Growth", description: "Long-term results" },
    ],
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <Button variant="primary" href="/all-services">
          View All Services
        </Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="service-page">
      <section className="hero" style={{ backgroundImage: `url(${service.heroImage})` }}>
        <div className="hero-overlay" />
        <Container className="hero-content">
          <IconBox  variant="hero" >
            <Icon size={34} strokeWidth={2} variant="hero" /> 
          </IconBox>
          <Badge variant="hero">{service.subtitle}</Badge>
          <h1>{service.title}</h1>
          <p className="hero-subtext">{service.description}</p>
          <Button variant="hero" href="/contact" icon={<ArrowRight size={18} />}>
            Get Started
          </Button>
        </Container>
      </section>

      <section className="service-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          {service.features.map((feature) => (
            <Card key={feature} variant="feature">
              <CheckCircle stroke="rgb(37, 176, 95)" size={18} />
              <span>{feature}</span>
            </Card>
          ))}
        </div>
      </section>

      {slug === "web-development" && service.developmentTypes && (
  <section className="service-section">
    <span className="deployment-badge">Customizable</span>
    <h2 className="deployment-title">Build Exactly What You Need</h2>
    <p className="deployment-description">
      Build exactly what you need from frontend to full stack.
    </p>

    <div className="dev-type-grid">
      {service.developmentTypes.map((type) => (
        <div key={type.title} className="dev-type-card">
          <h3>{type.title}</h3>
          <p>{type.description}</p>

          <div className="dev-stack">
            {type.stack.map((tech) => (
              <span key={tech} className="dev-pill">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
)}


     <section className="benefits-section">
  <div className="benefits-container">
    <div className="benefits-header">
      <span className="benefits-badge">Why Choose Us</span>
      <h2 className="benefits-title">Key Benefits</h2>
      <p className="benefits-description">
        What sets our services apart from the competition.
      </p>
    </div>

    <div className="benefits-grid">
      {service.benefits.map((benefit) => (
        <div key={benefit.title} className="benefit-card">
          <IconBox variant="benefit">
            <benefit.icon />
          </IconBox>
          <h3 className="benefit-card-title">{benefit.title}</h3>
          <p className="benefit-card-desc">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="service-section center">
        <h2>Technologies We Use</h2>
        <div className="tech-stack">
          {service.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss your web development needs and create a solution that delivers results.</p>

        <div className="cta-actions">
          <Button variant="secondary" href="https://wa.me/9766722920?text=I%20want%20to%20schedule%20a%20call" rel="noopener noreferrer">
           <PhoneCall></PhoneCall> Schedule a Call
          </Button>
          <Button variant="secondary" href="/all-services">
            View All Services
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
