import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaRocket, FaFilm, FaWarehouse } from "react-icons/fa";

const secondFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const gradientFlow = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const Section = styled.section`
  padding: 10rem 2rem;
  position: relative;
  background: linear-gradient(-45deg, #0a0a1a, #111125, #0a0a1a);
  background-size: 400% 400%;
  animation: ${gradientFlow} 20s ease infinite;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Headline = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  text-align: center;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
`;

const Subheadline = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 5rem;
  line-height: 1.8;
`;

const PillarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const PillarCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px);
  border-radius: 24px;
  padding: 3rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -30%;
    width: 160%;
    height: 160%;
    background: radial-gradient(
      circle at top left,
      rgba(142, 45, 226, 0.2),
      transparent
    );
    transform: rotate(25deg);
    z-index: -1;
    filter: blur(60px);
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(142, 45, 226, 0.3);
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.4);
  }
`;

const PillarIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: white;
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  margin-bottom: 2rem;
  animation: ${secondFloat} 6s ease-in-out infinite;
`;

// const PillarTitle = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: #f5f8f4;
//   margin-bottom: 1rem
// `;

const PillarTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const PillarDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.7;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(142, 45, 226, 0.1),
    rgba(74, 0, 224, 0)
  );
  filter: blur(50px);
  animation: ${pulse} 10s ease-in-out infinite;
  z-index: 0;
`;

const HomeSectionTwo = () => {
  const pillars = [
    {
      icon: <FaRocket />,
      title: "Paid Media Mastery",
      description:
        "Meta, TikTok, Google, Snapchat—wherever attention flows, we turn it into revenue.",
    },
    {
      icon: <FaFilm />,
      title: "Creative That Converts",
      description:
        "Scroll-stopping UGC, direct-response ad scripts, and powerful video editing—all under one roof.",
    },
    {
      icon: <FaWarehouse />,
      title: "Infrastructure & Fulfillment",
      description:
        "With our own warehouse and vetted Chinese supply chains, we move faster, cheaper, and smarter.",
    },
  ];

  return (
    <Section>
      <Orb
        style={{
          width: "400px",
          height: "400px",
          top: "-100px",
          left: "-100px",
          animationDelay: "0s",
        }}
      />
      <Orb
        style={{
          width: "300px",
          height: "300px",
          bottom: "-50px",
          right: "-50px",
          animationDelay: "2s",
        }}
      />
      <Orb
        style={{
          width: "500px",
          height: "500px",
          top: "40%",
          right: "20%",
          animationDelay: "4s",
        }}
      />

      <Container>
        <Headline
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          A Full-Stack Growth Engine for DTC Brands
        </Headline>

        <Subheadline
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          At StackMargin, we don't outsource success—we build it. From idea to
          scale, we provide the infrastructure, strategy, and execution that
          turns ambitious founders into industry leaders.
        </Subheadline>

        <PillarsContainer>
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.04 }}
            >
              <PillarIcon>{pillar.icon}</PillarIcon>
              <PillarTitle>{pillar.title}</PillarTitle>
              <PillarDescription>{pillar.description}</PillarDescription>
            </PillarCard>
          ))}
        </PillarsContainer>
      </Container>
    </Section>
  );
};

export default HomeSectionTwo;
