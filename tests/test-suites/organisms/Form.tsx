import React from "react";
import { mount } from "enzyme";
import { Form } from "../../../src";

const formTest = () => {
  describe("Form", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Form />);
      expect(wrapper);
      wrapper = mount(
        <Form
          fieldClassName="test-field-class"
          fields={{
            testField1: { type: "boolean" },
            testField2: { type: "numeric" },
            testField3: {},
          }}
        >
          <p>Form content</p>
        </Form>
      );
      wrapper
        .find('[data-mbx-scl*="f-field"] [data-mbx-id="field"]')
        .at(2)
        .simulate("change", "new test text");
      expect(wrapper);
    });
    test("Submit test", () => {
      const submitStub = jest.fn();
      let wrapper = mount(
        <Form
          onSubmit={submitStub}
          fieldClassName="test-field-class"
          fields={{
            testField1: { type: "boolean" },
            testField2: { type: "numeric" },
            testField3: { header: "Test field header" },
          }}
        />
      );
      wrapper
        .find('[data-mbx-scl*="f-field"] [data-mbx-id="inputbox"]')
        .simulate("change", "new test text");
      wrapper
        .find('[data-mbx-scl*="f-field"] [data-mbx-id="check"]')
        .simulate("click");

      wrapper.find('[data-mbx-scl*="s-bt"]').simulate("click");
      expect(submitStub).toBeCalledWith({
        testField1: true,
        testField2: undefined,
        testField3: "",
      });
    });
  });
};

export default formTest;
