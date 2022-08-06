import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { Table } from "../../../src";

renderingTest(Table, {
  rows: [
    ["header 1", "header 2"],
    ["element 1", "element 2"],
  ],
  headers: true,
});

describeTest("UI test", () => {
  test("if headers === true, first row elements will be showed as headers", () => {
    const wrapper = mount(
      <Table
        rows={[
          ["header 1", "header 2"],
          ["element 1", "element 2"],
        ]}
        headers
      />
    );
    expect(wrapper.find(".header").length).toBe(2);
  });
});
