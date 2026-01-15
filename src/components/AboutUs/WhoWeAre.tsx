import React from "react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "10+", label: "Team Members" },
  { value: "2", label: "Countries Served" },
];

const WhoWeAre: React.FC = () => {
  return (
    <section className="section-padding bg-background relative transition-colors duration-500 border-b">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-mint font-bold uppercase tracking-widest text-sm">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary leading-[1.1]">
              A Team of Passionate <br /> Technologists
            </h1>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <p>
                Founded with a vision to bridge the gap between cutting-edge
                technology and practical business needs, Leafclutch Technologies
                Pvt. Ltd. has grown into a trusted partner for organizations
                worldwide.
              </p>
              <p>
                Our diverse team brings together expertise in software
                engineering, artificial intelligence, data science, and cloud
                infrastructure. We combine technical excellence with deep
                industry knowledge to deliver solutions that create real value.
              </p>
              <p>
                From startups seeking their first product to enterprises
                modernizing legacy systems, we've helped organizations of all
                sizes achieve their digital transformation goals.
              </p>
            </div>
          </div>

          <div className="bg-secondary/40 border border-border p-12 rounded-[2.5rem] grid grid-cols-2 gap-y-12 gap-x-8 text-center shadow-sm backdrop-blur-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;