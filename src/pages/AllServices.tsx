import { ServiceHero } from "../components/OurServices/ServiceHero";
import { ServiceCard } from "../components/OurServices/ServiceCard";
import { ServiceEnd } from "../components/OurServices/ServiceEnd";
import { ServiceHowItWorks } from "../components/OurServices/ServiceHowItWorks";

export function AllServices() {
  return (
    <div className="space-y-24">
      <ServiceHero />
      <ServiceCard />
      <ServiceHowItWorks />
      <ServiceEnd />
    </div>
  );
}
