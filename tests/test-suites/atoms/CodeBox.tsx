import React from "react";
import { mount } from "enzyme";
import { CodeBox } from "../../../src";

const codeBoxTest = () => {
  describe("CodeBox", () => {
    test("Rendering test", () => {
      const wrapper = mount(
        <CodeBox environment="javascript" value="import {} from 'mobrix-ui';" />
      );
      expect(wrapper);
    });
    test("Copy icon test", () => {
      const copyStub = jest.fn();
      const wrapper = mount(
        <CodeBox
          highlight
          noCopyButton
          value={`npm i 'mobrix-ui' "mobrix-engine"`}
        />
      );
      navigator.clipboard.writeText = copyStub;
      wrapper
        .find(
          '[data-mbx-class="codebox-copy-icon"] [data-mbx-id="icon-button"]'
        )
        .simulate("click");
      expect(copyStub).toBeCalled;
    });
  });
};

export default codeBoxTest;
