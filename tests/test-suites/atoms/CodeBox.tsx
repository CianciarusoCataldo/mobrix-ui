import React from "react";
import { mount } from "enzyme";
import { CodeBox } from "../../../src";

const codeBoxTest = () => {
  describe("CodeBox", () => {
    test("Rendering test", () => {
      let wrapper = mount(<CodeBox />);
      expect(wrapper);

      wrapper = mount(
        <CodeBox environment="javascript" value="import {} from 'mobrix-ui';" />
      );
      expect(wrapper);

      wrapper = mount(
        <CodeBox environment="javascript" value='import {} from "mobrix-ui";' />
      );
      expect(wrapper);
    });
    test("Copy icon test", () => {
      const copyStub = jest.fn();
      const wrapper = mount(
        <CodeBox
          highlight={false}
          copyButton={false}
          value={`npm i 'mobrix-ui' "mobrix-engine"`}
        />
      );
      navigator.clipboard.writeText = copyStub;
      wrapper
        .find('[data-mbx-scl*="cd-cp"] [data-mbx-id="icb"]')
        .simulate("click");
      expect(copyStub).toBeCalled;
    });
  });
};

export default codeBoxTest;
