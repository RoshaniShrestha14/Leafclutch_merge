import React, { useState, useRef } from "react";
import type { FormEvent } from "react";
import { Send, AlertCircle, ChevronDown, Search, Check } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import "./Contact_Form.css";
import Badge from "../ui/Badge";
import IconBox from "../ui/IconBox";
import { Mail, PhoneCall, Clock } from "lucide-react";

/* ---- countries array EXACTLY as provided ---- */
const countries = [
  { code: "+93", iso: "AF", name: "Afghanistan" },
  { code: "+355", iso: "AL", name: "Albania" },
  { code: "+213", iso: "DZ", name: "Algeria" },
  { code: "+977", iso: "NP", name: "Nepal" },
  { code: "+91", iso: "IN", name: "India" },
  { code: "+1", iso: "US", name: "United States" },
  { code: "+44", iso: "GB", name: "United Kingdom" },
].sort((a, b) => a.name.localeCompare(b.name));

const Contact_Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryIso: "NP",
    service: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countries.find((c) => c.iso === formData.countryIso)!;

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery)
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && formData.phone.trim().length < 7) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const selectCountry = (iso: string) => {
    setFormData((prev) => ({ ...prev, countryIso: iso }));
    setIsDropdownOpen(false);
    setSearchQuery("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent("Course Inquiry");
    const body = encodeURIComponent(
      `Hello Leafclutch Team,

My name is ${formData.fullName} and I am reaching out regarding your courses.

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${selectedCountry.code} ${formData.phone || "N/A"}
Course Interested In: ${formData.service || "Not Selected"}

Sincerely,
${formData.fullName}`
    );

    const mailtoLink = `mailto:info@leafclutchtech.com.np?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <Badge variant="hero">Get in Touch</Badge>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Have questions or ready to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info */}
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
                  <PhoneCall size={28} />
                </IconBox>
                <div>
                  <strong>Phone</strong>
                  <p>+977-9766715666</p>
                </div>
              </div>

              <div className="contact-card">
                <IconBox variant="structure">
                  <Clock width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2"
                    />
                  </Clock>
                </IconBox>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM NPT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="error-text">
                      <AlertCircle size={16} /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="error-text">
                      <AlertCircle size={16} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone with Country Code */}
              <div className="form-group">
                <label>Phone Number</label>
                <div className="flex space-x-3 items-start relative">
                  <div className="relative w-[11rem]" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full h-[58px] px-4 rounded-2xl bg-secondary/30 border border-border flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <ReactCountryFlag
                          countryCode={selectedCountry.iso}
                          svg
                          style={{ width: "1.5rem" }}
                        />
                        <div className="text-left leading-tight">
                          <p className="text-sm font-bold">
                            {selectedCountry.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {selectedCountry.code}
                          </p>
                        </div>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-card border rounded-2xl shadow-xl z-50 overflow-hidden">
                        <div className="p-3 border-b flex items-center space-x-2">
                          <Search className="w-4 h-4" />
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm"
                          />
                        </div>

                        <div className="max-h-60 overflow-y-auto">
                          {filteredCountries.map((c) => (
                            <button
                              key={c.iso}
                              type="button"
                              onClick={() => selectCountry(c.iso)}
                              className={`w-full px-4 py-3 flex items-center justify-between ${
                                formData.countryIso === c.iso
                                  ? "bg-accent/10"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center space-x-4">
                                <ReactCountryFlag
                                  countryCode={c.iso}
                                  svg
                                  style={{ width: "1.5rem" }}
                                />
                                <div className="text-left">
                                  <p className="text-sm font-bold">{c.name}</p>
                                  <p className="text-xs opacity-60">{c.code}</p>
                                </div>
                              </div>
                              {formData.countryIso === c.iso && (
                                <Check className="w-4 h-4" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="9766715768"
                    className="flex-1 h-[58px] px-5 rounded-2xl bg-secondary/30 border"
                  />
                </div>
                {errors.phone && (
                  <p className="error-text">
                    <AlertCircle size={16} /> {errors.phone}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>Course Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="service-select"
                >
                  <option value="">Select a Course</option>
                  <option>Core Tech and Design</option>
                  <option>Data and AI program</option>
                  <option>DSA program</option>
                  <option>Programming Language</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact_Form;

// import React, { useState } from "react";
// import type { FormEvent } from "react";
// import { Send, AlertCircle } from "lucide-react";
// import "./Contact_Form.css";
// import Badge from "../ui/Badge";
// import IconBox from "../ui/IconBox";
// import { Mail, PhoneCall, Clock } from "lucide-react";

// const Contact_Form: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     service: "",
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});


//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     } else if (formData.fullName.trim().length < 2) {
//       newErrors.fullName = "Name must be at least 2 characters";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email address is required";
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (formData.phone.trim() && formData.phone.trim().length < 7) {
//       newErrors.phone = "Please enter a valid phone number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle input change
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrs = { ...prev };
//         delete newErrs[name];
//         return newErrs;
//       });
//     }
//   };

//   // Handle form submit
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const subject = encodeURIComponent("Course Inquiry");
//     const body = encodeURIComponent(
//       `Hello Leafclutch Team,

// My name is ${formData.fullName} and I am reaching out regarding your courses.

// Full Name: ${formData.fullName}
// Email: ${formData.email}
// Phone: ${formData.phone || "N/A"}
// Course Interested In: ${formData.service || "Not Selected"}

// Sincerely,
// ${formData.fullName}`
//     );

//     const mailtoLink = `mailto:info@leafclutchtech.com.np?subject=${subject}&body=${body}`;
//     window.open(mailtoLink, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="contact-hero-content">
//           <Badge variant="hero">Get in Touch</Badge>
//           <h1 className="contact-hero-title">Contact Us</h1>
//           <p className="contact-hero-description">
//             Have questions or ready to start a project? We'd love to hear from you.
//           </p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="contact-section">
//         <div className="contact-container">
//           {/* Contact Info */}
//           <div className="contact-info">
//             <h2>Contact Information</h2>
//             <div className="contact-cards">
//               <div className="contact-card">
//                 <IconBox variant="structure">
//                   <Mail size={28} />
//                 </IconBox>
//                 <div>
//                   <strong>General Inquiries</strong>
//                   <p>info@leafclutchtech.com.np</p>
//                 </div>
//               </div>

//               <div className="contact-card">
//                 <IconBox variant="structure">
//                   <Mail size={28} />
//                 </IconBox>
//                 <div>
//                   <strong>Careers</strong>
//                   <p>careers@leafclutchtech.com.np</p>
//                 </div>
//               </div>

//               <div className="contact-card">
//                 <IconBox variant="structure">
//                   <PhoneCall size={28} />
//                 </IconBox>
//                 <div>
//                   <strong>Phone</strong>
//                   <p>+977-9766715666</p>
//                 </div>
//               </div>

//               <div className="contact-card">
//                 <IconBox variant="structure">
//                   <Clock width="28" height="28" fill="none" viewBox="0 0 24 24">
//                     <circle cx="12" cy="12" r="10" strokeWidth="2" />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 6v6l4 2"
//                     />
//                   </Clock>
//                 </IconBox>
//                 <div>
//                   <strong>Hours</strong>
//                   <p>Mon - Fri: 9:00 AM - 6:00 PM NPT</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="contact-form-card">
//             <h2>Send Us a Message</h2>

//             <form onSubmit={handleSubmit}>
//               {/* Name & Email */}
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Full Name *</label>
//                   <input
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     type="text"
//                     placeholder="John Doe"
//                   />
//                   {errors.fullName && (
//                     <p className="error-text">
//                       <AlertCircle size={16} /> {errors.fullName}
//                     </p>
//                   )}
//                 </div>

//                 <div className="form-group">
//                   <label>Email Address *</label>
//                   <input
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="john@example.com"
//                   />
//                   {errors.email && (
//                     <p className="error-text">
//                       <AlertCircle size={16} /> {errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="form-group">
//                 <label>Phone Number</label>
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="+977-1234567890"
//                 />
//                 {errors.phone && (
//                   <p className="error-text">
//                     <AlertCircle size={16} /> {errors.phone}
//                   </p>
//                 )}
//               </div>

//               {/* Service */}
//               <div className="form-group">
//                 <label>Course Interested In</label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="service-select"
//                 >
//                   <option value="">Select a Course</option>
//                   <option>Core Tech and Design</option>
//                   <option>Data and AI program</option>
//                   <option>DSA program</option>
//                   <option>Programming Language</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="bg-primary text-white font-bold py-4 px-6 rounded-xl w-full flex items-center justify-center gap-2 hover:opacity-90 transition-all"
//               >
//                 Send Message <Send size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact_Form;
