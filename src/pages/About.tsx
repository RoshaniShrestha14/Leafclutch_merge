import AboutAI from "../components/AboutUs/AboutAI";
import AboutFounders from "../components/AboutUs/AboutFounders";
import AboutMission from "../components/AboutUs/AboutMission";
import AboutTeam from "../components/AboutUs/AboutTeam";
import AboutValues from "../components/AboutUs/AboutValues";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import Starting from "../components/ui/Starting";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-background transition-colors duration-500">
      <Starting
        pageName="About Us"
        srcImage="https://img.freepik.com/premium-photo/about-us-information-info-company-presentation-internet-blue-computer-keyboard_770123-7082.jpg"
      />
      <WhoWeAre />
      <AboutMission />
      <AboutFounders />
      <AboutTeam />
      <AboutValues />
      <AboutAI />
    </div>
  );
};

export default AboutUs;