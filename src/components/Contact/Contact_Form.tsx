import React from "react";
import type { FormEvent } from "react";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import "./Contact_Form.css";
import Badge from "../ui/Badge";
import { Button } from "../ui/button";
import IconBox from "../ui/IconBox";
import { PhoneCall } from "lucide-react";

const Contact_Form: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-content">
        <Badge variant="hero">Get in Touch</Badge>
        <h1 className="contact-hero-title">Contact Us </h1>
        <p className="contact-hero-description">Have questions or ready to start a project? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
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
                  <Mail size={28} />
                </IconBox>
                <div>
                  <strong>Support</strong>
                  <p>Support@leafclutchtech.com.np</p>
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
                  <Clock  width="28" height="28" fill="none" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="10"  strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /></Clock>
                </IconBox>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM NPT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" placeholder="Your Company" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="form-group">
                <label>Service Interested In</label>
                <select className="service-select">
                  <option value="">Select a service</option>
                  <option>Software Development</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>AI & Automation</option>
                  <option>Data Analysis</option>
                  <option>DevOps & Cloud</option>
                  <option>Training & Internship</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Project Details *</label>
                <textarea placeholder="Tell us about your project, goals, and any specific requirements..." />
              </div>
              <Button type="submit" variant="default" size="lg" style={{ width: '100%', marginTop: '1.5rem' }}>
                Send Message <Send size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Form;
