import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  FaStore,
  FaAd,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(-45deg, #0a0a1a, #111125, #0a0a1a);
  background-size: 400% 400%;
  animation: ${gradientFlow} 15s ease infinite;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Headline = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //   align-items: stretch;
  gap: 1rem;
  margin-top: 3rem;
`;

const FlexItem = styled(motion.div)`
  flex: 1 1 280px;
  max-width: 360px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: default;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(142, 45, 226, 0.5);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(142, 45, 226, 0.1) 0%,
      rgba(74, 0, 224, 0) 70%
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const IconWrap = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  color: white;
  font-size: 1.8rem;
  animation: ${float} 6s ease-in-out infinite;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const FloatingOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(142, 45, 226, 0.1) 0%,
    rgba(74, 0, 224, 0) 70%
  );
  filter: blur(40px);
  animation: ${fadeIn} 8s ease-in-out infinite alternate;
`;

const HomeSectionThree = () => {
  const edgePoints = [
    { icon: <FaStore />, text: "Shopify Partners" },
    { icon: <FaAd />, text: "$10M+ Managed Ad Spend" },
    { icon: <FaUsers />, text: "In-house UGC Network" },
    { icon: <FaGlobe />, text: "Global Fulfillment Ops" },
    { icon: <FaRocket />, text: "Instant Landing Page Builds" },
    { icon: <FaChartLine />, text: "End-to-End Growth Teams" },
  ];

  return (
    <Section>
      <FloatingOrbs>
        <Orb
          style={{
            width: "300px",
            height: "300px",
            top: "10%",
            left: "10%",
            animationDelay: "0s",
          }}
        />
        <Orb
          style={{
            width: "400px",
            height: "400px",
            bottom: "10%",
            right: "10%",
            animationDelay: "2s",
          }}
        />
      </FloatingOrbs>

      <Container>
        <Headline
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Why StackMargin? Because We’ve Been in the Trenches.
        </Headline>

        <Subheadline
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Most agencies sell theory. We bring proof. We’ve built and scaled our
          own brands to millions in revenue. We’re not guessing what works—we’re
          applying what already does.
        </Subheadline>

        <FlexWrapper>
          {edgePoints.map((item, index) => (
            <FlexItem
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03 }}
            >
              <IconWrap>{item.icon}</IconWrap>
              <Description>{item.text}</Description>
            </FlexItem>
          ))}
        </FlexWrapper>
      </Container>
    </Section>
  );
};

export default HomeSectionThree;
