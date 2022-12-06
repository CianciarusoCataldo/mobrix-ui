import React from "react";
import { mount } from "enzyme";
import { Dropdown } from "../../../src";

const dropdownTest = () => {
  describe("Dropdown", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Dropdown
          onFocusLost={() => {}}
          content={["Dropdown element 1", "Dropdown element 2"]}
          value={2}
        />
      );
      wrapper.find('button[data-id="options_menu"]').simulate("click");
      wrapper.find('button[data-id="dropdown_option_1"]').simulate("focus");
      wrapper.find('button[data-id="dropdown_option_1"]').simulate("click");
      expect(wrapper);
      wrapper = mount(<Dropdown />);
      expect(wrapper);
    });

    test("Selecting an element trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(
        <Dropdown
          onChange={onChangeStub}
          content={[
            { name: "Dropdown test element 1" },
            {
              name: "Dropdown test element 2",
              icon: <div>icon</div>,
            },
          ]}
        />
      );
      wrapper.find('button[data-id="options_menu"]').simulate("click");
      wrapper.find('button[data-id="dropdown_option_1"]').simulate("focus");

      wrapper.find('button[data-id="dropdown_option_1"]').simulate("click");

      expect(onChangeStub).lastCalledWith(1);
    });

    describe("Keyboard handlers test", () => {
      test("Enter", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            content={[
              { name: "Dropdown test element 1" },
              {
                name: "Dropdown test element 2",
                icon: <div>icon</div>,
              },
            ]}
          />
        );

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Enter" });

        wrapper.find('div[id="mobrix-ui-dropdown"]').simulate("focus");

        //Selecting an item
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Enter" });

        expect(onChangeStub).lastCalledWith(1);
      });

      test("Escape", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            content={[
              { name: "Dropdown test element 1" },
              {
                name: "Dropdown test element 2",
                icon: <div>icon</div>,
              },
            ]}
          />
        );

        wrapper.find('div[id="mobrix-ui-dropdown"]').simulate("focus");
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Escape" });
        expect(onChangeStub).not.toBeCalled;
      });

      test("Arrow down and Arrow up", () => {
        const onChangeStub = jest.fn();
        let wrapper = mount(
          <Dropdown
            onChange={onChangeStub}
            content={[
              { name: "Dropdown test element 1" },
              {
                name: "Dropdown test element 2",
                icon: <div>icon</div>,
              },
            ]}
          />
        );

        wrapper.find('div[id="mobrix-ui-dropdown"]').simulate("focus");
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Enter" });
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "Escape" });
        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowDown" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowUp" });

        wrapper
          .find('div[id="mobrix-ui-dropdown"]')
          .simulate("keyDown", { code: "ArrowUp" });

        expect(onChangeStub).not.toBeCalled;
      });
    });
  });
};

export default dropdownTest;
