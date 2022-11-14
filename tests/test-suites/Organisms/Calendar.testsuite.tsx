import React from "react";
import { mount } from "enzyme";
import { renderingTest } from "../../core/utils/helpers";

import { Calendar } from "../../../src";

const onChangeStub = jest.fn();

renderingTest(Calendar, {
  value: { month: 2, year: 1993 },
  hideArrows: true,
  dayLabel: false,
  onchange: () => {},
  days: ["", "", "", "", "", "", "", "", "", ""],
  months: ["", "", "", "", "", "", "", "", "", "", "", ""],
});

test("date button click", () => {
  let wrapper = mount(<Calendar value={{ month: 2, year: 1993 }} />);

  wrapper.find('[data-id="date-button-1-2-1993"] button').simulate("click");

  wrapper.find('[data-id="arrow-left"] button').simulate("click");
  wrapper.find('[data-id="arrow-left"] button').simulate("click");
  wrapper.find('[data-id="arrow-left"] button').simulate("click");

  wrapper.find('[data-id="arrow-right"] button').simulate("click");
  wrapper.find('[data-id="arrow-right"] button').simulate("click");

  expect(wrapper);

  wrapper = mount(
    <Calendar onChange={onChangeStub} value={{ month: 2, year: 1993 }} />
  );

  wrapper.find('[data-id="date-button-19-2-1993"] button').simulate("click");

  expect(onChangeStub).toBeCalled;
});

test("With invalid month and years set", () => {
  const wrapper = mount(
    <Calendar onChange={onChangeStub} value={{ month: -1, year: -1 }} />
  );

  expect(wrapper);
});
