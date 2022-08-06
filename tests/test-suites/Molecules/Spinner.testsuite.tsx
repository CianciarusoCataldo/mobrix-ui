import React from "react";
import { mount } from "enzyme";

import { renderingTest } from "../../core/utils/helpers";

import { Spinner } from "../../../src";
import { SpinnerComponent } from "../../../src/components/molecules/Spinner/types";

renderingTest(
  Spinner,
  {
    value: "success",
  },
  true
);

test("with loading state", () => {
  const wrapper = mount(<Spinner value="error" />);
  expect(wrapper.find("[data-id='error-icon']").length > 0);
});

test("with success state", () => {
  const wrapper = mount(<Spinner value="success" />);
  expect(wrapper.find("[data-id='success-icon']").length > 0);
});

test("with error state", () => {
  const wrapper = mount(<Spinner value="loading" />);
  expect(wrapper.find("[data-id='loading-icon']").length > 0);
});

test("with a non valid state", () => {
  /* eslint-disable */
  const wrapper = mount(<Spinner value="non-valid-state" />);
  expect(wrapper.find("[data-id='loading-icon']").length > 0);
});

test("with custom states", () => {
  const CustomSpinner: SpinnerComponent<"custom"> = Spinner;
  /* eslint-disable */
  const wrapper = mount(
    <CustomSpinner
      value="custom"
      statuses={{ custom: <div data-id="test-img" /> }}
    />
  );
  expect(wrapper.find("[data-id='test-img']").length > 0);
});
