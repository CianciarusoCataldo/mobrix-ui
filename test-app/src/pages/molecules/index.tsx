import React, { useState } from "react";
import Elem0 from "../../assets/elem0.png";
import Elem1 from "../../assets/elem1.png";
import Elem2 from "../../assets/elem2.png";
import {
  Table,
  Container,
  Label,
  Card,
  DismissableCard,
  Dropdown,
  Button,
  FormField,
  Carousel,
  Form,
  List,
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
    <Container unstyled className="App" style={{ height: "110%" }}>
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
            <Card noBottomDivider header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card noTopDivider header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card dark />
            <div style={{ marginTop: "20px" }} />
            <Card dark header="header" />
            <div style={{ marginTop: "20px" }} />
            <Card dark body="body" />
            <div style={{ marginTop: "20px" }} />
            <Card dark footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card dark header="header" body="Card dark no background" footer="footer" noBackground />
            <div style={{ marginTop: "20px" }} />
            <Card dark noDividers header="header" body="body" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card
              dark
              noTopDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card
              dark
              noBottomDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled />
            <div style={{ marginTop: "20px" }} />
            <div className="mbui-test-icon" />
            <Card unstyled header="header" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled body="body" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card unstyled header="header" body="Card unstyled" footer="footer" />
            <div style={{ marginTop: "20px" }} />
            <Card
              unstyled
              noTopDivider
              header="header"
              body="Card unstyled noTopDivider"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card
              unstyled
              noBottomDivider
              header="header"
              body="Card unstyled noBottomDivider"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <Card
              unstyled
              noDividers
              header="header"
              body="Card unstyled noDividers"
              footer="footer"
            />
          </div>
        }
        name="Card"
      />
      <ComponentDemo
        name="Carousel"
        Component={
          <><Carousel elements={[
            <img alt="" src={Elem0} width="250px" height="250px" />,
            <img alt="" src={Elem1} width="250px" height="250px" />,
            <img alt="" src={Elem2} width="250px" height="250px" />,
          ]} />
            <Carousel dark elements={[
              <img alt="" src={Elem0} width="250px" height="250px" />,
              <img alt="" src={Elem1} width="250px" height="250px" />,
              <img alt="" src={Elem2} width="250px" height="250px" />,
            ]} />
          </>
        }
      />
      <ComponentDemo
        name="Dropdown"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Dropdown elements={["el 1", "el 2", "el 3"]} />
            <div style={{ marginTop: "20px" }} />
            <Dropdown dark elements={["el 1", "el 2", "el 3"]} />
          </div>
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
            <DismissableCard noHover alwaysVisible header="Always visible nohover" body="body" footer="footer" />{" "}
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noDividers
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noBottomDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              noTopDivider
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
              noTopDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              dark
              noBottomDivider
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
              noTopDivider
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              unstyled
              noBottomDivider
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
        name="Form"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form
              dark
              submitLabel={"submit"}
              fields={{
                field1: {
                  placeholder: "placeholder",
                  header: "text",
                },
                field2: {
                  placeholder: "placeholder",
                  type: "boolean",
                  header: "boolean",
                },
                field3: {
                  placeholder: "placeholder",
                  type: "numeric",
                  header: "numeric",
                },
                field4: {
                  placeholder: "placeholder",
                  type: "radio",
                  header: "radio",
                },
              }} />
            <Form
              submitLabel={"submit"}
              fields={{
                field1: {
                  placeholder: "placeholder",
                  header: "text",
                },
                field2: {
                  placeholder: "placeholder",
                  type: "boolean",
                  header: "boolean",
                },
                field3: {
                  placeholder: "placeholder",
                  type: "numeric",
                  header: "numeric",
                },
                field4: {
                  placeholder: "placeholder",
                  type: "radio",
                  header: "radio",
                },
              }} />
          </div>} />
      <ComponentDemo
        name="List"
        Component={<><List elements={["el 1", "el 2", "el 3"]} />
          <div style={{ marginTop: "20px" }} />
          <List dark elements={["el 1", "el 2", "el 3"]} /></>} />
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
            <div style={{ display: "flex", flexDirection: "column", padding: "0.6rem" }}>
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
            </div>
          </div>
        }
        name="Table"
      />
    </Container>
  );
};

export default MoleculesPage;
