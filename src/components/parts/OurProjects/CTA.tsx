import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 text-center bg-primary dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground dark:text-white mb-6 transition-colors">
          Ready to Start Your Project?
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-primary-foreground/80 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors">
          Let's discuss how we can help bring your vision to life.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg bg-card text-primary dark:bg-[#4698eb] dark:text-white hover:bg-background dark:hover:bg-[#4698eb] transition-colors shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
