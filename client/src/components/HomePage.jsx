import React, { useRef } from "react";
import Card from "./utils/Card";
import AboutCard from "./utils/AboutCard";
import Testimonial from "./Testimonial";
import Footer from "./utils/Footer";
import NavBar from "./NavBar";
import Herotext from "./utils/Herotext";
import HomeHero2 from "./HomeHero2";
import OfferCard from "./utils/OfferCard";
import Description from "./utils/Description";
import { useScroll, motion } from "framer-motion";
import { useInView } from "framer-motion";

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

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const HomePage = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, root: container });
  return (
    <div className=" overflow-hidden w-full flex flex-col gap-5 bg-gradient-horizontal text-white ">
      <NavBar />

      <Herotext text={"Teach That Fuels influence"} />
      <Description
        text={
          "We create powerful narratives and forge impactful partnerships, redefining the standards of the Indian creator economy."
        }
      />

      <HomeHero2 />

      {/* <div className="w-full px-6 sm:px-10 mt-10 h-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      {/* <div ref={container} className="w-full mt-10 h-[80vh]  overflow-y-auto snap-y snap-mandatory scrollbar-hide ">
        {offerCardsData.map((card, index) => (
          <motion.div
          key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full  rounded-3xl py-8 h-[80vh] bg-red-600 flex snap-center justify-center items-center px-6 sm:px-10 mt-10"
          >

            <OfferCard
              key={index}
              title={card.title}
              leftImage={card.leftImage}
              rightImage={card.rightImage}
              items={card.items}
            />
          </motion.div>
        ))}
      </div> */}

      <div 
      ref={container}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      className="w-full relative  px-6  mt-10 flex flex-col snap-y snap-mandatory">
        {offerCardsData.map((card, index) => (
          // <motion.div
          //   key={index}
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
            // viewport={{ once: false, amount: 0.3 }}
          //   className="w-full rounded-3xl py-8 flex snap-center justify-center items-center px-6 sm:px-10 mt-10"
          // >
            <OfferCard
            key={index}
              title={card.title}
              leftImage={card.leftImage}
              rightImage={card.rightImage}
              items={card.items}
            />
          // </motion.div>
        ))}
      </div>

      <div className="w-full  h-full flex gap-6 flex-col px-6 sm:px-10 mt-10  ">
        <AboutCard className={`flex flex-col md:flex-row`} />
        <AboutCard className={`flex flex-col md:flex-row-reverse`} />
      </div>
      {/* <Form /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
