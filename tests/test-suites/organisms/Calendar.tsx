import React from "react";
import { mount } from "enzyme";
import { Calendar } from "../../../src";
import {
  defaultDays,
  defaultMonths,
} from "../../../src/components/organisms/Calendar/constants";
import { today } from "../../../src/components/organisms/Calendar/utils";

const calendarTest = () => {
  describe("Calendar", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Calendar dayLabel={false} />);
      expect(wrapper);
      const todayDate = today();
      wrapper = mount(
        <Calendar
          labelClassName="test"
          startMonth={todayDate.month}
          startYear={todayDate.year}
          value={todayDate}
          months={defaultMonths}
          days={defaultDays}
          fromToday={false}
        />
      );
      wrapper.find('[data-mbx-calendar-day=3]').simulate("click");
      wrapper.find('[data-mbx-calendar-arrow="left"]').simulate("click");
      expect(wrapper);
    });

    test("Selecting a day trigger the onChange callback", () => {
      const onChangeStub = jest.fn();

      let wrapper = mount(
        <Calendar fromToday={false} onChange={onChangeStub} />
      );
      wrapper.update();
      wrapper.find('[data-mbx-calendar-day=4]').simulate("click");

      expect(onChangeStub).toBeCalled;
    });

    test("Changing the showed month (actual view) trigger the onViewChange callback", () => {
      const onViewChangeStub = jest.fn();

      let wrapper = mount(
        <Calendar fromToday={false} onViewChange={onViewChangeStub} />
      );

      for (let i = 0; i < 12; i++) {
        wrapper.find('[data-mbx-calendar-arrow="right"]').simulate("click");
      }

      for (let i = 0; i < 11; i++) {
        wrapper.find('[data-mbx-calendar-arrow="left"]').simulate("click");
      }
      expect(onViewChangeStub).toBeCalled;
    });
  });
};

export default calendarTest;
