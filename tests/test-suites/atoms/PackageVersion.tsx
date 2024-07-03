import React from "react";
import { mount } from "enzyme";
import { PackageVersion } from "../../../src";

const packageVersionTest = () => {
  describe("PackageVersion", () => {
    const userName = "CianciarusoCataldo";
    const branch = "main";
    const repo = "mobrix-ui";

    test("rendering test", () => {
      let wrapper = mount(<PackageVersion />);
      expect(wrapper);
      wrapper = mount(<PackageVersion name={repo} />);
      expect(wrapper);
      wrapper = mount(
        <PackageVersion name={repo} user={userName} source="github" />
      );
      expect(wrapper);

      wrapper = mount(
        <PackageVersion
          shadow
          name={repo}
          user={userName}
          source="github-release"
        />
      );
      expect(wrapper);

      wrapper = mount(
        <PackageVersion
          shadow
          branch=""
          source="github"
          name={repo}
          user={userName}
        />
      );
      expect(wrapper);
    });

    test("with fetch error", () => {
      (fetch as jest.Mock<any, any>).mockImplementationOnce(() =>
        Promise.reject("API is down")
      );
      const wrapper = mount(<PackageVersion name={repo} />);
      expect(wrapper);
    });

    test("with redirect url", () => {
      (fetch as jest.Mock<any, any>).mockImplementationOnce(() =>
        Promise.resolve({ url: "redirect-url" })
      );
      let wrapper = mount(
        <PackageVersion
          source="github-release"
          name={repo}
          user={userName}
          branch={branch}
        />
      );
      expect(wrapper);

      (fetch as jest.Mock<any, any>).mockImplementationOnce(() =>
        Promise.resolve({
          url: `https://github.com/${userName}/${repo}/releases/tag/`,
        })
      );
      wrapper = mount(
        <PackageVersion
          source="github-release"
          name={repo}
          user={userName}
          branch={branch}
        />
      );
      expect(wrapper);
    });

    test("with compiler error", () => {
      const wrapper = mount(
        <PackageVersion
          name={repo}
          // @ts-ignore
          source="invalid-source"
        />
      );
      expect(wrapper);
    });
  });
};

export default packageVersionTest;
