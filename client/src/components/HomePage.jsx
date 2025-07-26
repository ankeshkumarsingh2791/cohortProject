import React, { useRef } from "react";
import Testimonial from "./Testimonial";
import Herotext from "./utils/Herotext";
import HomeHero2 from "./HomeHero2";
import OfferCard from "./utils/OfferCard";
import Description from "./utils/Description";
import { useInView } from "framer-motion";
import StatsSection from "./StatsSection";
import InfoSection from "./InfoSection";

const offerCardsData = [
  {
    title: "Tech Consulting",
    leftImage: "/Software.svg",
    rightImage: "/Offer1.svg",
    items: [
      { text: "Web Site Development" },
      { text: "Seo Optimization" },
      { text: "Android & Ios Development" },
      { text: "Software Development" },

    ],
  },
  {
    title: "Social Media Marketing",
    leftImage: "/influencer 1.svg",
    rightImage: "/Rectangle 23.svg",
    items: [
      { text: "Influencer collaboration" },
      { text: "Brand Awareness" },
      { text: "Targeted campaigns on Facebook" },
    ],
  },
 
];


const HomePage = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, root: container });
  return (
    <div className=" overflow-hidden w-full flex flex-col gap-y-15 bg-gradient-horizontal text-white">
      <Herotext text={"Taech That Fuels influence"} />
      <Description
        text={
          "We create powerful narratives and forge impactful partnerships, redefining the standards of the Indian creator economy."
        }
      />
      <StatsSection/>
      <HomeHero2 />

      <div 
      ref={container}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="w-full space-y-6 relative  px-6  mt-10 flex flex-col snap-y snap-mandatory">
        {offerCardsData.map((card, index) => (
            <OfferCard
            key={index}
              title={card.title}
              leftImage={card.leftImage}
              rightImage={card.rightImage}
              items={card.items}
            />
        ))}
      </div>
      <InfoSection/>
      <Testimonial />
    </div>
  );
};

export default HomePage;
