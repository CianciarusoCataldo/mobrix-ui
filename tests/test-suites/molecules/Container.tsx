import React from "react";
import { mount } from "enzyme";
import { Container } from "../../../src";

const containerTest = () => {
  describe("Container", () => {
    test("Rendering test", () => {
      let wrapper = mount(
        <Container animated animation="fade-in">
          Test Container
        </Container>
      );
      expect(wrapper);
    });
  });
};

export default containerTest;
