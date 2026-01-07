import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Linkedin,
  AlertCircle,
  ChevronRight,
} from "lucide-react";
import { DEMO_INTERNS } from "./constants";
import type { Intern, SearchStatus } from "./types";

const heroBackground: React.CSSProperties = {
  backgroundImage: `
  linear-gradient(
    rgba(9, 5, 54, 0.55),
    rgba(5, 4, 46, 0.85)
  ),
  url("/bg.webp")
`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [result, setResult] = useState<Intern | null>(null);
  const [searchVal, setSearchVal] = useState(searchTerm);

  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      if (!searchTerm.trim()) return;

      setStatus("searching");

      setTimeout(() => {
        const term = searchTerm.toLowerCase().trim();
        const intern = DEMO_INTERNS.find(
          (i) =>
            i.id.toLowerCase() === term ||
            i.email.toLowerCase() === term ||
            i.name.toLowerCase().includes(term)
        );

        if (intern) {
          setResult(intern);
          setStatus("found");
        } else {
          setResult(null);
          setStatus("not_found");
          setSearchVal(searchTerm);
        }
      }, 600);
    },
    [searchTerm]
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center transition-colors duration-300"
      style={heroBackground}
    >
      <main className="bg-white md:rounded-2xl dark:bg-background md:m-40 md:mt-20 md:mb-20 opacity-[1] flex flex-col items-center py-12 px-4 sm:py-20">
        <div className="w-full max-w-3xl text-center space-y-6">
          <motion.div
            className="space-y-2"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Verify <span className="gradient-text">Internship</span>{" "}
              Credentials
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto">
              Confirm the validity of Leafclutch certificates. Just enter the
              ID, email, or name below.
            </p>
          </motion.div>

          <form
            onSubmit={handleSearch}
            className="relative group max-w-2xl mx-auto mt-8"
          >
            <motion.div
              className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
              animate={{
                rotate: status === "searching" ? [0, 360] : 0,
              }}
              transition={{
                repeat: status === "searching" ? Infinity : 0,
                duration: 1,
              }}
            >
              <Search
                className={`w-5 h-5 transition-colors ${
                  status === "searching"
                    ? "text-primary animate-pulse"
                    : "text-muted-foreground"
                }`}
              />
            </motion.div>
            <input
              type="text"
              className=" w-full py-4 pl-12 pr-32 text-lg rounded-lg shadow-xl
                            bg-background text-foreground
                            border border-input
                            placeholder:text-muted-foreground
                            focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring
                            transition-colors"
              placeholder="Enter ID, email, or full name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <motion.button
              type="submit"
              disabled={status === "searching"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="absolute right-2 inset-y-2 px-6 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
            >
              {status === "searching" ? "Verifying..." : "Verify"}
            </motion.button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            {[
              "Official Verification",
              "Blockchain Verified",
              "Global Standards",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx }}
              >
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <section
          className="mt-16 w-full max-w-2xl mx-auto"
          style={{ minHeight: "400px" }}
        >
          <div className="relative w-full" style={{ minHeight: "400px" }}>
            <AnimatePresence mode="wait">
              {status === "found" && result && (
                <motion.div
                  key="found"
                  className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start bg-card text-foreground border border-border rounded-3xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Left side */}
                  <div className="flex flex-col items-center gap-4 md:gap-5 shrink-0 w-full md:w-auto">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-full blur opacity-25 bg-primary/40 group-hover:opacity-50 transition duration-1000"></div>
                      <img
                        src={result.photo}
                        alt={result.name}
                        className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-card bg-muted"
                      />
                    </div>
                    <motion.div
                      className="flex items-center justify-center p-2.5 rounded-full bg-success/10 border border-success/20 text-success shadow-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ShieldCheck className="w-6 sm:w-7 h-6 sm:h-7" />
                    </motion.div>
                  </div>

                  {/* Right side */}
                  <div className="flex-grow w-full flex flex-col gap-3 sm:gap-4">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                        <span className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase">
                          Verified Intern
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-mono">
                          {result.id}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
                        {result.name}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
                        {result.post}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-4 py-2 sm:py-3 border-y border-border/60">
                      <div className="space-y-1">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                          Joining Date
                        </p>
                        <p className="font-semibold text-sm sm:text-base">
                          {result.joiningDate}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                          Ending Date
                        </p>
                        <p className="font-semibold text-sm sm:text-base">
                          {result.endingDate || "Present"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
                      <motion.a
                        href={result.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#0077b5] text-white py-2 px-4 rounded-lg font-semibold text-sm sm:text-base"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Linkedin className="w-4 h-4" /> LinkedIn Profile
                      </motion.a>

                      {result.endingDate &&
                        result.endingDate.toLowerCase() !== "present" && (
                          <motion.button
                            className="flex-1 flex items-center justify-center gap-2 border border-border py-2 px-4 rounded-lg font-semibold bg-background text-foreground hover:bg-muted text-sm sm:text-base"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Download Certificate
                          </motion.button>
                        )}
                    </div>
                  </div>
                </motion.div>
              )}

              {status === "not_found" && (
                <motion.div
                  key="not-found"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-border rounded-3xl bg-card/30"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-destructive/10 p-4 rounded-full mb-4">
                    <AlertCircle className="w-12 h-12 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Certificate Not Found
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    We couldn't find any record matching "
                    <span className="text-foreground font-semibold">
                      {searchVal}
                    </span>
                    ". Please double-check the ID, name, or email and try again.
                  </p>
                  <motion.button
                    onClick={() => {
                      setSearchTerm("");
                      setStatus("idle");
                    }}
                    className="mt-6 text-primary font-semibold hover:underline flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear search and try again{" "}
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              )}

              {status === "idle" && (
                <motion.div
                  key="idle"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-40"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <div className="p-8 rounded-full border-2 border-dashed border-border mb-4 ">
                    <Search className="w-16 h-16" />
                  </div> */}
                  <div className="relative p-8 rounded-full mb-4">
                    {/* Rotating dashed border */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-border animate-spin-slow"></div>

                    {/* Static icon */}
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Search className="w-16 h-16" />
                    </div>
                  </div>

                  <p className="text-lg">Waiting for your search...</p>
                </motion.div>
              )}

              {status === "searching" && (
                <motion.div
                  key="searching"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="p-8 rounded-full border-2 border-dashed border-border mb-4">
                    <Search className="w-16 h-16" />
                  </div>
                  <p className="text-lg">Searching...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
