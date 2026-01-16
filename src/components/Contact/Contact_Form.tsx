import React, { useState, useRef } from "react";
import type { FormEvent } from "react";
import { Send, AlertCircle, ChevronDown, Search, Check } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import "./Contact_Form.css";
import Badge from "../ui/Badge";
import IconBox from "../ui/IconBox";
import { Mail, PhoneCall, Clock } from "lucide-react";

const countries = [
 { code: "+93", iso: "AF", name: "Afghanistan" },
  { code: "+355", iso: "AL", name: "Albania" },
  { code: "+213", iso: "DZ", name: "Algeria" },
  { code: "+1-684", iso: "AS", name: "American Samoa" },
  { code: "+376", iso: "AD", name: "Andorra" },
  { code: "+244", iso: "AO", name: "Angola" },
  { code: "+1-264", iso: "AI", name: "Anguilla" },
  { code: "+672", iso: "AQ", name: "Antarctica" },
  { code: "+1-268", iso: "AG", name: "Antigua and Barbuda" },
  { code: "+54", iso: "AR", name: "Argentina" },
  { code: "+374", iso: "AM", name: "Armenia" },
  { code: "+297", iso: "AW", name: "Aruba" },
  { code: "+61", iso: "AU", name: "Australia" },
  { code: "+43", iso: "AT", name: "Austria" },
  { code: "+994", iso: "AZ", name: "Azerbaijan" },
  { code: "+1-242", iso: "BS", name: "Bahamas" },
  { code: "+973", iso: "BH", name: "Bahrain" },
  { code: "+880", iso: "BD", name: "Bangladesh" },
  { code: "+1-246", iso: "BB", name: "Barbados" },
  { code: "+375", iso: "BY", name: "Belarus" },
  { code: "+32", iso: "BE", name: "Belgium" },
  { code: "+501", iso: "BZ", name: "Belize" },
  { code: "+229", iso: "BJ", name: "Benin" },
  { code: "+1-441", iso: "BM", name: "Bermuda" },
  { code: "+975", iso: "BT", name: "Bhutan" },
  { code: "+591", iso: "BO", name: "Bolivia" },
  { code: "+387", iso: "BA", name: "Bosnia and Herzegovina" },
  { code: "+267", iso: "BW", name: "Botswana" },
  { code: "+55", iso: "BR", name: "Brazil" },
  { code: "+246", iso: "IO", name: "British Indian Ocean Territory" },
  { code: "+1-284", iso: "VG", name: "British Virgin Islands" },
  { code: "+673", iso: "BN", name: "Brunei" },
  { code: "+359", iso: "BG", name: "Bulgaria" },
  { code: "+226", iso: "BF", name: "Burkina Faso" },
  { code: "+257", iso: "BI", name: "Burundi" },
  { code: "+855", iso: "KH", name: "Cambodia" },
  { code: "+237", iso: "CM", name: "Cameroon" },
  { code: "+1", iso: "CA", name: "Canada" },
  { code: "+238", iso: "CV", name: "Cape Verde" },
  { code: "+1-345", iso: "KY", name: "Cayman Islands" },
  { code: "+236", iso: "CF", name: "Central African Republic" },
  { code: "+235", iso: "TD", name: "Chad" },
  { code: "+56", iso: "CL", name: "Chile" },
  { code: "+86", iso: "CN", name: "China" },
  { code: "+61", iso: "CX", name: "Christmas Island" },
  { code: "+61", iso: "CC", name: "Cocos Islands" },
  { code: "+57", iso: "CO", name: "Colombia" },
  { code: "+269", iso: "KM", name: "Comoros" },
  { code: "+682", iso: "CK", name: "Cook Islands" },
  { code: "+506", iso: "CR", name: "Costa Rica" },
  { code: "+385", iso: "HR", name: "Croatia" },
  { code: "+53", iso: "CU", name: "Cuba" },
  { code: "+599", iso: "CW", name: "Curacao" },
  { code: "+357", iso: "CY", name: "Cyprus" },
  { code: "+420", iso: "CZ", name: "Czech Republic" },
  { code: "+243", iso: "CD", name: "Democratic Republic of the Congo" },
  { code: "+45", iso: "DK", name: "Denmark" },
  { code: "+253", iso: "DJ", name: "Djibouti" },
  { code: "+1-767", iso: "DM", name: "Dominica" },
  { code: "+1-809", iso: "DO", name: "Dominican Republic" },
  { code: "+670", iso: "TL", name: "East Timor" },
  { code: "+593", iso: "EC", name: "Ecuador" },
  { code: "+20", iso: "EG", name: "Egypt" },
  { code: "+503", iso: "SV", name: "El Salvador" },
  { code: "+240", iso: "GQ", name: "Equatorial Guinea" },
  { code: "+291", iso: "ER", name: "Eritrea" },
  { code: "+372", iso: "EE", name: "Estonia" },
  { code: "+251", iso: "ET", name: "Ethiopia" },
  { code: "+500", iso: "FK", name: "Falkland Islands" },
  { code: "+298", iso: "FO", name: "Faroe Islands" },
  { code: "+679", iso: "FJ", name: "Fiji" },
  { code: "+358", iso: "FI", name: "Finland" },
  { code: "+33", iso: "FR", name: "France" },
  { code: "+689", iso: "PF", name: "French Polynesia" },
  { code: "+241", iso: "GA", name: "Gabon" },
  { code: "+220", iso: "GM", name: "Gambia" },
  { code: "+995", iso: "GE", name: "Georgia" },
  { code: "+49", iso: "DE", name: "Germany" },
  { code: "+233", iso: "GH", name: "Ghana" },
  { code: "+350", iso: "GI", name: "Gibraltar" },
  { code: "+30", iso: "GR", name: "Greece" },
  { code: "+299", iso: "GL", name: "Greenland" },
  { code: "+1-473", iso: "GD", name: "Grenada" },
  { code: "+1-671", iso: "GU", name: "Guam" },
  { code: "+502", iso: "GT", name: "Guatemala" },
  { code: "+44-1481", iso: "GG", name: "Guernsey" },
  { code: "+224", iso: "GN", name: "Guinea" },
  { code: "+245", iso: "GW", name: "Guinea-Bissau" },
  { code: "+592", iso: "GY", name: "Guyana" },
  { code: "+509", iso: "HT", name: "Haiti" },
  { code: "+504", iso: "HN", name: "Honduras" },
  { code: "+852", iso: "HK", name: "Hong Kong" },
  { code: "+36", iso: "HU", name: "Hungary" },
  { code: "+354", iso: "IS", name: "Iceland" },
  { code: "+91", iso: "IN", name: "India" },
  { code: "+62", iso: "ID", name: "Indonesia" },
  { code: "+98", iso: "IR", name: "Iran" },
  { code: "+964", iso: "IQ", name: "Iraq" },
  { code: "+353", iso: "IE", name: "Ireland" },
  { code: "+44-1624", iso: "IM", name: "Isle of Man" },
  { code: "+972", iso: "IL", name: "Israel" },
  { code: "+39", iso: "IT", name: "Italy" },
  { code: "+225", iso: "CI", name: "Ivory Coast" },
  { code: "+1-876", iso: "JM", name: "Jamaica" },
  { code: "+81", iso: "JP", name: "Japan" },
  { code: "+44-1534", iso: "JE", name: "Jersey" },
  { code: "+962", iso: "JO", name: "Jordan" },
  { code: "+7", iso: "KZ", name: "Kazakhstan" },
  { code: "+254", iso: "KE", name: "Kenya" },
  { code: "+686", iso: "KI", name: "Kiribati" },
  { code: "+383", iso: "XK", name: "Kosovo" },
  { code: "+965", iso: "KW", name: "Kuwait" },
  { code: "+996", iso: "KG", name: "Kyrgyzstan" },
  { code: "+856", iso: "LA", name: "Laos" },
  { code: "+371", iso: "LV", name: "Latvia" },
  { code: "+961", iso: "LB", name: "Lebanon" },
  { code: "+266", iso: "LS", name: "Lesotho" },
  { code: "+231", iso: "LR", name: "Liberia" },
  { code: "+218", iso: "LY", name: "Libya" },
  { code: "+423", iso: "LI", name: "Liechtenstein" },
  { code: "+370", iso: "LT", name: "Lithuania" },
  { code: "+352", iso: "LU", name: "Luxembourg" },
  { code: "+853", iso: "MO", name: "Macau" },
  { code: "+389", iso: "MK", name: "Macedonia" },
  { code: "+261", iso: "MG", name: "Madagascar" },
  { code: "+265", iso: "MW", name: "Malawi" },
  { code: "+60", iso: "MY", name: "Malaysia" },
  { code: "+960", iso: "MV", name: "Maldives" },
  { code: "+223", iso: "ML", name: "Mali" },
  { code: "+356", iso: "MT", name: "Malta" },
  { code: "+692", iso: "MH", name: "Marshall Islands" },
  { code: "+222", iso: "MR", name: "Mauritania" },
  { code: "+230", iso: "MU", name: "Mauritius" },
  { code: "+262", iso: "YT", name: "Mayotte" },
  { code: "+52", iso: "MX", name: "Mexico" },
  { code: "+691", iso: "FM", name: "Micronesia" },
  { code: "+373", iso: "MD", name: "Moldova" },
  { code: "+377", iso: "MC", name: "Monaco" },
  { code: "+976", iso: "MN", name: "Mongolia" },
  { code: "+382", iso: "ME", name: "Montenegro" },
  { code: "+1-664", iso: "MS", name: "Montserrat" },
  { code: "+212", iso: "MA", name: "Morocco" },
  { code: "+258", iso: "MZ", name: "Mozambique" },
  { code: "+95", iso: "MM", name: "Myanmar" },
  { code: "+264", iso: "NA", name: "Namibia" },
  { code: "+674", iso: "NR", name: "Nauru" },
  { code: "+977", iso: "NP", name: "Nepal" },
  { code: "+31", iso: "NL", name: "Netherlands" },
  { code: "+687", iso: "NC", name: "New Caledonia" },
  { code: "+64", iso: "NZ", name: "New Zealand" },
  { code: "+505", iso: "NI", name: "Nicaragua" },
  { code: "+227", iso: "NE", name: "Niger" },
  { code: "+234", iso: "NG", name: "Nigeria" },
  { code: "+683", iso: "NU", name: "Niue" },
  { code: "+850", iso: "KP", name: "North Korea" },
  { code: "+1-670", iso: "MP", name: "Northern Mariana Islands" },
  { code: "+47", iso: "NO", name: "Norway" },
  { code: "+968", iso: "OM", name: "Oman" },
  { code: "+92", iso: "PK", name: "Pakistan" },
  { code: "+680", iso: "PW", name: "Palau" },
  { code: "+970", iso: "PS", name: "Palestine" },
  { code: "+507", iso: "PA", name: "Panama" },
  { code: "+675", iso: "PG", name: "Papua New Guinea" },
  { code: "+595", iso: "PY", name: "Paraguay" },
  { code: "+51", iso: "PE", name: "Peru" },
  { code: "+63", iso: "PH", name: "Philippines" },
  { code: "+64", iso: "PN", name: "Pitcairn" },
  { code: "+48", iso: "PL", name: "Poland" },
  { code: "+351", iso: "PT", name: "Portugal" },
  { code: "+1-787", iso: "PR", name: "Puerto Rico" },
  { code: "+974", iso: "QA", name: "Qatar" },
  { code: "+242", iso: "CG", name: "Republic of the Congo" },
  { code: "+262", iso: "RE", name: "Reunion" },
  { code: "+40", iso: "RO", name: "Romania" },
  { code: "+7", iso: "RU", name: "Russia" },
  { code: "+250", iso: "RW", name: "Rwanda" },
  { code: "+590", iso: "BL", name: "Saint Barthelemy" },
  { code: "+290", iso: "SH", name: "Saint Helena" },
  { code: "+1-869", iso: "KN", name: "Saint Kitts and Nevis" },
  { code: "+1-758", iso: "LC", name: "Saint Lucia" },
  { code: "+590", iso: "MF", name: "Saint Martin" },
  { code: "+508", iso: "PM", name: "Saint Pierre and Miquelon" },
  { code: "+1-784", iso: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "+685", iso: "WS", name: "Samoa" },
  { code: "+378", iso: "SM", name: "San Marino" },
  { code: "+239", iso: "ST", name: "Sao Tome and Principe" },
  { code: "+966", iso: "SA", name: "Saudi Arabia" },
  { code: "+221", iso: "SN", name: "Senegal" },
  { code: "+381", iso: "RS", name: "Serbia" },
  { code: "+248", iso: "SC", name: "Seychelles" },
  { code: "+232", iso: "SL", name: "Sierra Leone" },
  { code: "+65", iso: "SG", name: "Singapore" },
  { code: "+1-721", iso: "SX", name: "Sint Maarten" },
  { code: "+421", iso: "SK", name: "Slovakia" },
  { code: "+386", iso: "SI", name: "Slovenia" },
  { code: "+677", iso: "SB", name: "Solomon Islands" },
  { code: "+252", iso: "SO", name: "Somalia" },
  { code: "+27", iso: "ZA", name: "South Africa" },
  { code: "+82", iso: "KR", name: "South Korea" },
  { code: "+211", iso: "SS", name: "South Sudan" },
  { code: "+34", iso: "ES", name: "Spain" },
  { code: "+94", iso: "LK", name: "Sri Lanka" },
  { code: "+249", iso: "SD", name: "Sudan" },
  { code: "+597", iso: "SR", name: "Suriname" },
  { code: "+47", iso: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "+268", iso: "SZ", name: "Swaziland" },
  { code: "+46", iso: "SE", name: "Sweden" },
  { code: "+41", iso: "CH", name: "Switzerland" },
  { code: "+963", iso: "SY", name: "Syria" },
  { code: "+886", iso: "TW", name: "Taiwan" },
  { code: "+992", iso: "TJ", name: "Tajikistan" },
  { code: "+255", iso: "TZ", name: "Tanzania" },
  { code: "+66", iso: "TH", name: "Thailand" },
  { code: "+228", iso: "TG", name: "Togo" },
  { code: "+690", iso: "TK", name: "Tokelau" },
  { code: "+676", iso: "TO", name: "Tonga" },
  { code: "+1-868", iso: "TT", name: "Trinidad and Tobago" },
  { code: "+216", iso: "TN", name: "Tunisia" },
  { code: "+90", iso: "TR", name: "Turkey" },
  { code: "+993", iso: "TM", name: "Turkmenistan" },
  { code: "+1-649", iso: "TC", name: "Turks and Caicos Islands" },
  { code: "+688", iso: "TV", name: "Tuvalu" },
  { code: "+1-340", iso: "VI", name: "U.S. Virgin Islands" },
  { code: "+256", iso: "UG", name: "Uganda" },
  { code: "+380", iso: "UA", name: "Ukraine" },
  { code: "+971", iso: "AE", name: "United Arab Emirates" },
  { code: "+44", iso: "GB", name: "United Kingdom" },
  { code: "+1", iso: "US", name: "United States" },
  { code: "+598", iso: "UY", name: "Uruguay" },
  { code: "+998", iso: "UZ", name: "Uzbekistan" },
  { code: "+678", iso: "VU", name: "Vanuatu" },
  { code: "+379", iso: "VA", name: "Vatican" },
  { code: "+58", iso: "VE", name: "Venezuela" },
  { code: "+84", iso: "VN", name: "Vietnam" },
  { code: "+681", iso: "WF", name: "Wallis and Futuna" },
  { code: "+212", iso: "EH", name: "Western Sahara" },
  { code: "+967", iso: "YE", name: "Yemen" },
  { code: "+260", iso: "ZM", name: "Zambia" },
  { code: "+263", iso: "ZW", name: "Zimbabwe" },
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
  React.useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

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
  <div className="flex flex-col sm:flex-row sm:space-x-3 items-start sm:items-center relative">
    {/* Country Dropdown */}
    <div className="w-full sm:w-[11rem] mb-3 sm:mb-0 relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full h-[58px] px-4 rounded-2xl bg-secondary/30 border border-border flex items-center justify-between"
      >
       <div className="flex w-full flex-col sm:flex-row sm:items-center sm:space-x-3">
  <ReactCountryFlag
    countryCode={selectedCountry.iso}
    svg
    style={{ width: "1.5rem", height: "1.5rem" }}
  />
  <div className="flex justify-between sm:flex-col sm:justify-start w-full">
    <p className="text-sm font-bold truncate">{selectedCountry.name}</p>
    <p className="text-xs text-muted-foreground">{selectedCountry.code}</p>
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
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c) => (
                <button
                  key={c.iso}
                  type="button"
                  onClick={() => selectCountry(c.iso)}
                  className={`w-full px-4 py-3 flex items-center justify-between ${
                    formData.countryIso === c.iso ? "bg-accent/10" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <ReactCountryFlag countryCode={c.iso} svg style={{ width: "1.5rem" }} />
                    <div className="text-left">
                      <p className="text-sm font-bold">{c.name}</p>
                      <p className="text-xs opacity-60">{c.code}</p>
                    </div>
                  </div>
                  {formData.countryIso === c.iso && <Check className="w-4 h-4" />}
                </button>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-muted-foreground">No results found</p>
            )}
          </div>
        </div>
      )}
    </div>

    {/* Phone Input */}
    <input
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      type="text"
      placeholder="9766715768"
      className="w-full sm:flex-1 h-[58px] px-5 rounded-2xl bg-secondary/30 border"
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
