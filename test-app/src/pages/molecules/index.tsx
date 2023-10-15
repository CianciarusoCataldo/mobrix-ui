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
            <div style={{ marginTop: "20px" }} /> <Card header="header" />{" "}
            <br />
            <div style={{ marginTop: "20px" }} /> <Card body="body" /> <br />
            <div style={{ marginTop: "20px" }} /> <Card footer="footer" />{" "}
            <br />
            <div style={{ marginTop: "20px" }} />{" "}
            <Card header="header" body="body" footer="footer" /> <br />
            <div style={{ marginTop: "20px" }} />{" "}
            <Card noDividers header="header" body="body" footer="footer" />{" "}
            <div style={{ marginTop: "20px" }} />
            <Card noFooterDivider header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card noHeaderDivider header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card dark />
            <div style={{ marginTop: "20px" }} />
            <Card dark header="header" />
            <div style={{ marginTop: "20px" }} />
            <Card dark body="body" />
            <div style={{ marginTop: "20px" }} />
            <Card dark footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card dark header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card dark noDividers header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card
              dark
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card
              dark
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled header="header" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled body="body" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card
              unstyled
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card
              unstyled
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />{" "}
            <DismissableCard header="header" /> <br />
            <div style={{ marginTop: "20px" }} />{" "}
            <DismissableCard body="body" /> <br />
            <div style={{ marginTop: "20px" }} />{" "}
            <DismissableCard footer="footer" /> <br />
            <div style={{ marginTop: "20px" }} />{" "}
            <DismissableCard header="header" body="body" footer="footer" />{" "}
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard dark />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard dark header="header" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard dark body="body" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard dark footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard dark header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              dark
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              dark
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              dark
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard unstyled />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard unstyled header="header" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard unstyled body="body" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard unstyled footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              unstyled
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              unstyled
              noHeaderDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              unstyled
              noFooterDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />
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
            <div style={{ marginTop: "20px" }} />
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
