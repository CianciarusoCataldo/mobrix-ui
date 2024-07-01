import { demoRows, demoProps } from "constants/demo-props";

import { HiddenProp, SelectProp } from "@cianciarusocataldo/demo-ui";

import { Button, Drawer, List } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import DemoComponent from "components/DemoComponent";

const DrawerPage = () => {
  let customDemoProps = { ...demoProps };
  customDemoProps.hide = HiddenProp(true);
  return (
    <ComponentPage
      name="Drawer"
      translations
      render={(t, componentLabel) => {
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
            parseProps={(props, setProps) => {
              return {
                ...props,
                onClose: () => setProps({ ...props, hide: true }),
                children: (
                  <List
                    dark={props.dark}
                    className="p-4"
                    elements={new Array(10)
                      .fill("Element ")
                      .map((el, index) => el + index)}
                  />
                ),
              };
            }}
          >
            {(props: any, setProps: any) => {
              const buttonText = t("common_open");

              return (
                <div>
                  <Button onClick={() => setProps({ ...props, hide: false })}>
                    {buttonText}
                  </Button>
                  <Drawer {...props} />
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
