import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Counter } from "../../../src";

renderingTest(Counter, {
  value: 12,
  onChange: () => {},
});

describeTest("changing value test", () => {
  const onChangeStub = jest.fn();

  test("onChange callback is triggered", () => {
    const wrapper = mount(<Counter value={0} onChange={onChangeStub} />);
    wrapper.find("input").simulate("change", { target: { value: "12" } });
    expect(onChangeStub).toBeCalledWith(12);
  });

  test("with undefined value", () => {
    const wrapper = mount(<Counter value={0} />);
    wrapper.find("input").simulate("change", { target: { value: undefined } });
    expect(wrapper.find("input").at(0).props().value).toBe(0);
  });
});

describeTest("input common parameters", () => {
  test("if no value is set, the given placeholder is showed instead", () => {
    const wrapper = mount(<Counter placeholder="no value" />);
    expect(wrapper.html()).toContain("no value");
  });

  test("readonly mode", () => {
    const onChangeStub = jest.fn();
    const wrapper = mount(
      <Counter value={0} readOnly onChange={onChangeStub} />
    );
    wrapper.find("input").simulate("change", { target: { value: "12" } });
    expect(wrapper.find("input").at(0).props().value).toBe(0);
    expect(onChangeStub).not.toBeCalled;
  });
});
