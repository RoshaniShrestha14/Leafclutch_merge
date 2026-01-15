import React from "react";
import "./Services.css";

interface Step {
  step: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { step: "01", title: "Discovery", description: "Understanding your needs and goals." },
  { step: "02", title: "Planning", description: "Creating a detailed roadmap and timeline." },
  { step: "03", title: "Development", description: "Building with agile methodology." },
  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support." },
];

export const ServiceHowItWorks: React.FC = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-header">
          <span className="how-badge">Our Process</span>
          <h2 className="how-title">How We Work</h2>
          <p className="how-description">
            A proven methodology that ensures project success.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((item) => (
            <div key={item.step} className="how-card">
              <div className="how-step">{item.step}</div>
              <h3 className="how-heading">{item.title}</h3>
              <p className="how-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// import React from "react";
// import { motion } from "framer-motion";
// import TimelineComponent from "./TimelineComponent";
// import IconBox from "../ui/IconBox";
// import { Search } from "lucide-react";

// const Process: React.FC = () => {
//   return (
//     <section
//       id="process"
//       className="py-24 relative overflow-hidden bg-[#f8fafc] dark:bg-slate-800 border-b"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-mint dark:border-mint dark:border text-xs font-bold uppercase tracking-wider mb-4"
//           >
//             <IconBox variant="structure" className="!m-0 !w-6 !h-6">
//               <Search className="w-4 h-4" />
//             </IconBox>
//             Our Process
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold mb-4 text-primary dark:text-white"
//           >
//             How We Work
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
//           >
//             A proven methodology that ensures project success.
//           </motion.p>
//         </div>

//         <TimelineComponent />
//       </div>
//     </section>
//   );
// };

// export const ServiceHowItWorks = Process;
