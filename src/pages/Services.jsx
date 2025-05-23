import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaLaptopCode, FaVideo, FaBoxes, FaSeedling } from "react-icons/fa";

const ServicesContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #0f0c29;
  color: white;
   @media screen and (max-width: 767px) {
 padding: 50px 0;
  }
`;

const ServicesContent = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
   @media screen and (max-width: 767px) {
 padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
   @media screen and (max-width: 767px) {
 margin-bottom: 2rem;
  }
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
   @media screen and (max-width: 767px) {
margin-bottom: 1rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
   @media screen and (max-width: 767px) {
gap: 1rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(142, 45, 226, 0.5);
  }
     @media screen and (max-width: 767px) {
 padding: 2rem 1rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #8e2de2;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
   @media screen and (max-width: 767px) {
font-size: 1rem;
  }
`;

const ServiceDescription = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ServiceItem = styled.li`
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
  
  &:before {
    content: "•";
    color: #8e2de2;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -2px;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: #8e2de2;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const ServicesSection = () => {
  const services = [
    {
      title: "Paid Advertising",
      icon: <FaChartLine />,
      items: [
        "Platform-specific strategies (Meta, TikTok, Google)",
        "Real-time optimization with full funnel view",
        "AI-enhanced budget allocation"
      ]
    },
    {
      title: "Website & Funnel Creation",
      icon: <FaLaptopCode />,
      items: [
        "Conversion-focused Shopify builds",
        "A/B testing and CRO",
        "Speed, UX, and mobile-first design"
      ]
    },
    {
      title: "Content & Creatives",
      icon: <FaVideo />,
      items: [
        "UGC sourcing and editing",
        "Ad scripting and copywriting",
        "Batch production for ad fatigue defense"
      ]
    },
    {
      title: "Fulfillment & Sourcing",
      icon: <FaBoxes />,
      items: [
        "Own warehouse and direct Chinese contacts",
        "Faster shipping, better margins",
        "Inventory forecasting and white-label support"
      ]
    },
    {
      title: "Brand Incubation",
      icon: <FaSeedling />,
      items: [
        "We partner with select founders to co-build",
        "Equity-based partnership models",
        "Full-service brand development"
      ],
      note: "Optional Module if You Offer Equity Models"
    }
  ];

  return (
    <ServicesContainer>
      <ServicesContent>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            From Zero to Sold Out
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Everything You Need to Scale
          </SectionSubtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>
                {service.items.map((item, i) => (
                  <ServiceItem key={i}>{item}</ServiceItem>
                ))}
              </ServiceDescription>
              <CTAButton
                whileHover={{ x: 5 }}
                href="#contact"
              >
                Learn more <FaArrowRight size={14} />
              </CTAButton>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;