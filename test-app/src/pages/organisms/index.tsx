import React from "react";
import { Calendar, Container, Label } from "../../mobrix-ui-preview";

const AtomsPage = () => {
  const ComponentDemo = ({
    Component,
    name,
  }: {
    Component: JSX.Element;
    name: string;
  }) => {
    return (
      <Container
        unstyled
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Label dark style={{ fontSize: "24px" }}>
          {name}
        </Label>
        {Component}
      </Container>
    );
  };

  return (
    <Container className="App" dark style={{ height: "110%" }}>
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column", padding: "0.6rem" }}>
              <Calendar fromToday={false} labelClassName="calendar-test-label"/>
            </div>
            <Calendar />
            <Calendar dark fromToday={false} />
            <Calendar dark />
          </div>
        }
        name="Calendar"
      />
    </Container>
  );
};

export default AtomsPage;
