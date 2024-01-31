import React from "react";
import { mount } from "enzyme";
import { Table } from "../../../src";

const tableTest = () => {
  describe("Table", () => {
    test("Rendering test", () => {
      const onClickStub = jest.fn()
      let wrapper = mount(<Table />);
      expect(wrapper);

      wrapper = mount(
        <Table
        onClick={onClickStub}
          rows={[
            ["Test element 1", "Test element 2"],
            ["Test element 3", "Test element 4"],
          ]}
        />
      );

      wrapper.find('[data-mbx-test="cell_0_0"]').simulate("click");
      expect(onClickStub).toBeCalled;

      wrapper = mount(
        <Table
          headerClassName="test-class"
          rowClassName="test-class"
          cellClassName="test-class"
          cellProps={{}}
          headersProps={{}}
          rowProps={{}}
          rows={[
            ["Test element 1", "Test element 2"],
            ["Test element 3", "Test element 4"],
          ]}
        />
      );

      wrapper.find('[data-mbx-test="cell_0_0"]').simulate("click");
      expect(wrapper);
    });
  });
};

export default tableTest;
