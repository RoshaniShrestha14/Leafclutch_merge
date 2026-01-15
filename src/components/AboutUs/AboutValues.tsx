import React from "react";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";

const values = [
  {
    icon: <Heart className="text-accent" />,
    title: "Client-First Engineering",
    desc: "We prioritize understanding your unique challenges and crafting solutions that truly address your needs.",
  },
  {
    icon: <Lightbulb className="text-accent" />,
    title: "Innovation with Purpose",
    desc: "We embrace cutting-edge technologies while ensuring they serve practical business objectives.",
  },
  {
    icon: <Shield className="text-accent" />,
    title: "Quality Excellence",
    desc: "Every line of code, every solution we deliver meets the highest standards of quality and reliability.",
  },
  {
    icon: <Users className="text-accent" />,
    title: "Collaborative Partnership",
    desc: "We work alongside your team, fostering transparency and open communication throughout every project.",
  },
];

const AboutValues: React.FC = () => {
  return (
    <section className="section-padding bg-background relative transition-colors duration-500 border-t">
      <div className=" max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-4">
          <p className="text-mint font-bold uppercase tracking-[0.25em] text-base">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            What Drives Us Forward
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="p-8 bg-card border rounded-[2rem] text-left space-y-5 transition-all hover:-translate-y-2 hover:shadow-xl border-border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{val.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;