import React from "react";
import { mount } from "enzyme";

import { describeTest, renderingTest } from "../../core/utils/helpers";

import { ExpandableContainer } from "../../../src";

renderingTest(ExpandableContainer, {
  children: "test content",
  animated: true,
  expanded: "expanded area",
});

describeTest("click test", () => {
  test("onClick callback", () => {
    const wrapper = mount(
      <ExpandableContainer
        children={<div></div>}
        expanded={<div data-id="expanded_area">Expanded area</div>}
      />
    );

    expect(wrapper.find('div[data-id="expanded_area"]').length).toBe(1);

    wrapper.find('div[data-id="arrow_button"] button').simulate("click");

    expect(wrapper.find('div[data-id="expanded_area"]').length).toBe(0);
  });
});
