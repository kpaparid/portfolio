import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isEqual } from "lodash";
import { memo } from "react";
import styledComponents from "styled-components";

const SideColumns = memo(() => {
  return (
    <>
      <Side style={{ left: "5%" }}>
        <div className="d-flex flex-column text-senary bg-red">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </Side>
      <Side
        style={{
          right: "5%",
          width: 0,
        }}
      >
        <div className="mail">kpaparid@gmail.com</div>
      </Side>
    </>
  );
}, isEqual);

const Side = styledComponents.div`
position: fixed;
bottom:0;
display: flex;
flex-direction: column;
align-items: center;
transform: translateX(-50%);
color: var(--bs-senary);
z-index: 1000;
.mail{
  font-weight: 500;
  transition: all 0.25s ease-out;
  padding: 12px 0;
  transform: rotate(90deg) translate(-63px, -2px);
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
}
`;

export default SideColumns;
