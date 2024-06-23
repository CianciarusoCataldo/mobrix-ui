import React from "react";
import { mount } from "enzyme";
import { List } from "../../../src";

const listTest = () => {
  describe("List", () => {
    test("Rendering test", () => {
      let wrapper = mount(<List />);
      expect(wrapper);
      wrapper = mount(<List elements={["Test element 1", "Test element 2"]} />);
      expect(wrapper);
    });

    test("If onChange is set, clicking on any element list trigger the onChange callback, passing the element index", () => {
      const onChangeStub = jest.fn();
      const wrapper = mount(
        <List
          onClick={onChangeStub}
          elements={[
            <div data-mbx-test="list_element_0">Test element 1</div>,
            "Test element 2",
          ]}
        />
      );
      wrapper.find('[data-mbx-test="list_element_0"]').simulate("click");
      expect(onChangeStub).toBeCalledWith(0);
    });
  });
};

export default listTest;
