import { useSelector } from "react-redux";
import { isInDarkMode } from "mobrix-engine-plugins";

import { Label } from "mobrix-ui-preview";

const AppLabel = (props: { className?: string; children?: string }) => {
  const dark = useSelector(isInDarkMode);
  return <Label {...props} dark={dark} />;
};

export default AppLabel;
