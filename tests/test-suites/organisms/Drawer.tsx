import React from "react";
import { mount } from "enzyme";
import { Drawer } from "../../../src";

const drawerTest = () => {
  describe("Drawer", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Drawer position="left" />);
      wrapper.find('[data-id="drawer_close_button"]').simulate("click");
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
      wrapper.find('[data-id="drawer_close_button"]').simulate("click");
      expect(onCloseStub).toBeCalled;
    });
  });
};

export default drawerTest;
