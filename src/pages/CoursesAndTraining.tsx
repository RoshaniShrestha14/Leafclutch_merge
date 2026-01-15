import React, { useState } from "react";
import "./CoursesAndTraining.css";
import {
  ArrowRight,
  Clock,
  BookOpen,
  DollarSign,
  GraduationCap,
  CheckCircle,
  TrendingUp,
  Award,
  Zap, Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/ui/buttons";
import Badge from "../components/ui/Badge";
import Container from "../components/ui/Container";
import IconBox from "../components/ui/IconBox";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import { FaRupeeSign } from "react-icons/fa";
type CatalogItem = {
  title: string;
  totalFee?: string;
  enrollFee?: string;
  duration?: string;
  installments?: string;
  includes?: string[];
  level?: string;
  price?: string;
};

const CoursesAndTraining: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<CatalogItem | null>(null);

  const openModal = (course: CatalogItem) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setModalOpen(false);
  };

  const courses: CatalogItem[] = [
    {
      title: "Category 1: Core Tech & Design Courses",
      totalFee: "NPR 6,000",
      enrollFee: "Enroll with just NPR 1,500",
      duration: "3 Months",
      installments: "Remaining fee payable in 5 easy installments",
      includes: [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Cybersecurity",
        "Graphic Design",
        "UI/UX Design",
        "SEO (Search Engine Optimization)",
      ],
    },
    {
      title: "Category 2: Data & AI Programs",
      totalFee: "NPR 8,000",
      enrollFee: "Enroll with just NPR 2,500",
      duration: "3 Months",
      installments: "Remaining fee payable in 5 easy installments",
      includes: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Analyst",
        "Data Science",
        "Agentic AI",
      ],
    },
    {
      title: "Category 3: DSA Program",
      totalFee: "NPR 7,000",
      enrollFee: "Enroll with just NPR 2,000",
      duration: "3 Months",
      installments: "Remaining fee payable in 5 easy installments",
      includes: [
        "DSA + 350 Questions (LeetCode, GFG, HackerRank)",
        "100 Days Coding Challenge",
        "Interview & Problem Solving Focus",
      ],
    },
    {
      title: "Category 4: Programming Language Courses",
      totalFee: "NPR 6,000",
      enrollFee: "Enroll with just NPR 1,500",
      duration: "3 Months",
      installments: "Remaining fee payable in 5 easy installments",
      includes: ["Python", "C", "C++", "Java", "JavaScript"],
    },
  ];

  const internships: CatalogItem[] = [
    {
      title: "Frontend Development Intern",
      duration: "3 months",
      level: "Students & Freshers",
      price: "Stipend Provided",
    },
    {
      title: "Backend Development Intern",
      duration: "3 months",
      level: "Students & Freshers",
      price: "Stipend Provided",
    },
    {
      title: "Data Science Intern",
      duration: "6 months",
      level: "Students & Freshers",
      price: "Stipend Provided",
    },
      {
      title: "Full Stack Intern",
      duration: "6 months",
      level: "Students & Freshers",
      price: "Stipend Provided",
    },
  ];

  const benefits: string[] = [
    "Experience Letter",
    "Course Completion Certificate",
    "Internship Certificate",
    "1 Lifetime Udemy Course",
    "Resume Building Support",
    "24/7 Mentor Support",
    "Letter of Recommendation (LOR)",
    "Job Opportunities",
    "1 Internal Hackathon",
  ];

