import React from "react";
import { mount } from "enzyme";
import { Carousel } from "../../../src";

const carouselTest = () => {
  const testElements = [
    <p>Test element 1</p>,
    <p>Test element 2</p>,
    <p>Test element 3</p>,
    <p>Test element 4</p>,
  ];

  describe("Carousel", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Carousel />);

      expect(wrapper);

      wrapper = mount(<Carousel elements={testElements} />);
      wrapper.find('[data-mbx-cls="anext"]').simulate("click");

      expect(wrapper);
    });

    test("Clicking on the arrow buttons trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Carousel elements={testElements} onChange={onChangeStub} />
      );
      wrapper.find('[data-mbx-cls="anext"]').simulate("click");

      expect(onChangeStub).toBeCalledWith(1);

      wrapper.find('[data-mbx-cls="aprev"]').simulate("click");

      expect(onChangeStub).toBeCalledWith(0);

      wrapper.find('[data-mbx-cls="anext"]').simulate("click");
      wrapper.find('[data-mbx-cls="anext"]').simulate("click");
      wrapper.find('[data-mbx-cls="anext"]').simulate("click");
      expect(onChangeStub).toBeCalledWith(3);
    });

    test("Clicking on the dots buttons trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Carousel elements={testElements} onChange={onChangeStub} />
      );
      wrapper.find("[data-mbx-cls='csdot']").at(2).simulate("mouseenter");
      wrapper.find("[data-mbx-cls='csdot']").at(2).simulate("mouseleave");
      wrapper.find("[data-mbx-cls='csdot']").at(2).simulate("click");

      expect(onChangeStub).toBeCalledWith(2);

      wrapper.find("[data-mbx-cls='csdot']").at(1).simulate("click");

      expect(onChangeStub).toBeCalledWith(1);
    });
  });
};

export default carouselTest;
