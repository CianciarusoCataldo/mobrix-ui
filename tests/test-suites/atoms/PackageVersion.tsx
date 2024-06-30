import React from "react";
import { mount } from "enzyme";
import { PackageVersion } from "../../../src";

const packageVersionTest = () => {
  describe("PackageVersion", () => {
    test("rendering test", () => {
      let wrapper = mount(<PackageVersion />);
      expect(wrapper);
      wrapper = mount(<PackageVersion name="mobrix-ui" />);
      expect(wrapper);
      wrapper = mount(
        <PackageVersion
          name="mobrix-ui"
          source="github"
          user="CianciarusoCataldo"
        />
      );
      expect(wrapper);

      wrapper = mount(
        <PackageVersion
          shadow
          name="mobrix-ui"
          source="github-release"
          user="CianciarusoCataldo"
        />
      );
      expect(wrapper);
    });

    test("with fetch error", () => {
      (fetch as jest.Mock<any, any>).mockImplementationOnce(() =>
        Promise.reject("API is down")
      );
      const wrapper = mount(<PackageVersion name="mobrix-ui" />);
      expect(wrapper);
    });

    test("with redirect url", () => {
      (fetch as jest.Mock<any, any>).mockImplementationOnce(() =>
        Promise.resolve({ url: "redirect-url" })
      );
      const wrapper = mount(
        <PackageVersion
          source="github-release"
          name="mobrix-ui"
          user="CianciarusoCataldo"
          branch="main"
        />
      );
      expect(wrapper);
    });

    test("with compiler error", () => {
      const wrapper = mount(
        <PackageVersion
          name="mobrix-ui"
          // @ts-ignore
          source="invalid-source"
        />
      );
      expect(wrapper);
    });
  });
};

export default packageVersionTest;
