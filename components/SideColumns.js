import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEqual } from "lodash";
import { forwardRef, memo } from "react";
import { Button } from "react-bootstrap";
import styledComponents from "styled-components";
import { links } from "../data";

const SideColumns = memo(
  forwardRef((_, ref) => {
    return (
      <SidesWrapper ref={ref}>
        <Side style={{ left: "5%" }} className="left-side">
          <div className="d-flex flex-column text-senary icons-list">
            <a href={links.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={links.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={links.mailTo}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </Side>
        <Side
          className="left-side right-side"
          style={{
            right: "5%",
          }}
        >
          <a href={links.mailTo} className="mail">
            {links.mail}
          </a>
        </Side>
        {/* <div className=" d-md-none d-flex flex-nowrap text-senary icons-list w-100 justify-content-center">
          <Button
            variant="senary"
            style={{ height: "40px", width: "40px" }}
            className="rounded-circle mx-2 p-2"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Button>
          <Button
            variant="senary"
            style={{ height: "40px", width: "40px" }}
            className="rounded-circle mx-2 p-2"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button
            variant="senary"
            style={{ height: "40px", width: "40px" }}
            className="rounded-circle mx-2 p-2"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </div> */}
      </SidesWrapper>
    );
  }),
  isEqual
);

const SidesWrapper = styledComponents.div`

min-height: 55vh;
@media (max-width: 768px){
  position: relative;
  min-height: 30vh;
  .left-side{
    width: 100% !important;
    position: absolute;
    bottom:0;
  }
  .right-side{
    display:none;
  }
  .icons-list{
      transform: rotate(90deg);
      a{
        margin: 0.5rem 0;
      }
    svg{
      transform: rotate(270deg);
      height: 16px;
      width: 16px;
      padding: 12px;
      color: var(--bs-secondary);
      background-color: var(--bs-senary);
      border-radius: 2rem;
      &:hover{
        background-color: var(--bs-primary);
        color: var(--bs-secondary);
        transform: rotate(270deg) translateY(-10px);
      }
    }
  }
  .left-side{
    transform: translate(-5%, -50%);
  }
  .left-side:after{
    position: absolute;
    height: 0;
    bottom: 55%;
    transform: rotate(90deg) translateX(35px);
  }
}
.left-side{
  width:0;
}
&.active{
  position: relative;
  .left-side{
    width: 100% !important;
  }
  .right-side{
    width: 0 !important;
    transform: translate(0, 100vh) !important;
  }
  .icons-list{
      transform: rotate(90deg);
      a{
        margin: 0.5rem 0;
      }
    svg{
      transform: rotate(270deg);
      height: 16px;
      width: 16px;
      padding: 12px;
      color: var(--bs-secondary);
      background-color: var(--bs-senary);
      border-radius: 2rem;
      &:hover{
        background-color: var(--bs-primary);
      }
    }
  }
  .left-side{
    transform: translate(-5%, -100%);
  }
  .left-side:after{
    position: absolute;
    height: 0;
    bottom: 55%;
    transform: rotate(90deg) translateX(35px);
  }
}
`;

const Side = styledComponents.div`

transition: all 0.55s ease-out;
.icons-list{
  transition: all 0.55s ease-out;
}
svg{
    transition: all 0.55s ease-out;
}
width: 100%;
position: fixed;
bottom:0;
display: flex;
flex-direction: column;
align-items: center;
transform: translateX(-50%);
color: var(--bs-senary);
z-index: 0;
.mail{
  font-weight: 500;
  transition: all 0.25s ease-out;
  padding: 12px 0;
  transform: rotate(90deg) translate(-63px, -2px);
  color: var(--bs-senary);
  &:hover{
    color: var(--bs-primary);
    transform: rotate(90deg) translate(-73px, -2px);
    cursor: pointer;
  }
}
svg{
  transition: all 0.25s ease-out;
  font-size: 20px;
  padding: 0.75rem 0;
  &:hover{
    color: var(--bs-primary);
    transform: translate(0, -10px);
    cursor: pointer;
  }
}
&:after{
  content: "";
  width: 1px;
  height: 100px;
  background-color: var(--bs-senary);
  transition: all 0.55s ease-out;
}
`;

export default SideColumns;
