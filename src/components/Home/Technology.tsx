import React from "react";
import { ShieldCheck, Zap, Users, Layers, Award, TrendingUp, Mail } from "lucide-react";
import "./Technology.css";
import { useNavigate } from "react-router-dom";
import IconBox from "../ui/IconBox";

const Technology: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="technology">
        <div className="tech-container">
          <div className="tech-left">
            <span className="tech-label">WHY LEAFCLUTCH</span>

            <h2>Technology Partner You Can Trust</h2>

            <p>
              We combine technical excellence with a deep understanding of business needs to deliver solutions that truly make a difference.
              Our commitment to quality, transparency, and client success sets
              us apart.
            </p>

            <div className="tech-stats">
              <div>
                <h3>5+</h3>
                <span>Projects Delivered</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Client Satisfaction</span>
              </div>
              <div>
                <h3>24/7</h3>
                <span>Support Available</span>
              </div>
            </div>
          </div>

          <div className="tech-right">
            <div className="tech-card">
              <ShieldCheck size={20} />
              <h4>Responsible AI</h4>
              <p>
                We prioritize ethical AI practices, ensuring transparency,
                fairness, and accountability in every solution we build.
              </p>
            </div>

            <div className="tech-card">
              <Zap size={20} />
              <h4>High Performance</h4>
              <p>
                Our solutions are optimized for speed and efficiency, delivering
                measurable improvements to your business operations.
              </p>
            </div>

            <div className="tech-card">
              <Users size={20} />
              <h4>Client-First Approach</h4>
              <p>
                We listen, understand, and tailor our solutions to your specific
                needs, ensuring complete satisfaction.
              </p>
            </div>

            <div className="tech-card">
              <Layers size={20} />
              <h4>Scalable Solutions</h4>
              <p>
                Built for growth, our systems scale seamlessly from startups to
                enterprise-level demands.
              </p>
            </div>

            <div className="tech-card">
              <Award size={20} />
              <h4>Expert Team</h4>
              <p>
                Our experienced engineers bring deep expertise across software,
                AI, data, and cloud technologies.
              </p>
            </div>

            <div className="tech-card">
              <TrendingUp size={20} />
              <h4>Proven Results</h4>
              <p>
                We’ve helped businesses achieve measurable growth and operational
                excellence across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="transform-section">
        <div className="transform-container">
          <div className="transform-left">
            <h2>Ready to <br/> Transform <br/> Your <br/> Business?</h2>
            <p>
              Let's discuss how our solutions can help you achieve your goals. Get a free consultation with our experts.
            </p>
            <div className="buttons">
              <button
                className="get-started"
                onClick={() => navigate("/contact")}
              >
                Get Started →
              </button>
              <button className="view-pricing">View Pricing</button>
            </div>
          </div>

          <div className="transform-center">
            <div className="qr-box">
              <img src="/Discord.png" alt="Discord QR" className="discord-qr" />
            </div>
          </div>

          <div className="transform-right">
            <div className="email-box">
               <IconBox variant="benefit"><Mail size={28} /></IconBox>
              <div className="email-content">
                <p className="email-label">Email us</p>
                <strong className="email-address">info@leafclutch.dev</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
