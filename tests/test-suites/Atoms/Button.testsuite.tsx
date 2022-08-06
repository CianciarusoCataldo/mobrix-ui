import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Button } from "../../../src";

renderingTest(Button, { onClick: () => {} });

describeTest("click test", () => {
  test("when Button is enabled, clicking on the Button will trigger onClick callback", () => {
    const clickStub = jest.fn();

    const wrapper = mount(
      <Button onClick={clickStub}>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(clickStub).toBeCalled;
  });

  test("when Button is disabled, clicking on the Button won't trigger onClick callback", () => {
    const wrapper = mount(
      <Button onClick={() => {}} disabled unstyled>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("click");
    expect(wrapper);
  });
});

describeTest("hover test", () => {
  test("onMouseEnter callback", () => {
    const onMouseEnterStub = jest.fn();

    const wrapper = mount(
      <Button onMouseEnter={onMouseEnterStub}>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("mouseenter");
    expect(onMouseEnterStub).toBeCalled;
  });

  test("onMouseLeave callback", () => {
    const onMouseLeaveStub = jest.fn();

    const wrapper = mount(
      <Button onMouseLeave={onMouseLeaveStub}>
        <p>Testing button</p>
      </Button>
    );
    wrapper.find("button").simulate("mouseleave");
    expect(onMouseLeaveStub).toBeCalled;
  });
});
