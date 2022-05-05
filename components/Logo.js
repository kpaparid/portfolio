import { faK } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEqual from "lodash/isEqual";
import { memo } from "react";

const Logo = memo(({ animated, size = 1.2 }) => {
  return (
    <div className={`logo ${animated ? "animated" : ""}`}>
      <div className="letter">
        <FontAwesomeIcon icon={faK}></FontAwesomeIcon>
      </div>
      <svg
        className="shape"
        width={size + "cm"}
        height={size + "cm"}
        viewBox="0 0 100 100"
      >
        <path d="M 50 5 L 11 27 L 11 72 L 50 95 L 89 73 L 89 28 Z" />
      </svg>
    </div>
  );
}, isEqual);
export default Logo;
