import React from "react";
import { mount } from "enzyme";
import { Table } from "../../../src";

const tableTest = () => {
  describe("Table", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Table />);
      expect(wrapper);
      wrapper = mount(
        <Table
          rows={[
            ["Test element 1", "Test element 2"],
            ["Test element 3", "Test element 4"],
          ]}
        />
      );
      expect(wrapper);
    });
  });
};

export default tableTest;