const features = [
  {
    title: "Structured Training",
    description:
      "Our program follows a structured training → internship model for practical learning and growth.",
    icon: BookOpen,
  },
  {
    title: "Skill-Based Promotions",
    description:
      "Promotions are based on skill, not time. Your progress and performance matter most.",
    icon: TrendingUp,
  },
  {
    title: "Industry-Relevant Projects",
    description:
      "Work on real-world projects that prepare you for the tech industry and build your portfolio.",
    icon: Award,
  },
  {
    title: "Affordable & Flexible",
    description:
      "Affordable fees with easy installment options to suit your budget and schedule.",
    icon: DollarSign,
  },
  {
    title: "Extended Internship Options",
    description:
      "Internship can be extended if required to gain more experience and exposure.",
    icon: Zap,
  },
];

  const programStructure = [
    {
      icon: BookOpen,
      title: "First Month Training",
      description:
        "Complete full training with hands-on learning and mentor guidance. Build a strong foundation through practical experience and expert support.",
    },
    {
      icon: TrendingUp,
      title: "Internship Promotion",
      description:
        "After 1 month, you will be promoted to an internship position. Start applying your skills in real-world scenarios and gain valuable experience.",
    },
    {
      icon: Award,
      title: "Performance-Based Growth",
      description:
        "Promotion depends on your skills, performance, and consistency. We evaluate your progress to ensure you're ready for the next level.",
    },
    {
      icon: Zap,
      title: "Fast-Track Option",
      description:
        "If you are highly capable, you may be promoted earlier based on your skill level. Exceptional performers can advance faster through the program.",
    },
  ];
  const emailRecipient = "careers@leafclutchtech.com.np";

