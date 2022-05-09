import { isEqual } from "lodash";
import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
  opacity: 0;
  margin: 0;
  height: calc(100% - 106px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .intro-body {
    transform: translateY(-106px);
    max-width: 1000px;
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
    color: var(--bs-quaternary);
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 100;
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

const Intro = memo(() => {
  return (
    <Wrapper>
      <div className="intro-body">
        <h1 style={{ fontSize: "clamp(14px, 5vw, 25px)" }}>Hi, my name is</h1>
        <h4 style={{ fontSize: "clamp(40px, 8vw, 80px)" }}>
          Konstantinos Paparidis.
        </h4>
        <h1 style={{ fontSize: "clamp(14px,5vw,30px)", fontWeight: 700 }}>
          I am a Software Engineer.
        </h1>
        <h5></h5>
      </div>
    </Wrapper>
  );
}, isEqual);
export default Intro;
