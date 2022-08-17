import { useSelector } from "react-redux";
import { isInDarkMode } from "mobrix-engine-plugins";

import { Label, LabelProps } from "mobrix-ui-preview";

const AppLabel = (props: Omit<LabelProps, "dark">) => {
  const dark = useSelector(isInDarkMode);
  return <Label {...props} dark={dark} />;
};

export default AppLabel;
