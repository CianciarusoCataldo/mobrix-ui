import React from "react";
import {
  Button,
  CheckBox,
  CodeBox,
  Container,
  Counter,
  Divider,
  Input,
  Label,
  Link,
  RadioButton,
  Selector,
  Slider,
  Spinner,
  Toggle,
} from "../../mobrix-ui-preview";

import tick from "../../assets/tick.png";
import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

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
            <Button className="test-class">Button light not animated</Button>
            <br />
            <br />
            <Button dark>Button dark not animated</Button>
            <br />
            <br />
            <Button animated>Button light animated</Button>
            <br />
            <br />
            <Button animated dark>
              Button dark animated
            </Button>
            <br />
            <br />
            <Button unstyled onClick={() => alert("clicked")}>
              <svg
                x={0}
                y={0}
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                width="30px"
                height="30px"
              >
                <circle cx={32} cy={32} r={32} fill="var(--svgexternalcolor)" />
                <g className="wrapper">
                  <path
                    className="external"
                    d="M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"
                  />
                </g>
                <g className="wrapper">
                  <path
                    className="external"
                    d="M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"
                  />
                </g>
                <path
                  className="internal"
                  d="M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"
                />
              </svg>
            </Button>
          </div>
        }
        name="Button"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckBox />
            <br />
            <br />
            <CheckBox value={true} />
            <br />
            <br />
            <CheckBox icon={<img alt="" src={tick} width="30px" />} />
            <br />
            <br />
            <CheckBox dark />
            <br />
            <br />
            <CheckBox dark value={true} />
            <br />
            <br />
            <CheckBox dark icon={<img alt="" src={tick} width="30px" />} />
            <br />
            <br />
            <CheckBox
              unstyled
              style={{
                background: "white",
                borderWidth: "2px",
                borderRadius: "30%",
              }}
              icon={<img alt="" src={tick} width="30px" />}
            />
            <br />
            <br />
            <CheckBox
              unstyled
              style={{
                background: "white",
                borderWidth: "2px",
                borderRadius: "30%",
              }}
              icon={<img alt="" src={tick} width="30px" />}
              value={true}
            />
          </div>
        }
        name="CheckBox"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CodeBox />
            <br />
            <br />
            <CodeBox noCopyButton value="npm i mobrix ui" />
            <br />
            <br />
            <CodeBox highlight value="npm i mobrix ui" />
            <br />
            <br />
            <CodeBox dark />
            <br />
            <br />
            <CodeBox dark noCopyButton value="npm i mobrix ui" />
            <br />
            <br />
            <CodeBox highlight dark value="npm i mobrix ui" />
            <br />
            <br />
            <CodeBox unstyled />
            <br />
            <br />
            <CodeBox noCopyButton unstyled value="npm i mobrix ui" />
            <br />
            <br />
            <CodeBox highlight unstyled value="npm i mobrix ui" />
          </div>
        }
        name="CodeBox"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Counter />
            <br />
            <br />
            <Counter animated value={35} />
            <br />
            <br />
            <Counter dark />
            <br />
            <br />
            <Counter animated dark value={35} />
            <br />
            <br />
            <Counter unstyled />
            <br />
            <br />
            <Counter unstyled value={35} />
          </div>
        }
        name="Counter"
      />
      <ComponentDemo
        Component={
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <p></p>
            <Divider />
            <p></p>
            <Divider dark animated={false} />
            <p></p>
            <Divider unstyled />
          </div>
        }
        name="Divider"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input />
            <br />
            <br />
            <Input value="text" />
            <br />
            <br />
            <Input dark />
            <br />
            <br />
            <Input dark value="text" />
            <br />
            <br />
            <Input unstyled />
            <br />
            <br />
            <Input unstyled value="text" />
          </div>
        }
        name="Input"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label children="text" />
            <br />
            <br />
            <Label dark children="text" />
            <br />
            <br />
            <Label unstyled children="text" />
          </div>
        }
        name="Label"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              children="text"
            />
            <br />
            <br />
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              dark
              children="text"
            />
            <br />
            <br />
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              unstyled
              children="text"
            />
          </div>
        }
        name="Link"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <RadioButton />
            <br />
            <br />
            <RadioButton deselectable={false} />
            <br />
            <br />
            <RadioButton dark />
            <br />
            <br />
            <RadioButton dark deselectable={false} />
            <br />
            <br />
            <RadioButton unstyled />
            <br />
            <br />
            <RadioButton unstyled deselectable={false} />
          </div>
        }
        name="RadioButton"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Selector />
            <br />
            <br />
            <Selector elements={["el1", "el2"]} />
            <br />
            <br />
            <Selector dark elements={["el1", "el2"]} />
            <br />
            <br />
            <Selector unstyled elements={["el1", "el2"]} />
          </div>
        }
        name="Selector"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Slider />
            <br />
            <br />
            <Slider value={32} />
            <br />
            <br />
            <Slider dark />
            <br />
            <br />
            <Slider dark value={32} />
            <br />
            <br />
            <Slider unstyled />
            <br />
            <br />
            <Slider unstyled value={32} />
          </div>
        }
        name="Slider"
      />

      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Demo
              props={{
                value: SelectProp({
                  success: "success",
                  error: "error",
                  loading: "loading",
                }),
                dark: BooleanProp(false),
              }}
              children={(props, setProps) => <Spinner {...props} />}
            />
          </div>
        }
        name="Spinner"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Toggle />
            <br />
            <br />
            <Toggle value={false} />
            <br />
            <br />
            <Toggle dark />
            <br />
            <br />
            <Toggle dark value={false} />
            <br />
            <br />
            <Toggle unstyled />
            <br />
            <br />
            <Toggle unstyled value={false} />
          </div>
        }
        name="Toggle"
      />
    </Container>
  );
};

export default AtomsPage;
