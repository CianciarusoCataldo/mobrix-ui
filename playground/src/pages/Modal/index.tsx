import {
  BooleanProp,
  Demo,
  HiddenProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Button, Modal } from "mobrix-ui-preview";
import { ComponentPage } from "components/ComponentPage";
import { demoProps, demoRows } from "constants/demo-props";

export const ModalPage = () => {
  return (
    <ComponentPage
      name="Modal"
      translations
      render={(t, componentLabel) => {
        const closeButtonLabel = t("props_closeButton");
        const openModalLabel = t("props_openButton");

        return (
          <Demo
            startColor="#999"
            label={componentLabel}
            props={{
              title: StringProp("title"),
              children: StringProp("children"),
              [closeButtonLabel]: BooleanProp(true),
              closeOutside: BooleanProp(true),
              ...demoProps,
              hide: HiddenProp(true),
            }}
            rows={[
              ["title", "children", "closeOutside", closeButtonLabel],
              ...demoRows,
            ]}
          >
            {(props: any, setProps: (props: any) => any) => {
              let modalProps = { ...props };

              delete modalProps[closeButtonLabel];

              return (
                <div className="flex flex-col items-center">
                  <Button onClick={() => setProps({ ...props, hide: false })}>
                    {openModalLabel}
                  </Button>

                  <Modal
                    {...modalProps}
                    children={<div>{modalProps.children}</div>}
                    onClose={
                      props[closeButtonLabel] &&
                      (() => setProps({ ...props, hide: true }))
                    }
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

export default ModalPage;
