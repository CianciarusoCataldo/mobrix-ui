import React from "react";
import { mount } from "enzyme";
import { Dropdown } from "../../../src";

const dropdownTest = () => {
  describe("Dropdown", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Dropdown
          onFocusLost={() => {}}
          elements={["Dropdown element 1", "Dropdown element 2"]}
          value={2}
        />
      );
      wrapper.find('[data-mbx-id="btn"]').simulate("click");
      wrapper
        .find('[data-mbx-id="popup"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("focus");
      wrapper
        .find('[data-mbx-id="popup"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("click");
      expect(wrapper);
      wrapper = mount(<Dropdown disabled />);
      expect(wrapper);
    });

    test("Selecting an element trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Dropdown
          onChange={onChangeStub}
          elements={["Dropdown element 1", "Dropdown element 2"]}
        />
      );
      wrapper.find('[data-mbx-id="btn"]').simulate("click");
      wrapper
        .find('[data-mbx-id="popup"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("focus");
      wrapper
        .find('[data-mbx-id="popup"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("click");

      expect(onChangeStub).lastCalledWith(1);
    });

    describe("Keyboard handlers test", () => {
      test("Enter", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            elements={["Dropdown element 1", "Dropdown element 2"]}
          />
        );

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Enter" });

        wrapper.find('[data-mbx-id="dd"]').simulate("focus");

        //Selecting an item
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Enter" });

        expect(onChangeStub).lastCalledWith(1);
      });

      test("Escape", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            elements={["Dropdown element 1", "Dropdown element 2"]}
          />
        );

        wrapper.find('[data-mbx-id="dd"]').simulate("focus");
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Escape" });
        expect(onChangeStub).not.toBeCalled;
      });

      test("Arrow down and Arrow up", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            elements={["Dropdown element 1", "Dropdown element 2"]}
          />
        );

        wrapper.find('[data-mbx-id="dd"]').simulate("focus");
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "Escape" });
        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowUp" });

        wrapper
          .find('[data-mbx-id="dd"]')
          .simulate("keyDown", { code: "ArrowUp" });

        expect(onChangeStub).not.toBeCalled;
      });
    });
  });
};

export default dropdownTest;
