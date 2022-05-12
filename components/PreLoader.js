import { isEqual } from "lodash";
import { memo } from "react";
import Logo from "./Logo";

const PreLoader = memo(() => {
  return (
    <div className="preloader" style={{ zIndex: 4000 }}>
      <Logo animated={true} size={3} />
    </div>
  );
}, isEqual);
export default PreLoader;
