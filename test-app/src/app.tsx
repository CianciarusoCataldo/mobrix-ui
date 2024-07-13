import React from "react";
import {
  TabViewer,
  Drawer,
  DrawerProps,
  Button,
  PackageVersion,
  Input,
} from "./mobrix-ui-preview";

const tabs = (
  <TabViewer
    animated
    tabClassName="demo-tab"
    tabSelectedClassName="demo-tab-selected"
    tabUnselectedClassName="demo-tab-unselected"
    //dark
    selected={0}
    tabs={[
      {
        label: "Atoms",
        lazy: React.lazy(() => import("./pages/atoms")),
        dismissable: true,
      },
      {
        label: "Molecules",
        lazy: React.lazy(() => import("./pages/molecules")),
      },
      {
        label: "Organisms",
        lazy: React.lazy(() => import("./pages/organisms")),
      },
    ]}
  />
);

const App = () => {
  const position: DrawerProps["position"] = "top-left";

  const [isVisible, setVisible] = React.useState(false);

  return (
    <>
      <Drawer
        //dark
        hide={!isVisible}
        background={true}
        className="test-class2"
        animated
        onClose={() => {
          console.log("drawer close");
          setVisible(false);
        }}
        position={position}
      >
        <div
          style={{
            padding: "1rem",
          }}
        >
          {new Array(18).fill(" ").map((el, index) => (
            <p key={index} style={{ padding: "1rem" }}>
              Element {index}
            </p>
          ))}
        </div>
      </Drawer>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button
          key="drawer-btn"
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          Toggle drawer
        </Button>
        <Input autoresizable />
        <div style={{ marginTop: "20px" }} />
        <Input value="text" onChange={(value) => console.log(value)} />
        <PackageVersion
          name="mobrix-ui"
          user="CianciarusoCataldo"
          source="github-release"
        />
        {tabs}
      </div>
    </>
  );
};

export default App;
