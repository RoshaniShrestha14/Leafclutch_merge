import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Rocket, Zap, Shield, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./intro.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Intro: React.FC = () => {
  return (
    <section className="home-intro">
      <motion.div
        className="intro-left"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.span
          className="intro-badge"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} />
          Empowering Business Growth with AI
        </motion.span>

        <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
          We build  <br /> intelligent <br/>
          <span className="highlight">Software & AI.</span>
        </motion.h1>

        <motion.p variants={fadeUp} transition={{ duration: 0.7 }}>
          Leafclutch Technologies delivers mission-critical engineering and <b>responsible AI automation</b> tailored for enterprise scale.
        </motion.p>

        <motion.div
          className="intro-buttons"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <Link to="/contact" className="intro-btn-primary">
            Get Started →
          </Link>
          <Link to="/others/our-projects" className="intro-btn-secondary">
            View Our Work
          </Link>
        </motion.div>

        <motion.div className="intro-features" variants={stagger}>
          <motion.span variants={fadeUp}>
            <Shield stroke="#1d72b8" strokeWidth={2} size={16} /> Enterprise-ready
          </motion.span>
          <motion.span variants={fadeUp}>
            <Zap stroke="#1d72b8" strokeWidth={2} size={16} /> High Performance
          </motion.span>
          <motion.span variants={fadeUp}>
            <Sparkles stroke="#1d72b8" strokeWidth={2} size={16} /> Responsible AI
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="intro-right"
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="intro-card">
          <div className="intro-card-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="three-line">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="intro-card-body">
            <div className="performance floating">
              <div className="manual-icon-box">
                <Zap stroke="currentColor" strokeWidth={2} size={20} />
              </div>
              <div className="text-vertical">
                <span>Performance</span>
                <strong>+98%</strong>
              </div>
            </div>

            <div className="chart"></div>

            <div className="uptime floating delay">
              <div className="manual-icon-box">
                <Shield  stroke="currentColor" strokeWidth={2} size={20} />
              </div>
              <div className="text-vertical">
                <span>Uptime</span>
                <strong>99.9%</strong>
              </div>
            </div>
          </div>


          <div className="intro-card-footer">
            <div className="bar dark"></div>
            <div className="bar blue"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
