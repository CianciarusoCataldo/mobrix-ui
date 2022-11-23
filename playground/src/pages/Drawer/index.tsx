import React from "react";

import { demoRows, demoProps } from "constants/demo-props";

import { SelectProp } from "@cianciarusocataldo/demo-ui";

import { Button, Drawer, List } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const DrawerPage = () => {
  const [isVisible, setVisible] = React.useState(false);

  let customDemoProps = { ...demoProps };
  delete customDemoProps.hide;

  return (
    <ComponentPage
      name="Drawer"
      translations
      render={(t, componentLabel) => {
        const buttonText = t(isVisible ? "common_close" : "common_open");

        return (
          <DemoComponent
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
              ...customDemoProps,
            }}
            rows={[
              ["position"],
              demoRows[0],
              demoRows[1],
              demoRows[2].splice(1),
            ]}
            parseProps={(props) => {
              return {
                ...props,
                onClose: () => setVisible(false),
                hide: !isVisible,
                children: (
                  <List
                    dark={props.dark}
                    className="p-4"
                    elements={new Array(6)
                      .fill("Element ")
                      .map((el, index) => el + index)}
                  />
                ),
              };
            }}
          >
            {(props: any) => {
              return (
                <div className="">
                  <Button onClick={() => setVisible(!isVisible)}>
                    {buttonText}
                  </Button>
                  <Drawer
                    hide={!isVisible}
                    onClose={() => setVisible(false)}
                    children={
                      <List
                        dark={props.dark}
                        className="p-4"
                        elements={new Array(6)
                          .fill("Element ")
                          .map((el, index) => el + index)}
                      />
                    }
                    {...props}
                  />
                </div>
              );
            }}
          </DemoComponent>
        );
      }}
    />
  );
};

export default DrawerPage;
