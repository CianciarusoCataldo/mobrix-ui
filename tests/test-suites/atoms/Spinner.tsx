import React from "react";
import { mount } from "enzyme";
import { Spinner } from "../../../src";

const spinnerTest = () => {
  describe("Spinner", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Spinner value="non-valid" />);
      expect(wrapper);
      wrapper = mount(<Spinner shadow value="non-valid" statuses={{}} />);
      expect(wrapper);
      wrapper = mount(<Spinner statuses={{ test: <div /> }} value="test" />);
      expect(wrapper);
    });
  });
};

export default spinnerTest;
