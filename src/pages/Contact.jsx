import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

// ===== STYLED COMPONENTS ===== //
const ContactContainer = styled.section`
  width: 100%;
  padding: 100px 0;
  background: linear-gradient(-45deg, #0f0c29, #1a1a2e, #16213e, #1a1a2e);
  color: white;
   @media screen and (max-width: 767px) {
 padding: 50px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
   @media screen and (max-width: 767px) {
margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  background: linear-gradient(to right, #fff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 15px;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  background: rgba(26, 26, 46, 0.6);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
   @media screen and (max-width: 767px) {
 padding: 2rem 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(15, 12, 41, 0.8);
  color: white;
  font-size: 1rem;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background: rgba(15, 12, 41, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 30px;
  user-select: none;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ .checkmark {
    background: #8e2de2;
    border-color: #8e2de2;
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  transition: all 0.2s;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #8e2de2, #4a00e0);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

// ===== MAIN COMPONENT ===== //
const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    revenue: "",
    services: []
  });

  const serviceOptions = [
    "Paid Advertising",
    "Website/Funnel Creation",
    "Content & Creatives",
    "Fulfillment & Sourcing",
    "Brand Incubation",
    "Full Service Scaling"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailData = {
      name: formData.name,
      brand: formData.brand,
      email: formData.email,
      revenue: formData.revenue,
      services: formData.services.join(", "),
      _subject: "New Lead from StackMargin Website",
      _replyto: formData.email
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/umarfarooq6618@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        alert("Thank you! We'll contact you soon.");
        setFormData({
          name: "",
          brand: "",
          email: "",
          revenue: "",
          services: []
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please email us directly at umarfarooq6618@gmail.com");
    }
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Scale? Let's Talk.
          </SectionTitle>
          <SectionText>
            Whether you're starting from scratch or looking to go from 6 to 8 figures, we're here to help you grow—fast.
          </SectionText>
        </SectionHeader>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Full Name *</FormLabel>
            <FormInput 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Brand / Website (if live)</FormLabel>
            <FormInput 
              type="text" 
              name="brand" 
              value={formData.brand}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Email *</FormLabel>
            <FormInput 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Monthly Revenue</FormLabel>
            <FormSelect 
              name="revenue" 
              value={formData.revenue}
              onChange={handleChange}
            >
              <option value="">Select your monthly revenue</option>
              <option value="$0 - $10K">$0 - $10K</option>
              <option value="$10K - $50K">$10K - $50K</option>
              <option value="$50K - $100K">$50K - $100K</option>
              <option value="$100K - $250K">$100K - $250K</option>
              <option value="$250K+">$250K+</option>
            </FormSelect>
          </FormGroup>

          <FormGroup>
            <FormLabel>What Are You Looking For?</FormLabel>
            <CheckboxGroup>
              {serviceOptions.map((service) => (
                <CheckboxLabel key={service}>
                  <CheckboxInput 
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <Checkmark className="checkmark" />
                  {service}
                </CheckboxLabel>
              ))}
            </CheckboxGroup>
          </FormGroup>

          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Discovery Call <FaPaperPlane />
          </SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactUsSection;