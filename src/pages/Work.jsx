import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const ResultsContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  background: linear-gradient(-45deg, #0f0c29, #1a1a2e, #16213e, #1a1a2e);
  background-size: 400% 400%;
  color: white;
  overflow: hidden;
`;

const ResultsContent = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const MetricCard = styled(motion.div)`
  background: rgba(26, 26, 46, 0.6);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const MetricValue = styled.div`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const MetricLabel = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
`;

const TestimonialCard = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  background: rgba(26, 26, 46, 0.6);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(142, 45, 226, 0.3);
  position: relative;
  backdrop-filter: blur(10px);
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 2rem;
  color: rgba(142, 45, 226, 0.3);
`;

const TestimonialText = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  color: white;
`;

const TestimonialAuthor = styled.div`
  font-style: italic;
  color: rgba(255, 255, 255, 0.7);
`;

const ResultsSection = () => {
  const [countedValues, setCountedValues] = useState({
    revenue: 0,
    brands: 0,
    adViews: 0,
    conversion: 0
  });

  const targetValues = {
    revenue: 25000000, // $25M
    brands: 42,
    adViews: 320, // 320M
    conversion: 45 // 45%
  };

  useEffect(() => {
    const duration = 3000; // Animation duration in ms
    const startTime = Date.now();

    const animateCounters = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);

      setCountedValues({
        revenue: Math.floor(progress * targetValues.revenue),
        brands: Math.floor(progress * targetValues.brands),
        adViews: Math.floor(progress * targetValues.adViews),
        conversion: Math.floor(progress * targetValues.conversion)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animateCounters);
    }, 500); // Small delay before starting animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <ResultsContainer>
      <ResultsContent>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Numbers That Speak Louder Than Words
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We don't showcase logos. We showcase growth.
          </SectionSubtitle>
        </SectionHeader>

        <MetricsGrid>
          <MetricCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MetricValue>
              ${(countedValues.revenue / 1000000).toFixed(1)}M+
            </MetricValue>
            <MetricLabel>Revenue Generated</MetricLabel>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MetricValue>{countedValues.brands}+</MetricValue>
            <MetricLabel>Brands Launched</MetricLabel>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MetricValue>{countedValues.adViews}M+</MetricValue>
            <MetricLabel>Ad Views Delivered</MetricLabel>
          </MetricCard>

          <MetricCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MetricValue>{countedValues.conversion}%</MetricValue>
            <MetricLabel>Avg Conversion Rate Increase</MetricLabel>
          </MetricCard>
        </MetricsGrid>

        <TestimonialCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <TestimonialText>
            "From $0 to $1.2M in 9 months. StackMargin didn't just run our ads—they engineered our brand."
          </TestimonialText>
          <TestimonialAuthor>
            – Founder, [Health & Wellness Brand]
          </TestimonialAuthor>
        </TestimonialCard>
      </ResultsContent>
    </ResultsContainer>
  );
};

export default ResultsSection;