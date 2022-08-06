import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Input } from "../../../src";

renderingTest(Input, {
  value: "input text",
  onChange: () => {},
  readonly: true,
});

describeTest("changing value test", () => {
  const onChangeStub = jest.fn();

  test("onChange callback is triggered", () => {
    const wrapper = mount(<Input value="input text" onChange={onChangeStub} />);
    wrapper.find("input").simulate("change", { target: { value: "new text" } });
    expect(onChangeStub).toBeCalledWith("new text");
  });

  test("with undefined value", () => {
    const wrapper = mount(<Input value="input text" />);
    wrapper.find("input").simulate("change", { target: { value: undefined } });
    expect(wrapper.find("input").at(0).props().value).toBe("");
  });
});

describeTest("input common parameters", () => {
  test("if no value is set, the given placeholder is showed instead", () => {
    const wrapper = mount(<Input placeholder="no value" />);
    expect(wrapper.html()).toContain("no value");
  });

  test("readonly mode", () => {
    const onChangeStub = jest.fn();
    const wrapper = mount(
      <Input value="input text" readOnly onChange={onChangeStub} />
    );
    wrapper.find("input").simulate("change", { target: { value: "new text" } });
    expect(wrapper.find("input").at(0).props().value).toBe("input text");
    expect(onChangeStub).not.toBeCalled;
  });
});
