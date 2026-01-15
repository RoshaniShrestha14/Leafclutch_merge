import React from "react";
import { Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Pawan Chaudhary",
    role: "Technical & DevOps Head",
    linkedin: "https://www.linkedin.com/in/pawan-cdhry/",
    image: "https://i.postimg.cc/jdb4dkYK/pawan.jpg",
  },
  {
    name: "Shristi karki",
    role: "Social Media and Technical",
    linkedin: "https://www.linkedin.com/in/shristi-karki-388122391/",
    image: "https://i.postimg.cc/Kv2DvshM/shristi.png",
  },
  {
    name: "Bijay koirala",
    role: "consultant",
    linkedin: "https://www.linkedin.com/in/bijay-koirala-a98a0a260/",
    image: "https://i.postimg.cc/6q7L2D5y/bijay.jpg",
  },
  {
    name: "Siddhartha Pathak",
    role: "Data Science & AI",
    linkedin: "https://linkedin.com/in/siddharthapathak",
    image: "https://i.postimg.cc/jdb4dkY2/siddhartha.jpg",
  },
  {
    name: "Saurya Chaudhary",
    role: "Cyber security specialist",
    linkedin: "https://www.linkedin.com/in/saurya-chaudhary-ab680b243/",
    image: "https://i.postimg.cc/c4SB45G6/saurya.jpg",
  },
  {
    name: "Roshan Kumar Singh",
    role: "Backend & AI",
    linkedin: "https://www.linkedin.com/in/roshan-kumar-singh-60b68a253/",
    image: "https://i.postimg.cc/xjgPs3zD/roshan.jpg",
  },
  {
    name: "Ayush Kumar Thakur",
    role: "MERN Stack",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-thakur/",
    image: "https://i.postimg.cc/xT7WSrsY/Ayush-Thakur.jpg",
  },
  {
    name: "Aniket shah",
    role: "MERN Stack",
    linkedin: "https://www.linkedin.com/in/aniket-sah/",
    image: "https://i.postimg.cc/433LKBFN/aniket-shah.jpg",
  },
];

const AboutTeam: React.FC = () => {
  return (
    <section className="section-padding max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
      <h2 className="text-4xl font-heading font-bold text-primary">
        Our Team Members
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="space-y-4 text-center group">
            <div className="aspect-square overflow-hidden rounded-3xl border-2 border-transparent group-hover:border-accent transition-all shadow-md bg-muted">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1 px-1">
              <h4 className="font-bold text-[1.5rem] leading-tight text-primary dark:text-white">
                {member.name}
              </h4>
              <p className="text-[0.9rem] text-muted-foreground uppercase tracking-[0.1em] font-bold">
                {member.role}
              </p>
              <div className="pt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent text-[0.8rem] font-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
                >
                  <Linkedin className="w-3.5 h-3.5 mr-1.5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Link to="/intern-details">
          <button className="px-12 py-5 bg-primary text-white font-bold rounded-full hover:scale-105 transition-all flex items-center mx-auto space-x-3 uppercase tracking-[0.2em] text-base">
            <span>Our Intern Team</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutTeam;