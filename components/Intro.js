import { isEqual } from "lodash";
import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
  margin: 0;
  height: calc(100% - 106px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .intro-body {
    max-width: 1000px;
    transform: translateY(-106px);
  }
  h4 {
    color: var(--bs-primary);
    font-size: clamp(16px, 3vw, 20px);
  }
  h1 {
    color: var(--bs-senary);
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
`;

const Intro = memo(() => {
  return (
    <Wrapper>
      <div className="intro-body">
        <h4>Hi, my name is</h4>
        <h1>Konstantinos Paparidis.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h5>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.",
        </h5>
      </div>
    </Wrapper>
  );
}, isEqual);
export default Intro;
