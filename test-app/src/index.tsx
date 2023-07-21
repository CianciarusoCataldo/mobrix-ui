import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Drawer } from "./mobrix-ui-preview";

let visible = true;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Drawer dark={true} hide={true} animated onClose={() => {}}>
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
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
