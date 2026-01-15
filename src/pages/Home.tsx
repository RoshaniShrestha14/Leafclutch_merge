import Intro from "../components/Home/Intro";
import IntroOffer from "../components/Home/intro_offer";
import Technology from "../components/Home/Technology";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <IntroOffer></IntroOffer>
      <Technology></Technology>
    </div>
  )
}

export default Home

// export default function Home() {
//   return (
//     <div className="flex-1 h-[300px] flex items-center justify-center flex-col">
//       <h2>Careers(Job, Internship)</h2>
//       <h2>Others(Blog, Verify Certificate, Our project)</h2>
//     </div>
//   );
// }
