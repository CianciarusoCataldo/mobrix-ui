import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Form } from "../../../src";

renderingTest(Form, {
  fields: {
    field1: {
      header: "Field 1 header",
    },
    field2: {
      type: "boolean",
      header: "Field 2 header",
    },
    field3: {
      type: "numeric",
      header: "Field 3 header",
    },
  },
  submitLabel: "Submit test button",
  onSubmit: () => {},
});

describeTest("submit click test", () => {
  test("without onSubmit callback", () => {
    const wrapper = mount(
      <Form
        fields={{
          field1: {
            type: "boolean",
            header: "Field 1 header",
          },
          field2: {
            header: "Field 2 header",
          },
        }}
        submitLabel="Submit"
      />
    );
    wrapper.find('div[data-id="form-field-0"]').simulate("click");
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "" } });
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "aaaaa" } });

    wrapper.find('div[data-id="form-submit-button"] button').simulate("click");

    expect(wrapper);
  });

  test("with onSubmit callback, it will be called with a dictionary that includes every field input value", () => {
    const submitStub = jest.fn();

    const wrapper = mount(
      <Form
        fields={{
          "Field 1": {
            header: "Field 1 - header",
            type: "numeric",
          },
          "Field 2": {
            header: "Field 2 - header",
          },
          "Field 3": {
            header: "Field 3 - header",
            type: "boolean",
          },
        }}
        onSubmit={submitStub}
        submitLabel="Submit"
      />
    );
    wrapper
      .find('div[data-id="form-field-0"] input')
      .simulate("change", { target: { value: 3 } });
    wrapper
      .find('div[data-id="form-field-1"] input')
      .simulate("change", { target: { value: "test input 2" } });
    wrapper.find('div[data-id="form-field-2"] .container').simulate("click");

    wrapper.find('div[data-id="form-submit-button"] button').simulate("click");
    expect(submitStub).toBeCalledWith({
      "Field 1": 3,
      "Field 2": "test input 2",
      "Field 3": true,
    });
  });
});
