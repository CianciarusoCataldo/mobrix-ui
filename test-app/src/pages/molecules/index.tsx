import React, { useState } from "react";
import {
  Table,
  Container,
  Label,
  Card,
  DismissableCard,
  Button,
  FormField,
} from "../../mobrix-ui-preview";
import {
  Demo,
  SelectProp,
  BooleanProp,
  StringProp,
  HiddenProp,
} from "@cianciarusocataldo/demo-ui";

const MoleculesPage = () => {
  const [hide, setHide] = useState(null);

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
            <Card /> <br />
            <br />
            <Card header="header" /> <br />
            <br />
            <Card body="body" /> <br />
            <br />
            <Card footer="footer" /> <br />
            <br />
            <Card header="header" body="body" footer="footer" /> <br />
            <br />
            <Card noDividers header="header" body="body" footer="footer" />{" "}
            <br />
            <br />
            <Card noFooterDivider header="header" body="body" footer="footer" />
            <br />
            <br />
            <Card noHeaderDivider header="header" body="body" footer="footer" />
            <br />
            <br />
            <Card dark />
            <br />
            <br />
            <Card dark header="header" />
            <br />
            <br />
            <Card dark body="body" />
            <br />
            <br />
            <Card dark footer="footer" />
            <br />
            <br />
            <Card dark header="header" body="body" footer="footer" />
            <br />
            <br />
            <Card dark noDividers header="header" body="body" footer="footer" />
            <br />
            <br />
            <Card
              dark
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <Card
              dark
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <Card unstyled />
            <br />
            <br />
            <Card unstyled header="header" />
            <br />
            <br />
            <Card unstyled body="body" />
            <br />
            <br />
            <Card unstyled footer="footer" />
            <br />
            <br />
            <Card unstyled header="header" body="body" footer="footer" />
            <br />
            <br />
            <Card
              unstyled
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <Card
              unstyled
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <Card
              unstyled
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
          </div>
        }
        name="Card"
      />
      <ComponentDemo
        name="Carousel"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}></div>
        }
      />
      <ComponentDemo
        Component={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              animated
              onClick={() => {
                setHide(hide === false ? null : false);
              }}
              style={{ marginBottom: "2rem" }}
            >
              Reset
            </Button>
            <DismissableCard /> <br />
            <br />
            <DismissableCard header="header" /> <br />
            <br />
            <DismissableCard body="body" /> <br />
            <br />
            <DismissableCard footer="footer" /> <br />
            <br />
            <DismissableCard header="header" body="body" footer="footer" />{" "}
            <br />
            <br />
            <DismissableCard
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard dark />
            <br />
            <br />
            <DismissableCard dark header="header" />
            <br />
            <br />
            <DismissableCard dark body="body" />
            <br />
            <br />
            <DismissableCard dark footer="footer" />
            <br />
            <br />
            <DismissableCard dark header="header" body="body" footer="footer" />
            <br />
            <br />
            <DismissableCard
              dark
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              dark
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              dark
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard unstyled />
            <br />
            <br />
            <DismissableCard unstyled header="header" />
            <br />
            <br />
            <DismissableCard unstyled body="body" />
            <br />
            <br />
            <DismissableCard unstyled footer="footer" />
            <br />
            <br />
            <DismissableCard
              unstyled
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              unstyled
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              unstyled
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <br />
            <br />
            <DismissableCard
              unstyled
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
          </div>
        }
        name="DismissableCard"
      />
      <Demo
        props={{
          type: SelectProp({
            text: "text",
            boolean: "boolean",
            numeric: "numeric",
            radio: "radio",
            checkbox: "checkbox",
            toggle: "toggle",
            rater: "rater",
            slider: "slider",
            input: "input",
            counter: "counter",
          }),
          value: StringProp(""),
          required: BooleanProp(true),
          header: StringProp(""),
          errorLabel: StringProp(""),
          dark: BooleanProp(false),
          animated: BooleanProp(true),
          shadow: BooleanProp(true),
          className: StringProp(""),
        }}
        header="FormField"
        rows={[
          ["value"],
          ["type", "required", "header", "errorLabel"],
          ["dark", "animated", "shadow", "className"],
        ]}
        children={(props, setProps) => (
          <FormField
            {...props}
            //validate={(value) => String(value).length > 6}
          />
        )}
      />

      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Table />
            <Table
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
            <br />
            <br />
            <Table
              headers
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
            <br />
            <br />
            <Table
              dark
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
            <br />
            <br />
            <Table
              dark
              headers
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
            <br />
            <br />
            <Table
              unstyled
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
            <br />
            <br />
            <Table
              unstyled
              headers
              rows={[
                ["h1", "h2", "h3", "h3", "h4", "h6", "h7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
                ["el1", "el2", "el3", "el4", "el5", "el6", "el7"],
              ]}
            />
          </div>
        }
        name="Table"
      />
    </Container>
  );
};

export default MoleculesPage;
