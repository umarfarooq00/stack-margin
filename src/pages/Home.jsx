import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import HomeSectionTwo from "./HomeSections/HomeSectionTwo";
import HomeSectionThree from "./HomeSections/HomeSectionThree";
import { Link } from "react-router-dom";

const gradientBackground = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

const HeroContainer = styled.section`
  height: auto;
  width: 100%;
  padding-block: 70px;
  overflow: hidden;
  display: flex;
  align-items: center;
  // z-index: 2;
  justify-content: center;
  background: linear-gradient(-45deg, #0f0c29, #1a1a2e, #16213e, #1a1a2e);
  background-size: 400% 400%;
  animation: ${gradientBackground} 15s ease infinite;
  color: white;

@media screen and (max-width: 767px) {
  padding-block: 50px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  padding-inline: 2rem;
  box-sizing: border-box;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 767px) {
  padding-inline: 1rem;
  gap: 1rem;
  }
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
   @media screen and (max-width: 767px) {
  font-size: clamp(2rem, 5vw, 5rem);
  text-align: center;
  }
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  max-width: 700px;
  line-height: 1.6;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
   @media screen and (max-width: 767px) {
  font-size: clamp(1rem, 2vw, 1.5rem);
  text-align: center;
  }
`;

const CTAWrapper = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
   @media screen and (max-width: 767px) {
 margin-top: 1rem;
  }
`;

const PrimaryCTA = styled(motion.a)`
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 10px 20px rgba(74, 0, 224, 0.3);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(74, 0, 224, 0.4);
  }
     @media screen and (max-width: 450px) {
  width: 100%;
  justify-content: center;
  }
`;

const SecondaryCTA = styled(motion.a)`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(45deg, #8e2de2, #4a00e0);
    transform: translateY(-3px);
  }
 @media screen and (max-width: 450px) {
  width: 100%;
  justify-content: center;
  }
  
`;

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <Headline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Don't Just Build Brands.
            <br />
            We Scale Them.
          </Headline>

          <Subheadline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            We're the e-commerce force behind high-converting stores, viral
            creatives, and 8-figure growth. Built by founders, for founders.
          </Subheadline>

          <CTAWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <PrimaryCTA
              as={Link}
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk Growth <FaArrowRight />
            </PrimaryCTA>

            <SecondaryCTA
              as={Link}
              to="/work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Services <FaArrowRight />
            </SecondaryCTA>
          </CTAWrapper>
        </ContentWrapper>
      </HeroContainer>

      <HomeSectionTwo />
      <HomeSectionThree />
    </>
  );
};

export default Home;
