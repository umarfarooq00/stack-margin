import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaBoxOpen, FaChartLine, FaLightbulb } from "react-icons/fa";

// Styled components
const AboutContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #0f0c29;
  color: white;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionText = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  text-align: center;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 1.5rem;
  }
`;

const FounderCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(142, 45, 226, 0.3);
  backdrop-filter: blur(10px);
  max-width: 500px;
  margin: 0 auto;
`;

const FounderImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  padding: 3px;
  margin: 0 auto 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #0f0c29;
  }
`;

const FounderName = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  color: white;
`;

const FounderTitle = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
`;

const FounderBio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ExpertiseCard = styled(motion.div)`
  background: rgba(142, 45, 226, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(142, 45, 226, 0.2);
`;

const ExpertiseIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #8e2de2;
`;

const ExpertiseTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const AboutUsSection = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Real Founders. Real Brands. Real Growth.
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We know how to scale, because we've done it—again and again.
          </SectionText>
        </SectionHeader>

        <AboutContent>
          <AboutText>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              StackMargin was born out of necessity—our own. We were building e-commerce brands long before offering services to others.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              That's why our team isn't just marketers. We're builders, media buyers, logistics experts, and creative thinkers.
            </motion.p>
          </AboutText>

          <FounderCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FounderImage>
              {/* Replace with your actual image */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                alt="Founder"
              />
            </FounderImage>
            <FounderName>Alex Johnson</FounderName>
            <FounderTitle>Co-Founder & Growth Strategist</FounderTitle>
            <FounderBio>
              "After scaling 3 brands to 7-figures, I created StackMargin to help other founders avoid the costly mistakes we made."
            </FounderBio>
          </FounderCard>
        </AboutContent>

        <ExpertiseGrid>
          <ExpertiseCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExpertiseIcon>
              <FaRocket />
            </ExpertiseIcon>
            <ExpertiseTitle>Brand Scaling</ExpertiseTitle>
          </ExpertiseCard>

          <ExpertiseCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ExpertiseIcon>
              <FaBoxOpen />
            </ExpertiseIcon>
            <ExpertiseTitle>Logistics</ExpertiseTitle>
          </ExpertiseCard>

          <ExpertiseCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <ExpertiseIcon>
              <FaChartLine />
            </ExpertiseIcon>
            <ExpertiseTitle>Media Buying</ExpertiseTitle>
          </ExpertiseCard>

          <ExpertiseCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <ExpertiseIcon>
              <FaLightbulb />
            </ExpertiseIcon>
            <ExpertiseTitle>Creative Strategy</ExpertiseTitle>
          </ExpertiseCard>
        </ExpertiseGrid>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutUsSection;