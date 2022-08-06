import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Carousel } from "../../../src";

renderingTest(Carousel, {
  onChange: () => {},
  elements: ["elem1", "elem2", "elem3"],
});

describeTest("click test", () => {
  test("onChange callback", () => {
    const onChangeStub = jest.fn();

    let wrapper = mount(
      <Carousel
        elements={["elem1", "elem2", "elem3"]}
        onChange={onChangeStub}
      />
    );
    wrapper.find('div[data-id="dot_1"] button').simulate("click");

    expect(onChangeStub).toBeCalledWith(1);
  });

  test("arrows", () => {
    const onChangeStub = jest.fn();

    let wrapper = mount(
      <Carousel
        elements={["elem1", "elem2", "elem3"]}
        onChange={onChangeStub}
      />
    );
    wrapper.find('div[data-id="right_arrow"] button').simulate("click");
    wrapper.find('div[data-id="left_arrow"] button').simulate("click");
    expect(onChangeStub).toBeCalledWith(0);
  });

  test("dots", () => {
    const onChangeStub = jest.fn();

    let wrapper = mount(
      <Carousel
        elements={["elem1", "elem2", "elem3"]}
        onChange={onChangeStub}
      />
    );
    wrapper.find('div[data-id="dot_1"] button').simulate("click");
    wrapper.find('div[data-id="dot_0"] button').simulate("click");
    expect(onChangeStub).toBeCalledWith(0);
  });
});

describeTest("dots hover test", () => {
  test("onMouseEnter", () => {
    let wrapper = mount(
      <Carousel elements={["elem1", "elem2", "elem3"]} onChange={() => {}} />
    );
    wrapper.find('div[data-id="dot_1"] button').simulate("mouseenter");
    expect(wrapper);
  });

  test("onMouseLeave", () => {
    let wrapper = mount(
      <Carousel elements={["elem1", "elem2", "elem3"]} onChange={() => {}} />
    );
    wrapper.find('div[data-id="dot_1"] button').simulate("mouseleave");
    expect(wrapper);
  });
});
