import React from "react";
import { mount } from "enzyme";
import { EmbeddedVideo } from "../../../src";

const embeddedVideoTest = () => {
  describe("EmbeddedVideo", () => {
    test("Rendering test", () => {
      let wrapper = mount(<EmbeddedVideo />);
      expect(wrapper);

      wrapper = mount(
        <EmbeddedVideo url="https://www.youtube.com/watch?v=O5PuFu3_iy0" />
      );
      expect(wrapper);

      wrapper = mount(
        <EmbeddedVideo url="https://www.dailymotion.com/video/x2nfpl3" />
      );
      expect(wrapper);
    });
  });
};

export default embeddedVideoTest;
