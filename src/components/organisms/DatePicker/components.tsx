import React from "react";

import { MobrixUiReactiveComponent } from "../../../utils/global";

import { CalendarDate } from "../Calendar/types";
import { DatePickerProps } from "./types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { getMonthsDuration } from "../Calendar/utils";

import { CalendarIcon } from "./icons";

import Container from "../../molecules/Container";
import Dropdown from "../../molecules/Dropdown";
import Modal from "../../molecules/Modal";
import Calendar from "../Calendar";
import Button from "../../atoms/Button";

const datePickerComponent: MobrixUiReactiveComponent<
  CalendarDate,
  DatePickerProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  onChange,
  setValue,
  today: todayDate,
  value,
  months: customMonths = defaultMonths,
  days: customDays = defaultDays,
  startMonth,
  startYear,
  hideArrows,
  fromToday,
  dayLabel,
  onViewChange,
  animated,
  ...commonProps
}) => {
  const [isVisible, setVisible] = React.useState<boolean>(false);

  const year = value.year && value.year > 0 ? value.year : todayDate.year;
  const month =
    value.month !== undefined && value.month >= 0 && value.month <= 11
      ? value.month
      : todayDate.month;

  const monthsDuration = getMonthsDuration(year);

  const months = customMonths.map((el, index) => ({ name: el }));

  const day =
    value.day && value.day > 0 && value.day <= monthsDuration[month]
      ? value.day
      : todayDate.dayOfTheMonth;

  const days = new Array(monthsDuration[month])
    .fill(" ")
    .map((el, index) => ({ name: String(index + 1) }));

  const years = new Array(50)
    .fill(" ")
    .map((el, index) => Number(todayDate.year - 50 + index))
    .concat(
      new Array(30).fill("").map((el, index) => Number(index + todayDate.year))
    );

  /* istanbul ignore next */
  const calendarFocusCallback = () => !commonProps.hide && setVisible(false);

  return [
    <div key="date_picker_box" className="date-picker-box">
      <Container dark={commonProps.dark} className="buttons">
        <div className="date-selectors">
          <Dropdown
            value={day - 1}
            dark={commonProps.dark}
            unstyled
            hideArrow
            onChange={(selectedDay) =>
              setValue({
                month,
                year,
                day: selectedDay + 1,
              })
            }
            content={days}
            key="date_picker_day_selector"
            id="date_picker_day_selector"
            className="element days"
          />
          <Dropdown
            dark={commonProps.dark}
            unstyled
            value={month}
            hideArrow
            content={months}
            key="date_picker_month_selector"
            id="date_picker_month_selector"
            className="element months"
            onChange={(selectedMonth) =>
              setValue({
                month: selectedMonth,
                day: 1,
                year,
              })
            }
          />
          <Dropdown
            dark={commonProps.dark}
            unstyled
            hideArrow
            onChange={(selectedYear) =>
              setValue({
                month,
                day: 1,
                year: Number(years[selectedYear]),
              })
            }
            content={years.map((el, index) => ({ name: String(el) }))}
            value={years.indexOf(year)}
            key="date_picker_year_selector"
            id="date_picker_year_selector"
            className="element years"
          />
        </div>
        <Button
          unstyled
          dark={commonProps.dark}
          onClick={() => setVisible(!isVisible)}
          key="date_picker_calendar_button"
          id="date_picker_calendar_button"
          className="element"
        >
          {CalendarIcon}
        </Button>
      </Container>
    </div>,
    <Modal
      hide={!isVisible}
      className="date-picker-modal"
      key="date_picker_modal"
      animated={animated}
      onClose={() => setVisible(false)}
      dark={true}
    >
      <Calendar
        animated={animated}
        className="date-picker-calendar"
        days={customDays}
        months={customMonths}
        startMonth={startMonth}
        startYear={startYear}
        hideArrows={hideArrows}
        fromToday={fromToday}
        onViewChange={onViewChange}
        dayLabel={dayLabel}
        value={{ day, month, year }}
        onChange={(date) => {
          onChange && onChange(date);
          setValue(date);
        }}
        onFocusLost={calendarFocusCallback}
        dark={commonProps.dark}
      />
    </Modal>,
  ];
};

export default datePickerComponent;
