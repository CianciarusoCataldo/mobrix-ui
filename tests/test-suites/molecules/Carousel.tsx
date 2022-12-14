import React from "react";
import { mount } from "enzyme";
import { Carousel } from "../../../src";

const carouselTest = () => {
  const testElements = [
    <p>Test element 1</p>,
    <p>Test element 2</p>,
    <p>Test element 3</p>,
  ];

  describe("Carousel", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Carousel />);
      wrapper.find("button[data-id='right_arrow']").simulate("click");
      expect(wrapper);
    });

    test("Clicking on the arrow buttons trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Carousel elements={testElements} onChange={onChangeStub} />
      );
      wrapper.find("button[data-id='right_arrow']").simulate("click");

      expect(onChangeStub).toBeCalledWith(1);

      wrapper.find("button[data-id='left_arrow']").simulate("click");

      expect(onChangeStub).toBeCalledWith(0);
    });

    test("Clicking on the dots buttons trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Carousel elements={testElements} onChange={onChangeStub} />
      );
      wrapper.find("button[data-id='dot_2']").simulate("mouseenter");
      wrapper.find("button[data-id='dot_2']").simulate("mouseleave");
      wrapper.find("button[data-id='dot_2']").simulate("click");

      expect(onChangeStub).toBeCalledWith(2);

      wrapper.find("button[data-id='dot_1']").simulate("click");

      expect(onChangeStub).toBeCalledWith(1);
    });
  });
};

export default carouselTest;
