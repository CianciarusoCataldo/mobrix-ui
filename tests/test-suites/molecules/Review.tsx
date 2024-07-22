import React from "react";
import { mount } from "enzyme";
import { Review } from "../../../src";

const reviewTest = () => {
  describe("Review", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Review />);
      expect(wrapper);
      wrapper = mount(
        <Review
          rate={3}
          url="www.example.com"
          user="Test user"
          description="Test review description"
          icon={<div key="test_review_icon">icon</div>}
        />
      );
      expect(wrapper);
    });
    test("UI test", () => {
      let wrapper = mount(<Review />);
      expect(wrapper);
      wrapper = mount(<Review url="www.example.com" />);
      expect(wrapper.find('svg[data-mbx-img="link"]')).toHaveLength(1);
      wrapper = mount(<Review logo={<div data-mbx-test="logo" />} />);
      expect(wrapper);
      wrapper = mount(
        <Review logo={<div data-mbx-test="logo" />} url="www.example.com" />
      );
      expect(wrapper);
    });
  });
};

export default reviewTest;
