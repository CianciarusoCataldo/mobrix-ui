import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Dropdown } from "../../../src";

renderingTest(Dropdown, {
  content: [{ name: "element 1" }],
  onChange: () => {},
});

describeTest("click test", () => {
  const onChangeStub = jest.fn();

  test("onChange callback", () => {
    let wrapper = mount(
      <Dropdown content={[{ name: "element 1" }]} onChange={onChangeStub} />
    );
    wrapper.find('button[data-id="options-menu"]').simulate("click");
    wrapper.find('button[data-id="dropdown_option_0"]').simulate("click");
    expect(onChangeStub).toBeCalledWith(0);
  });
});
