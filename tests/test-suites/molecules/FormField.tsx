import React from "react";
import { mount } from "enzyme";
import { FormField } from "../../../src";

const formFieldTest = () => {
  describe("FormField", () => {
    test("Rendering test", () => {
      let wrapper = mount(<FormField />);
      wrapper.find("input").simulate("change", "32");

      expect(wrapper);

      wrapper = mount(<FormField animated required />);

      // @ts-ignore
      wrapper.find("input").simulate("change", "32");

      wrapper.find("input").simulate("change", undefined);

      wrapper.find("input").simulate("keydown", { keyCode: 13, code: "Enter" });

      wrapper.find("input").simulate("change", "32");

      // @ts-ignore
      wrapper.find("input").simulate("keydown", { keyCode: 13 });

      expect(wrapper);

      wrapper = mount(<FormField animated validate={() => false} />);

      // @ts-ignore
      wrapper.find("input").simulate("change", "32");

      wrapper.find("input").simulate("change", undefined);

      wrapper.find("input").simulate("change", "32");

      // @ts-ignore
      wrapper.find("input").simulate("keydown", { keyCode: 13 });

      expect(wrapper);
    });
  });
};

export default formFieldTest;
