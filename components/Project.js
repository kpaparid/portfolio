import { isEqual } from "lodash";
import Image from "next/image";
import { forwardRef, memo } from "react";
import styled from "styled-components";
const Section = styled.section`
  // min-height: 55vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  &.loaded .image-wrapper {
    animation: zoom-down 1.25s ease-out forwards;
  }
  .project-title {
    font-size: clamp(24px, 5vw, 28px);
    font-weight: 700;
  }
  h4 {
    font-size: clamp(16px, 3vw, 20px);
  }
`;

const Project = forwardRef(
  ({ id, title, subtitle, description, index, imgs }, ref) => {
    return (
      <Section id={id} ref={ref} className="projects-section">
        <div>
          <div className="d-flex">
            <div className="d-flex justify-content-between flex-column w-100 text-break text-wrap left-side d-flex">
              <h1 className="project-title">
                <span>{title}</span>
              </h1>
              <h3>{subtitle}</h3>
              <h4>
                {description.map((d, index) => (
                  <div key={`line${index}`}>{d}</div>
                ))}
              </h4>
            </div>
            <div
              className="flex-fill d-flex justify-content-end align-items-center right-side mx-1"
              style={{ position: "relative" }}
            >
              {imgs?.map((i, index) => (
                <ImageComponent src={"/papi.gif"} key={"image-" + index} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    );
  },
  isEqual
);

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 0.55rem;
  overflow: hidden;
  z-index: 200;
  opacity: 0;
  box-shadow: 0px 0px 16px 6px var(--bs-primary);

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
  }

  @keyframes zoom-down {
    0% {
      -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
      transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
    }
  }
`;
const ImageComponent = memo(({ src, name = "Project" }) => {
  return (
    <StyledImageWrapper className="image-wrapper">
      <Image src={src} alt={`Picture of the ${name}`} layout="fill" />
    </StyledImageWrapper>
  );
});

export default Project;
