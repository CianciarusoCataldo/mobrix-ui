import React from "react";
import {
  Calendar,
  Container,
  DatePicker,
  Form,
  Label,
} from "../../mobrix-ui-preview";

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
        background={false}
        shadow={false}
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
    <Container
      shadow={false}
      background={false}
      className="App"
      dark
      style={{ height: "110%" }}
    >
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.6rem",
              }}
            >
              <Calendar
                fromToday={false}
                labelClassName="calendar-test-label"
              />
            </div>
            <Calendar />
            <Calendar dark fromToday={false} />
            <Calendar dark />
            <Calendar disabled />
            <Calendar disabled dark />
            <Calendar background={false} />
            <Calendar background={false} dark />
          </div>
        }
        name="Calendar"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DatePicker
              fromToday={false}
              labelClassName="calendar-test-label"
            />
            <DatePicker dark fromToday={false} />
            <DatePicker
              animated={false}
              dark
              background={false}
              calendarProps={{ background: false }}
            />
            <DatePicker calendarProps={{ dark: true }} />
            <DatePicker animated disabled />
            <DatePicker dark disabled animated />
          </div>
        }
        name="DatePicker"
      />
      <ComponentDemo
        name="Form"
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Form
              title="Test Form"
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
              }}
              onSubmit={(values) => console.log(values)}
            />
            <Form
              title="Test Form"
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
              }}
            />
            <Form
              title="Test Form"
              shadow={false}
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
              }}
            />
            <Form
              title="Test Form disabled"
              disabled
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
              }}
            />
            <Form
              title="Test Form disabled"
              dark
              disabled
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
              }}
            />
            <Form
              title="Test Form"
              background={false}
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
              }}
            />
            <Form
              title="Test Form"
              dark
              background={false}
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
              }}
            />
          </div>
        }
      />
    </Container>
  );
};

export default AtomsPage;
