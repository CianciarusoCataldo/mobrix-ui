import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Drawer } from "../../../src";

renderingTest(Drawer, {
  onClose: () => {},
  hide: false,
  children: <div>Test content</div>,
  position: "right",
});

describeTest("click test", () => {
  const elementStub = jest.fn();
  const onCloseStub = jest.fn();

  test("onClose callback", () => {
    let wrapper = mount(<Drawer onClose={onCloseStub} hide={false} />);

    wrapper.find('button[data-id="drawer_close_button"]').simulate("click");
    expect(onCloseStub).toBeCalled;
  });
});
