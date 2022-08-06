import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { CheckBox } from "../../../src";

renderingTest(CheckBox, { value: true, onChange: () => {} });

describeTest("icon visibility", () => {
  test("if value === false, icon is not showed", () => {
    const wrapper = mount(<CheckBox value={false} onChange={() => {}} />);
    expect(wrapper.find("svg").length).toBe(0);
  });

  test("if value === true, icon is showed", () => {
    const wrapper = mount(<CheckBox value={true} onChange={() => {}} />);
    expect(wrapper.find("svg").length).toBe(1);
  });
});

describeTest("click test", () => {
  test("without onChange callback", () => {
    const wrapper = mount(<CheckBox />);
    wrapper.find("#mobrix-ui-checkbox .container").simulate("click");
    expect(wrapper);
  });

  test("onChange callBack is triggered", () => {
    const onChangeStub = jest.fn();
    const wrapper = mount(<CheckBox onChange={onChangeStub} />);
    wrapper.find("#mobrix-ui-checkbox .container").simulate("click");
    expect(onChangeStub).toBeCalledWith(true);
  });
});
