import React from "react";
import "./App.css";
import {
  Button,
  Calendar,
  Card,
  Container,
  DatePicker,
  Form,
} from "./mobrix-ui-preview";

const App = () => {
  return (
    <Container className="App" dark style={{ height: "100%" }}>
      <Container
        unstyled
        style={{
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button>Button</Button>
      </Container>
    </Container>
  );
};

export default App;
