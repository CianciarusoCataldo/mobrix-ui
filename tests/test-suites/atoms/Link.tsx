import React from "react";
import { mount } from "enzyme";
import { Link } from "../../../src";

const linkTest = () => {
  describe("Link", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Link to="www.example.com">Test link</Link>);
      expect(wrapper);
      wrapper = mount(
        <Link
          to="www.example.com"
          newTab
          underline
          additionalProps={{ "mbx-test-class": "test" }}
        >
          Test link with that open a new tab
        </Link>
      );
      expect(wrapper.find("a").props().href).toBe("www.example.com");
      wrapper = mount(
        <Link disabled to="www.example.com">
          Test link
        </Link>
      );
      expect(wrapper.find("span").props().children).toBe("Test link");
    });
  });
};

export default linkTest;
