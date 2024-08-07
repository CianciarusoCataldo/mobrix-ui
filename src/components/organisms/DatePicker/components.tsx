import React from "react";

import {
  BuilderComponent,
  CalendarDate,
  DatePickerProps,
  MbxUiComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { durations } from "../Calendar/utils";

import { CalendarIcon } from "../../../icons/generic";

import Modal from "../../molecules/Modal";
import Calendar from "../Calendar";
import IconButton from "../../atoms/IconButton";
import Label from "../../atoms/Label";

const Component: MbxUiComponent<
  DatePickerProps & { today: CalendarDate & { dayOfTheMonth: number } },
  BuilderComponent[]
> = ({
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
  disabled,
  active,
  calendarProps,
  shadow,
  onChange,
  /* istanbul ignore next */
  onClose = () => {},
  a11y,
  dark,
  hover,
}) => {
  const [vis, setVis] = React.useState<boolean>(false);
  const year = value.year && value.year > 0 ? value.year : todayDate.year;
  const month =
    value.month !== undefined && value.month >= 0 && value.month <= 11
      ? value.month
      : todayDate.month;

  const mDuration = durations(year);

  const day =
    value.dayOfTheMonth &&
    value.dayOfTheMonth > 0 &&
    value.dayOfTheMonth <= mDuration[month]
      ? value.dayOfTheMonth
      : todayDate.dayOfTheMonth;

  /* istanbul ignore next */
  const onCloseCallback = () => {
    onClose();
    setVis(false);
  };

  const cProps = { a11y, disabled, dark, hover };

  const dlabel = (val, key) => (
    <Label key={key} {...cProps}>
      {String(val)}
    </Label>
  );

  return [
    <div key="dpk_sels" data-mbx-date-s>
      {dlabel(day, "day")}
      {dlabel(customMonths[month], "month")}
      {dlabel(year, "year")}
    </div>,
    <IconButton
      {...cProps}
      onClick={() => setVis(true)}
      key="dpk_cal_bt"
      active={active}
    >
      <CalendarIcon />
    </IconButton>,
    <Modal
      {...cProps}
      hide={!vis}
      key="dpk_mod"
      animated={animated}
      onClose={onCloseCallback}
    >
      <Calendar
        {...cProps}
        dark={false}
        active={active}
        shadow={shadow}
        days={customDays}
        months={customMonths}
        startMonth={startMonth}
        startYear={startYear}
        hideArrows={hideArrows}
        fromToday={fromToday}
        onViewChange={onViewChange}
        dayLabel={dayLabel}
        value={{ day, month, year }}
        onChange={onChange}
        labelProps={{ dark: true }}
        {...calendarProps}
      />
    </Modal>,
  ];
};

export default Component;
