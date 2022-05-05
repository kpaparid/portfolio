import { isEqual } from "lodash";
import Image from "next/image";
import { forwardRef, memo } from "react";
import styled from "styled-components";
const LeftSide = styled.div`
  width: 60%;
  h4 {
    color: var(--bs-senary);
    font-size: clamp(16px, 3vw, 20px);
  }
  h1 {
    color: var(--bs-primary);
    font-size: clamp(40px, 8vw, 80px);
  }
  h2 {
    color: var(--bs-senary);
    font-size: clamp(30px, 8vw, 50px);
  }
  h3 {
    color: var(--bs-quaternary);
    font-size: clamp(20px, 3vw, 40px);
  }
  h5 {
    color: var(--bs-quaternary);
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 100;
  }
  h1,
  h2,
  h3,
  h4 {
    word-wrap: break-word !important;
    word-break: break-word !important;
  }
`;

const Project = forwardRef(
  ({ title, subtitle, description, index, imgs }, ref) => {
    return (
      <section
        ref={ref}
        className="w-100 d-flex justify-content-center"
        style={{ height: imgs.length * 30 + "%", minHeight: "100%" }}
      >
        <div
          className="d-flex justify-content-between flex-nowrap w-100 px-4"
          style={{ maxWidth: "1600px" }}
        >
          <LeftSide className="text-break text-wrap">
            <h2>{index}</h2>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <h4>{description}</h4>
          </LeftSide>
          <div className="flex-fill">
            {imgs?.map((i) => (
              <ImageComponent src="/papflix1.png" />
            ))}
          </div>
        </div>
      </section>
    );
  },
  isEqual
);

const ImageComponent = memo(({ src, name = "Project" }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "25%",
        maxHeight: "45%",
        // height: "fit-content",
        position: "relative",
        borderRadius: "0.5rem",
        padding: "1rem 0;",
      }}
    >
      <Image
        src={src}
        alt={`Picture of the ${name}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
});

export default Project;
