import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccd6f6;
  color: #0a192f;
`;

const About = () => {
  return (
    <Container>
      <h1>About Page</h1>
    </Container>
  );
};

export default About;
