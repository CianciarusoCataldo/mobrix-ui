import { useDispatch } from "react-redux";

import { Button } from "mobrix-ui-preview";
import { openDrawer } from "mobrix-engine-plugins";
import { ArrowIcon } from "assets/images";

const AppContent = () => {
  const dispatch = useDispatch();

  return (
    <Button
      className="p-0 py-2 absolute top-[50%] left-0 opacity-50 my-auto"
      style={{
        borderTopLeftRadius: "0%",
        borderBottomLeftRadius: "0%",
      }}
      onClick={() => {
        dispatch(openDrawer());
      }}
    >
      <ArrowIcon className="rotate-180" />
    </Button>
  );
};

export default AppContent;
