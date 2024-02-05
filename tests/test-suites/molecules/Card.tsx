import React from "react";
import { mount } from "enzyme";
import { Card } from "../../../src";

const cardTest = () => {
  describe("Card", () => {
    test("Rendering test", () => {
      const wrapper = mount(
        <Card
          headerProps={{}}
          bodyProps={{}}
          footerProps={{}}
          header="Test header"
          body="Test body"
          footer="Test footer"
        >
          Test label
        </Card>
      );
      expect(wrapper);
    });
  });
};

export default cardTest;
