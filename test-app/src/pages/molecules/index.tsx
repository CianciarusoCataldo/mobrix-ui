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
  List,
  ExpandableContainer,
  Modal,
  Popup,
  RadioButtonGroup,
  Review,
  Calendar,
} from "../../mobrix-ui-preview";
import {
  Demo,
  SelectProp,
  BooleanProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

const userIcon = (
  <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 0" fill="#334d5c" />
    <path
      d="M23 35.8c-.3-1.9.8-6 .8-6h-7.3s1.2 4 .8 6c-.1 1-2.4 2.1-4 3a20 20 0 0 0 13.6 0c-1.5-1-3.8-2-4-3Zm0 0"
      fill="#41af87"
    />
    <path
      d="M20 4.8c-6.8 0-15 6.8-12.3 14.6C10.1 26.3 16.3 32 20 32c3.7 0 10-5.8 12.3-12.6C34.9 11.6 26.8 4.8 20 4.8Zm0 0"
      fill="#4abc96"
    />
    <path
      d="M18.8 20s-.4-1.2-1.2-2.4c-1.1-1.6-2.4-2.4-3.9-2.4-1.4 0-2.9.8-4.5 2.4v.2s2 3.1 6 3.1c1.2 0 2.3-.2 3.5-.6 0 0 .1-.2 0-.2Zm0 0"
      fill="#3faa83"
    />
    <path d="M10.1 17.8s2.6 4 7.8 2c0 0-2.4-7.4-7.8-2Zm0 0" fill="#22343d" />
    <path
      d="M13.1 16.6c0 .6 1.7.8 1.8.3 0-.5-1.7-.8-1.8-.3Zm0 0"
      fill="#cbefe1"
    />
    <path
      d="M30.8 17.6c-1.6-1.6-3.1-2.4-4.5-2.4-1.5 0-2.8.8-3.9 2.4a9.1 9.1 0 0 0-1.2 2.5l.1.1c1.2.5 2.3.7 3.4.7 4 0 6-3 6.1-3.1v-.2Zm0 0"
      fill="#3faa83"
    />
    <path
      d="M22.1 19.8c5.2 2 7.8-2 7.8-2-5.4-5.4-7.8 2-7.8 2Zm0 0"
      fill="#22343d"
    />
    <path
      d="M26.9 16.6c-.1-.5-1.8-.2-1.8.3.1.5 1.8.3 1.8-.3Zm0 0"
      fill="#cbefe1"
    />
    <path
      d="M19.3 24.1c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.4 0c-.3 0-.6.2-.6.5s1.2.3 1.2 0-.3-.5-.6-.5Zm1.9 3.9c0 .3-1.2.3-2.7.3-1.5 0-2.7 0-2.7-.3 0-.2 1.2-.3 2.7-.3 1.5 0 2.7 0 2.7.3Zm0 0"
      fill="#329670"
    />
  </svg>
);

const MoleculesPage = () => {
  const [hide, setHide] = useState(null);
  const [isVisible, setVisible] = React.useState(false);
  const [isPopupVisible, setPopupVisible] = React.useState(false);

  const ComponentDemo = ({
    Component,
    name,
  }: {
    Component: JSX.Element;
    name: string;
  }) => {
    return (
      <Container
        noBackground
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
    <Container noBackground className="App" style={{ height: "110%" }}>
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
            <Card
              dark
              header="header"
              body="Card dark no background"
              footer="footer"
              noBackground
            />
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
            <div style={{ marginTop: "20px" }} />{" "}
            <Card disabled header="header" body="body" footer="footer" />{" "}
            <div style={{ marginTop: "20px" }} />
            <Card dark disabled header="header" body="body" footer="footer" />
          </div>
        }
        name="Card"
      />
      <ComponentDemo
        name="Carousel"
        Component={
          <>
            <Carousel
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
            <Carousel
              dark
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
            <Carousel
              disabled
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
            <Carousel
              dark
              disabled
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
            <Carousel
              noBackground
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
            <Carousel
              dark
              noBackground
              elements={[
                <img alt="" src={Elem0} width="250px" height="250px" />,
                <img alt="" src={Elem1} width="250px" height="250px" />,
                <img alt="" src={Elem2} width="250px" height="250px" />,
              ]}
            />
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
            <div style={{ marginTop: "20px" }} />
            <Dropdown disabled elements={["el 1", "el 2", "el 3"]} />
            <div style={{ marginTop: "20px" }} />
            <Dropdown disabled dark elements={["el 1", "el 2", "el 3"]} />
            <div style={{ marginTop: "20px" }} />
            <Dropdown noBackground elements={["el 1", "el 2", "el 3"]} />
            <div style={{ marginTop: "20px" }} />
            <Dropdown noBackground dark elements={["el 1", "el 2", "el 3"]} />
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
            <DismissableCard
              noHover
              alwaysVisible
              header="Always visible nohover"
              body="body"
              footer="footer"
            />{" "}
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
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              disabled
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              disabled
              dark
              header="header"
              body="body"
              footer="footer"
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              header="header"
              body="body"
              footer="footer"
              noBackground
            />
            <div style={{ marginTop: "20px" }} />
            <DismissableCard
              header="header"
              body="body"
              footer="footer"
              noBackground
              dark
            />
          </div>
        }
        name="DismissableCard"
      />
      <ComponentDemo
        name="ExpandableContainer"
        Component={
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <ExpandableContainer
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>
            <ExpandableContainer
              dark
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>

            <ExpandableContainer
              disabled
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>
            <ExpandableContainer
              disabled
              dark
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>

            <ExpandableContainer
              noBackground
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>
            <ExpandableContainer
              noBackground
              dark
              expanded={
                <div>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                  <p>Expanded area</p>
                </div>
              }
            >
              <div>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </div>
            </ExpandableContainer>
          </div>
        }
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
        name="List"
        Component={
          <>
            <List elements={["el 1", "el 2", "el 3"]} />
            <div style={{ marginTop: "20px" }} />
            <List dark elements={["el 1", "el 2", "el 3"]} />
          </>
        }
      />
      <ComponentDemo
        name="Modal"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setVisible(true)}>Show</button>
            <Modal
              animated={true}
              onClose={() => setVisible(false)}
              hide={!isVisible}
            >
              <Calendar fromToday />
            </Modal>
          </div>
        }
      />
      <ComponentDemo
        name="Popup"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => setPopupVisible(!isPopupVisible)}>
              toggle popups
            </button>
            <Popup hide={!isPopupVisible}>
              <div>Content</div>
            </Popup>
          </div>
        }
      />
      <ComponentDemo
        name="RadioButtonGroup"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <RadioButtonGroup
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
            <RadioButtonGroup
              dark
              horizontal
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
            <RadioButtonGroup
              disabled
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
            <RadioButtonGroup
              disabled
              dark
              horizontal
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
            <RadioButtonGroup
              noBackground
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
            <RadioButtonGroup
              noBackground
              dark
              horizontal
              buttons={[
                { text: "textPosition = left", textPosition: "left" },
                { text: "textPosition = top", textPosition: "top" },
                { text: "textPosition = right", textPosition: "right" },
                { text: "textPosition = bottom", textPosition: "bottom" },
              ]}
            />
          </div>
        }
      />
      <ComponentDemo
        name="Review"
        Component={
          <div>
            <Review
              user="User"
              rate={4}
              url="https://github.com"
              logo="link"
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              user="User"
              logo="link"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              user="User"
              logo="github"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              user="User"
              logo="github"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              user="User"
              logo="facebook"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              user="User"
              logo="facebook"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              user="User"
              logo="twitter"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              user="User"
              logo="twitter"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              user="User"
              logo="linkedin"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              user="User"
              logo="linkedin"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              disabled
              user="User"
              rate={4}
              url="https://github.com"
              logo="link"
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              disabled
              user="User"
              logo="link"
              rate={4}
              description="description"
              icon={userIcon}
            />
            <Review
              noBackground
              user="User"
              rate={4}
              url="https://github.com"
              logo="link"
              description="description"
              icon={userIcon}
            />
            <Review
              dark
              noBackground
              user="User"
              logo="link"
              rate={4}
              description="description"
              icon={userIcon}
            />
          </div>
        }
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.6rem",
              }}
            >
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
                noBackground
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
                noBackground
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
