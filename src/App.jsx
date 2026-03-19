import React from 'react'
import Header from './component/SocialLinks'
import LandingSection from './component/LandingSection'
import ContactMeSection from './component/ContactMeSection';
import Footer from './component/Footer';
import Services from './component/KeyServices';
import HeroSection from './component/HeroSection';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const simpleFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,
     transition: { duration: 0.8 } },
};
function App(){
  return (
      <Box>
        <Header />
        <HeroSection />
        <MotionBox
          variants={simpleFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        <LandingSection />
        </MotionBox>
        <MotionBox
          variants={simpleFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        <ContactMeSection />
        </MotionBox>
        <Services />
        <Footer />
      </Box>
  );
}
export default App



