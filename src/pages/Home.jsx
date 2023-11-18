import Advantages from "../components/sections/home/Advantages";
import Hero from "../components/sections/home/Hero";
import HowToUse from "../components/sections/home/HowToUse";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Advantages />
      <HowToUse />
    </div>
  );
};

export default Home;