const generateMailToLink = (internshipTitle: string) => {
  const body = `Hello,

I would like to apply for the ${internshipTitle} position. Here is my information:

Name: [Your Name]
LinkedIn: [Your LinkedIn]
GitHub: [Your GitHub]
Resume: Please attach your resume file.

Thank you.
`;

  return `mailto:${emailRecipient}?subject=${encodeURIComponent(
    `Internship Application: ${internshipTitle}`
  )}&body=${encodeURIComponent(body)}`;
};


  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <Container className="hero-content">
          <IconBox variant="hero">
            <GraduationCap size={34} strokeWidth={2} />
          </IconBox>
          <Badge variant="hero">Master in-demand skills</Badge>
          <h1>Training & Internship</h1>
          <p className="hero-subtext">
            "Our Courses & Internship Program takes you from learning
            foundational skills to mastering advanced tech through hands-on
            projects, expert mentorship, and a real-world internship—so you
            become industry-ready and confident to launch your career."
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSehIqCJm6ITkjUJcu9djYG4H60Uku61Z4Wlg_naCjTLUTjqlQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
          <Button variant="hero" icon={<ArrowRight size={18}  />}>
            Enroll Now
          </Button>
          </a>
        </Container>
      </section>

      <section className="training-benefits-section">
        <h2>Program Benefits</h2>
        <p className="benefits-subtext">
          By enrolling in our program, you’ll gain essential skills,
          hands-on experience, and certifications that prepare you to succeed
          in the tech industry.
        </p>
        <div className="training-benefits-grid">
          {benefits.map((b) => (
            <Card key={b} variant="feature">
              <CheckCircle stroke="rgb(37, 176, 95)" size={18} />
              <span>{b}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="program-structure-new"  data-scroll="program-structure-new">
        <Container>
          <SectionHeader 
            badge="Your Path to success"
            title={<>Program <span className="structure-highlight">Structure</span></>}
            description="Our program is designed with your growth in mind. Here's how you'll progress from training to internship."
          />

          <div className="structure-grid">
            {programStructure.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} variant="structure">
                  <IconBox variant="structure">
                    <Icon size={28} />
                  </IconBox>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="catalog" data-scroll="courses">
        <Container>
          <SectionHeader 
            badge="Available Options"
            title="Our Courses"
            description="Choose the option that best fits your goals and schedule."
          />

          <div className="catalog-grid">
            {courses.map((item) => (
              <Card key={item.title} variant="catalog">
                <h3>{item.title}</h3>
                <p>
                  <FaRupeeSign size={"25px"} className="icon" /> {item.totalFee}
                </p>
                <p>
                  <CheckCircle className="icon" /> {item.enrollFee}
                </p>
                {item.duration && (
                  <p>
                    <Clock className="icon" /> Duration: {item.duration}
                  </p>
                )}
                <p>
                  <TrendingUp className="icon" /> {item.installments}
                </p>

                {item.includes && item.includes.length > 0 && (
                  <Button
                    variant="secondary"
                    style={{ marginTop: "10px" }}
                    onClick={() => openModal(item)}
                  >
                    View Courses
                  </Button>
                )}
                <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehIqCJm6ITkjUJcu9djYG4H60Uku61Z4Wlg_naCjTLUTjqlQ/viewform?usp=sharing&ouid=102811312275506082295"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  Enroll Now
                </Button>
                </a>
              </Card>
            ))}
          </div>

          {modalOpen && selectedCourse && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>{selectedCourse.title} - Courses Included</h3>
                <ul>
                  {selectedCourse.includes?.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="catalog" data-scroll="internships">
        <Container>
          <SectionHeader 
            title="Available Internships"
            description="Choose the option that best fits your goals and schedule."
            className="section-header-spacing"
          />

          <div className="catalog-grid">
            {internships.map((item) => (
              <Card key={item.title} variant="catalog">
                <h3>{item.title}</h3>
                <p>
                  <Clock className="icon" /> {item.duration}
                </p>
                <p>
                  <BookOpen className="icon" /> {item.level}
                </p>
                <p>
                  <DollarSign className="icon" /> {item.price}
                </p>
                <a
                  href={generateMailToLink(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary">Apply Now</Button>
                </a>          
              </Card>
            ))}
          </div>
        </Container>
      </section>

<section className="why-choose-flat-section"  data-scroll="why-choose-flat-section">
  <div className="why-choose-flat-container">
    <div className="why-choose-flat-header">
      <span className="why-choose-flat-badge">Why Choose Us</span>
      <h2 className="why-choose-flat-title">Key Benefits</h2>
      <p className="why-choose-flat-description">
        What sets our program apart and helps you succeed in the tech industry.
      </p>
    </div>

    <div className="why-choose-flat-grid">
      {features.map((feature) => {
        const IconComponent = feature.icon;
        return (
          <div key={feature.title} className="why-choose-flat-item">
            <IconComponent stroke="#072069" size={32} />
            <div>
              <h3 className="why-choose-flat-item-title">{feature.title}</h3>
              <p className="why-choose-flat-item-desc">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* <section className="training-cta-section">
  <div className="training-cta-container">
    <h2 className="training-cta-title">Ready to Join?</h2>
    <p className="training-cta-description">
      Enroll in our training + internship program and kickstart your tech career.
    </p>
    <Link to="/register" className="training-cta-button">
      <span>Apply Now</span>
      <span className="training-cta-arrow">→</span>
    </Link>
  </div>
</section> */}
 <section className="final-cta">
      {/* Decorative shapes */}
      <div className="cta-shape cta-shape-top" />
      <div className="cta-shape cta-shape-bottom" />

      <div className="cta-container">
        <h2 className="cta-title">Limited Seats Available!</h2>
        <p className="cta-subtitle">
          Start learning today. Prove your skills and get promoted to an
          internship. Our team will guide you through the next steps.
        </p>

        <div className="cta-grid">
          {/* Contact 1 */}
          <a href="tel:+9779766722920" className="cta-card">
            <div className="cta-icon mint">
              <Phone size={16} />
            </div>
            <div className="cta-text">
              <h3>Siddhartha Pathak</h3>
              <p>+977-9766722920</p>
            </div>
          </a>

          {/* Contact 2 */}
          <a href="tel:+9779867420560" className="cta-card accent">
            <div className="cta-icon accent">
              <Phone size={16} />
            </div>
            <div className="cta-text">
              <h3>Shubham Kr. Deo</h3>
              <p>+977-9766715666</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9766715768?text=I%20want%20to%20apply"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp"
          >
            <div className="cta-whatsapp-inner">
              <div className="cta-whatsapp-left">
                <div className="cta-whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <h3>Apply via WhatsApp</h3>
              </div>
              <div className="cta-arrow">
                <ArrowRight size={16} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    </>
  );
};

export default CoursesAndTraining;
