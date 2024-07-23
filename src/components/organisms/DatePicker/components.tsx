import React from "react";

import {
  CalendarDate,
  DatePickerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { durations } from "../Calendar/utils";

import { CalendarIcon } from "../../../icons/generic";

import Modal from "../../molecules/Modal";
import Calendar from "../Calendar";
import IconButton from "../../atoms/IconButton";
import Label from "../../atoms/Label";

const DpickComponent: MbxUiReactiveComponent<
  CalendarDate,
  DatePickerProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
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
  disabled,
  active,
  calendarProps,
  shadow,
  /* istanbul ignore next */
  onChange = () => {},
  /* istanbul ignore next */
  onClose = () => {},
  a11y,
  dark,
  hover,
}) => {
  const [isVisible, setVisible] = React.useState<boolean>(false);
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
    setVisible(false);
  };

  const cProps = { a11y, disabled, dark, hover };
  return [
    <div key="dpk_sels" data-mbx-date-s>
      <Label {...cProps} key="day">
        {String(day)}
      </Label>
      <Label {...cProps} key="month">
        {String(customMonths[month])}
      </Label>
      <Label {...cProps} key="year">
        {String(year)}
      </Label>
    </div>,
    <IconButton
      {...cProps}
      onClick={() => setVisible(true)}
      key="dpk_cal_bt"
      active={active}
    >
      <CalendarIcon {...cProps} />
    </IconButton>,
    <Modal
      {...cProps}
      hide={!isVisible}
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
        onChange={(date) => {
          onChange(date);
          setValue(date);
        }}
        labelProps={{ dark: true }}
        {...calendarProps}
      />
    </Modal>,
  ];
};

export default DpickComponent;
