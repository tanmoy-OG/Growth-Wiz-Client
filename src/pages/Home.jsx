import Hero from "../components/Hero";
import WhatWeOffer from "../components/WhatWeOffer";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-y-32">
        <Hero />
        <WhatWeOffer />
        <Faq />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default Home;
