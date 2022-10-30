import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Rater } from "../../../src";

renderingTest(Rater, {
  value: 3,
  max: 6,
  onChange: () => {},
  readonly: true,
});

describeTest("click test", () => {
  test("onChange callback", () => {
    const clickStub = jest.fn();
    let wrapper = mount(<Rater value={3} max={6} onChange={clickStub} />);
    wrapper.find('div[data-id="vote_1"] button').simulate("click");
    expect(clickStub).toBeCalledWith(2);
  });
});

describeTest("hover test", () => {
  test("onMouseEnter", () => {
    let wrapper = mount(<Rater value={3} max={6} onChange={() => {}} />);
    wrapper.find('div[data-id="vote_4"] button').simulate("mouseenter");
    expect(wrapper);
  });

  test("onMouseLeave", () => {
    let wrapper = mount(<Rater value={3} max={6} onChange={() => {}} />);
    wrapper.find('div[data-id="vote_4"] button').simulate("mouseleave");
    expect(wrapper);
  });
});
