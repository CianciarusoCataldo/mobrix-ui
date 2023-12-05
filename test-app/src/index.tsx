import React from "react";
import ReactDOM from "react-dom/client";
import AtomsPage from "./pages/atoms";
import MoleculesPage from "./pages/molecules";
import OrganismsPage from "./pages/organisms";
import { Drawer, TabViewer } from "./mobrix-ui-preview";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Atoms = <AtomsPage />;
const Molecules = <MoleculesPage />;
const Organisms = <OrganismsPage />;
const tabs = <TabViewer
  tabClassName="demo-tab"
  tabSelectedClassName="demo-tab-selected"
  tabUnselectedClassName="demo-tab-unselected"
  //dark
  selected={0}
  tabs={[
    {
      label: "Atoms",
      content: Atoms,
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

root.render(
  <>
    <Drawer dark hide={true} animated onClose={() => { }}>
      <div
        style={{
          padding: "1rem",
        }}
      >
        {new Array(10).fill(" ").map((el, index) => (
          <p key={index} style={{ padding: "1rem" }}>
            Element {index}
          </p>
        ))}
      </div>
    </Drawer>
    <div>
      {tabs}
    </div>
  </>
);
