import { isEqual } from "lodash";
import { forwardRef, memo } from "react";
import styledComponents from "styled-components";

const AboutMe = memo(
  forwardRef((_, ref) => {
    return (
      <Wrapper ref={ref}>
        <div className="intro-body">
          <h1 className="section-title">About Me</h1>
          <h5>
            Hello! I'm Konstantinos Paparidis, a passionate software engineer.
            Experienced on developing web, mobile, and desktop applications and
            specialized in frontend and backend development. I have graduated
            with a bachelor's degree in Computer Science from Aristotle
            University at Thessaloniki, Greece. Looking forward to working with
            you!
          </h5>
        </div>
      </Wrapper>
    );
  }),
  isEqual
);
export default AboutMe;

const Wrapper = styledComponents.section`
  margin-bottom: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5 {
  opacity: 0;
    color: var(--bs-senary);
    font-size: clamp(16px, 3vw, 20px);
  }
  h1 {
    transition: clip-path 1.25s ease-out;
    clip-path: polygon(100% 100%,100% 100%,100% 0%,100% 0%);
    color: var(--bs-primary);
    font-size: clamp(14px, 5vw, 25px);
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    &:after{
      content: "";
      background-color: var(--bs-primary);
      flex: 1 1 auto;
      height: 1px;
      margin-left: 0.5rem;
      margin-top: 8px;
    }
  }

  &.loaded{
    h5{animation: appear 1.25s ease-out forwards;}
    h1{
      clip-path: polygon(0% 100%,100% 100%,100% 0%,0% 0%);
    }
  }
`;
