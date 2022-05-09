import { isEqual } from "lodash";
import { memo } from "react";
import styledComponents from "styled-components";

const AboutMe = memo(() => {
  return (
    <Wrapper>
      <div className="intro-body">
        <h1 style={{ fontSize: "clamp(14px, 5vw, 25px)" }}>About Me</h1>
        <h5>
          Hello! I'm Konstantinos Paparidis, a passionate software engineer. I
          develop web applications, mobile applications, and desktop
          applications. My core skill is based on JavaScript and Java. I have
          graduated with a bachelor's degree in Computer Science from Aristotle
          University at Thessaloniki, Greece in 2017. I am available for any
          kind of job opportunity that suits my interests.
        </h5>
        <h5></h5>
      </div>
    </Wrapper>
  );
}, isEqual);
export default AboutMe;

const Wrapper = styledComponents.section`
  padding: 1rem;
  opacity: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .intro-body {
    max-width: 1000px;
    min-height: 70vh;
    width: 80%;
  }
  h4 {
    color: var(--bs-senary);
    font-size: clamp(16px, 3vw, 20px);
  }
  h1 {
    color: var(--bs-primary);
    font-size: clamp(40px, 8vw, 80px);
  }
  h2 {
    color: var(--bs-quaternary);
    font-size: clamp(20px, 3vw, 80px);
  }
  h5 {
    color: var(--bs-senary);
    font-size: clamp(16px, 3vw, 20px);
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    width: fit-content;
  }
  animation: appear 1.25s ease-out forwards;
`;
