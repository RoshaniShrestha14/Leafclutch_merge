import React, { useState } from "react";
import type { FormEvent } from "react";
import { Send, AlertCircle } from "lucide-react";
import "./Contact_Form.css";
import Badge from "../ui/Badge";
import IconBox from "../ui/IconBox";
import { Mail, PhoneCall, Clock } from "lucide-react";

const Contact_Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});


  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  // Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent("Service Inquiry");
    const body = encodeURIComponent(
      `Hello Leafclutch Team,

My name is ${formData.fullName} and I am reaching out regarding your services.

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Service Interested In: ${formData.service || "Not Selected"}

Sincerely,
${formData.fullName}`
    );

    const mailtoLink = `mailto:info@leafclutchtech.com.np?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <Badge variant="hero">Get in Touch</Badge>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Have questions or ready to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <IconBox variant="structure">
                  <Mail size={28} />
                </IconBox>
                <div>
                  <strong>General Inquiries</strong>
                  <p>info@leafclutchtech.com.np</p>
                </div>
              </div>

              <div className="contact-card">
                <IconBox variant="structure">
                  <Mail size={28} />
                </IconBox>
                <div>
                  <strong>Careers</strong>
                  <p>careers@leafclutchtech.com.np</p>
                </div>
              </div>

              <div className="contact-card">
                <IconBox variant="structure">
                  <PhoneCall size={28} />
                </IconBox>
                <div>
                  <strong>Phone</strong>
                  <p>+977-9766715666</p>
                </div>
              </div>

              <div className="contact-card">
                <IconBox variant="structure">
                  <Clock width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2"
                    />
                  </Clock>
                </IconBox>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM NPT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="error-text">
                      <AlertCircle size={16} /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="error-text">
                      <AlertCircle size={16} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="+977-1234567890"
                />
                {errors.phone && (
                  <p className="error-text">
                    <AlertCircle size={16} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Service */}
              <div className="form-group">
                <label>Course Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="service-select"
                >
                  <option value="">Course Interested In</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>AI & Data Science</option>
                  <option>Data Analysis</option>
                  <option>Cyber Security</option>
                  <option>DevOps Solution</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary text-white font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Form;
