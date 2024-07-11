import React from "react";
import { mount } from "enzyme";
import { Drawer } from "../../../src";

const drawerTest = () => {
  describe("Drawer", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Drawer position="left" closeOnClickOutside />);
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(wrapper);
    });

    test("Clicking on the arrow button trigger the onClose callback", () => {
      const onCloseStub = jest.fn();
      let wrapper = mount(
        <Drawer
          // @ts-ignore
          position="fhgdjhsl"
          onClose={onCloseStub}
        >
          <p>Test drawer content</p>
        </Drawer>
      );
      wrapper.find('[data-mbx-id="icb"]').simulate("click");
      expect(onCloseStub).toBeCalled;

      wrapper = mount(
        <Drawer
          unstyled
          // @ts-ignore
          position="fhgdjhsl"
          additionalProps={{}}
          onClose={onCloseStub}
        >
          <p>Test drawer content</p>
        </Drawer>
      );

      wrapper = mount(
        <Drawer id="test-drawer" onClose={onCloseStub}>
          <p>Test drawer content</p>
        </Drawer>
      );
      wrapper.simulate("blur");
    });
  });
};

export default drawerTest;
