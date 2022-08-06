import React from "react";

import { DEMO_COMMON_PROPS } from "constants/demo-props";

import { Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import { Button, Drawer } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";

const DrawerPage = () => {
  const [isVisible, setVisible] = React.useState(false);

  let demoProps = { ...DEMO_COMMON_PROPS };
  delete demoProps.hide;

  return (
    <ComponentPage
      name="Drawer"
      translations
      render={(t, componentLabel) => {
        const buttonText = t(isVisible ? "common_close" : "common_open");

        return (
          <Demo
            label={componentLabel}
            startColor="#C3BBBB"
            props={{
              position: SelectProp({
                top: "top",
                "top-left": "top-left",
                "top-right": "top-right",
                bottom: "bottom",
                "bottom-left": "bottom-left",
                "bottom-right": "bottom-right",
                left: "left",
                right: "right",
              }),
              ...demoProps,
            }}
          >
            {(props: any) => {
              return (
                <div className="flex flex-col items-center">
                  <Button onClick={() => setVisible(!isVisible)}>
                    {buttonText}
                  </Button>
                  <Drawer
                    hide={!isVisible}
                    onClose={() => setVisible(false)}
                    {...props}
                  />
                </div>
              );
            }}
          </Demo>
        );
      }}
    />
  );
};

export default DrawerPage;
