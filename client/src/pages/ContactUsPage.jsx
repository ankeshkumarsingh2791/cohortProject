import React from 'react';
import Form from '../components/utils/Form';
import { motion } from 'framer-motion';
import useBreakpointValue from '../hooks/useBreakpointValue'; 
import { Helmet } from "react-helmet";

const ContactUsPage = () => {
  const xOffset = useBreakpointValue();

  return (
    <>
    <Helmet>
        <title>Contact Zenifo | Let’s Build Something Great</title>
        <meta
          name="description"
          content="Get in touch with Zenifo for custom tech solutions, SEO services, or digital consultations. We’re here to help you grow online."
        />
      </Helmet>
    <div className="w-full bg-gradient-horizontal text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: xOffset }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="m-auto w-full sm:w-[90%] md:w-[80%] flex flex-col sm:flex-row gap-10 mt-20 md:mt-0 md:min-h-screen md:justify-center md:items-center"
      >
        <div className="sm:w-1/2 flex md:pl-20 flex-col items-start gap-8 text-center sm:text-left">
          <div className="text-3xl sm:text-lg font-bold md:text-7xl m-auto">
            <h1>Pleasure bumpin’ into you!</h1>
          </div>
          <div className="font-bold w-80 m-auto sm:m-0">
            For general enquiries, please fill out the form to{' '}
            <span className="text-blue-500">get in touch.</span>
          </div>
        </div>
        <div className="sm:w-1/2 md:pr-20 text-white flex px-6 mt-10 mb-10">
          <Form />
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default ContactUsPage;
