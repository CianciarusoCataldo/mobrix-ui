import React from "react";
import { mount } from "enzyme";
import { Image } from "../../../src";

const imageTest = () => {
  describe("Image", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" />
      );
      expect(wrapper);

      wrapper = mount(
        <Image
          width={25}
          height={25}
          alt="test-image"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        />
      );
      expect(wrapper);
    });
  });
};

export default imageTest;
