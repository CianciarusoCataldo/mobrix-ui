import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    document.getElementById("scroll-manager") &&
      document.getElementById("scroll-manager").scrollIntoView();
  }, [pathname]);

  return <div id="scroll-manager">{children || null}</div>;
};

export default withRouter(ScrollToTop);
