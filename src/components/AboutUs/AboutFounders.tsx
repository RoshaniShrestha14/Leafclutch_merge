import React from "react";
import { Mail, Linkedin, Globe } from "lucide-react";

const AboutFounders: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/50 dark:bg-secondary/20">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-heading font-bold text-primary">
            Founders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A dedicated group of AI engineers, developers, and automation
            specialists committed to transforming how businesses operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 text-left group">
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-square shadow-xl bg-muted">
              <img
                src="https://i.postimg.cc/jdb4dkY2/siddhartha.jpg"
                alt="Siddhartha Pathak"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4 px-2">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  Siddhartha Pathak
                </h3>
                <p className="text-muted-foreground font-medium">
                  Co-Founder & CTO
                </p>
              </div>
              <div className="flex space-x-5">
                <Mail className="w-5 h-5 text-accent cursor-pointer hover:scale-110 transition-transform" />
                <a
                  href="https://linkedin.com/in/siddharthapathak"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-accent cursor-pointer hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://siddharthapathak.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 text-accent cursor-pointer hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left group">
            <div className="relative overflow-hidden rounded-[2.5rem] aspect-square shadow-xl bg-muted">
              <img
                src="https://i.postimg.cc/pdFmjRDx/shubham.jpg"
                alt="Shubham Kumar Deo"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4 px-2">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  Shubham Kumar Deo
                </h3>
                <p className="text-muted-foreground font-medium">
                  Co-Founder & CEO
                </p>
              </div>
              <div className="flex space-x-5">
                <Mail className="w-5 h-5 text-accent cursor-pointer hover:scale-110 transition-transform" />
                <a
                  href="https://www.linkedin.com/in/shubham-kumar-deo-7048ab29b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-accent cursor-pointer hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;