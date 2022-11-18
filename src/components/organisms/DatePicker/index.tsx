import React from "react";

import "./styles.css";

import { DatePickerComponent } from "./types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { buildComponent } from "../../../utils";
import { getMonthsDuration, today } from "../Calendar/utils";

import { xIcon } from "../../molecules/Card/icons";

import Button from "../../atoms/Button";
import Calendar from "../Calendar";
import Dropdown from "../../molecules/Dropdown";
import Container from "../../molecules/Container";
import Modal from "../../molecules/Modal";
import { CalendarIcon } from "./icons";

const DatePicker: DatePickerComponent = ({
  onChange,
  value: inputValue,
  months: customMonths = defaultMonths,
  shadow,
  days: customDays = defaultDays,
  startMonth,
  startYear,
  hideArrows,
  fromToday,
  dayLabel,
  onViewChange,
  ...commonProps
}) => {
  const todayDate = today();
  const [value, setValue] = React.useState(
    inputValue || {
      year: todayDate.year,
      month: todayDate.month,
      day: todayDate.dayOfTheMonth,
    }
  );

  React.useEffect(() => {
    if (inputValue !== undefined && inputValue !== null) {
      setValue(inputValue);
    }
  }, [inputValue]);

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
    .concat(new Array(30).fill("").map((el, index) => Number(index + todayDate.year)));

  console.log(years.indexOf(year));
  console.log(year);

  return buildComponent({
    name: "mobrix-ui-date-picker",
    commonProps,
    Component: [
      <div key="date_picker_box" className="date-picker-box">
        <Container shadow={shadow} dark={commonProps.dark} className="buttons">
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
              className="element days"
            />
            <Dropdown
              dark={commonProps.dark}
              unstyled
              value={month}
              hideArrow
              content={months}
              key="date_picker_month_selector"
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
              className="element years"
            />
          </div>
          <Button
            unstyled
            onClick={() => setVisible(!isVisible)}
            key="date_picker_calendar_button"
            className="element"
          >
            {CalendarIcon}
          </Button>
        </Container>
      </div>,
      <Modal
        unstyled
        hide={!isVisible}
        className="date-picker-modal"
        key="date_picker_modal"
      >
        <div className="date-picker-calendar-container">
          <Button
            className="date-picker-close-button"
            unstyled
            onClick={() => setVisible(!isVisible)}
          >
            {xIcon}
          </Button>
          <Calendar
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
            dark={commonProps.dark}
          />
        </div>
      </Modal>,
    ],
  });
};

export default DatePicker;
