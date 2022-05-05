import { isEqual } from "lodash";
import { memo, useEffect, useState } from "react";
import Logo from "./Logo";

const PreLoader = memo(() => {
  return (
    <div className="preloader">
      <Logo animated={true} size={3} />
    </div>
  );
}, isEqual);
export default PreLoader;
