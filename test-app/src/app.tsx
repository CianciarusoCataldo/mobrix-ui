import React from "react";
import {
  TabViewer,
  Drawer,
  DrawerProps,
  Button,
  EmbeddedVideo,
  Image,
} from "./mobrix-ui-preview";
import AtomsPage from "./pages/atoms";
import MoleculesPage from "./pages/molecules";
import OrganismsPage from "./pages/organisms";

const Atoms = <AtomsPage />;
const Molecules = <MoleculesPage />;
const Organisms = <OrganismsPage />;
const tabs = (
  <TabViewer
    tabClassName="demo-tab"
    tabSelectedClassName="demo-tab-selected"
    tabUnselectedClassName="demo-tab-unselected"
    //dark
    selected={0}
    tabs={[
      {
        label: "Atoms",
        content: Atoms,
        dismissable: true,
      },
      {
        label: "Molecules",
        content: Molecules,
      },
      {
        label: "Organisms",
        content: Organisms,
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
        dark
        hide={!isVisible}
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
        <EmbeddedVideo url="https://www.youtube.com/watch?v=QZXc39hT8t4" />
        <EmbeddedVideo
          dark
          hover={false}
          url="https://www.dailymotion.com/video/x2nfpl3"
        />
        <EmbeddedVideo url="https://www.facebook.com/watch/?v=762618565361911" />
        <Image
          width={250}
          height={250}
          alt="test-image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        <Image
          hover={true}
          shadow={true}
          alt="test-image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
        {tabs}
      </div>
    </>
  );
};

export default App;
