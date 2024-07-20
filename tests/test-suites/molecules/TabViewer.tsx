import React, { lazy } from "react";
import { mount } from "enzyme";
import { TabViewer } from "../../../src";

const drawerTest = () => {
  const testTabs = [
    { label: "Tab 1", content: <div data-id="test-tab-1" /> },
    { label: "Tab 2", content: <div data-id="test-tab-2" /> },
    {
      label: "Tab 3",
      lazy: React.lazy(() => import("../../core/utils/TestComponent")),
    },
  ];

  describe("TabViewer", () => {
    test("Rendering test", () => {
      let wrapper = mount(<TabViewer active />);
      expect(wrapper);
      wrapper = mount(
        <TabViewer
          tabs={[
            {
              label: "Tab 3",
              lazy: React.lazy(() => import("../../core/utils/TestComponent")),
            },
          ]}
          selected={-1}
        />
      );
    });

    test("Clicking on a tab trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(<TabViewer tabs={testTabs} />);
      wrapper
        .find('[data-mbx-cls="tabls"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("click");
      expect(wrapper.find('[data-id="test-tab-2"]').length).toBe(1);

      wrapper = mount(
        <TabViewer
          selected={0}
          tabClassName=" "
          tabSelectedClassName=" "
          tabUnselectedClassName=" "
          tabViewClassName=" "
          onChange={onChangeStub}
          tabs={testTabs}
        />
      );
      wrapper
        .find('[data-mbx-cls="tabls"] [data-mbx-id="btn"]')
        .at(1)
        .simulate("click");
      expect(onChangeStub).toBeCalledWith(1);
    });
  });
};

export default drawerTest;
