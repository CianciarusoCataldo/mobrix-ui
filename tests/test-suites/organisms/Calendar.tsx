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
          active
          labelClassName="test"
          startMonth={todayDate.month}
          startYear={todayDate.year}
          value={todayDate}
          months={defaultMonths}
          days={defaultDays}
          fromToday={false}
        />
      );
      wrapper.find("td:not([data-mbx-dsb])").at(2).simulate("click");
      wrapper.find('div [data-mbx-id="icb"]').at(0).simulate("click");
      expect(wrapper);
    });

    test("Selecting a day trigger the onChange callback", () => {
      const onChangeStub = jest.fn();

      let wrapper = mount(
        <Calendar fromToday={false} onChange={onChangeStub} />
      );
      wrapper.update();
      wrapper.find("td:not([data-mbx-dsb])").at(3).simulate("click");

      expect(onChangeStub).toBeCalled;
    });

    test("Focusing a day and pressing Enter key trigger the onChange callback", () => {
      const onChangeKeyStub = jest.fn();

      let wrapper = mount(
        <Calendar
          startYear={1993}
          startMonth={2}
          fromToday={false}
          onChange={onChangeKeyStub}
        />
      );
      wrapper.update();
      wrapper.find("td:not([data-mbx-dsb])").at(18).simulate("click");
      wrapper
        .find("td:not([data-mbx-dsb])")
        .at(19)
        .simulate("keyDown", { keyCode: 13, code: "Enter", key: "Enter" });

      expect(onChangeKeyStub).toBeCalledWith({
        dayOfTheMonth: 19,
        year: 1993,
        month: 2,
        day: 19,
      });
    });

    test("Changing the showed month (actual view) trigger the onViewChange callback", () => {
      const onViewChangeStub = jest.fn();

      let wrapper = mount(
        <Calendar fromToday={false} onViewChange={onViewChangeStub} />
      );

      for (let i = 0; i < 12; i++) {
        wrapper.find('div [data-mbx-id="icb"]').at(1).simulate("click");
      }

      for (let i = 0; i < 11; i++) {
        wrapper.find('div [data-mbx-id="icb"]').at(0).simulate("click");
      }
      expect(onViewChangeStub).toBeCalled;
    });
  });
};

export default calendarTest;
