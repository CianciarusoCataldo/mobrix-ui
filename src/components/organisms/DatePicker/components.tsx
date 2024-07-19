import React from "react";

import {
  CalendarDate,
  DatePickerProps,
  MbxUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { getMonthsDuration } from "../Calendar/utils";

import { CalendarIcon } from "../../../icons/generic";

import Modal from "../../molecules/Modal";
import Calendar from "../Calendar";
import IconButton from "../../atoms/IconButton";
import Label from "../../atoms/Label";

const DatePickerInternalComponent: MbxUiReactiveComponent<
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
  calendarProps,
  /* istanbul ignore next */
  onChange = () => {},
  /* istanbul ignore next */
  onClose = () => {},
  ...commonProps
}) => {
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const year = value.year && value.year > 0 ? value.year : todayDate.year;
  const month =
    value.month !== undefined && value.month >= 0 && value.month <= 11
      ? value.month
      : todayDate.month;

  const monthsDuration = getMonthsDuration(year);

  const day =
    value.dayOfTheMonth &&
    value.dayOfTheMonth > 0 &&
    value.dayOfTheMonth <= monthsDuration[month]
      ? value.dayOfTheMonth
      : todayDate.dayOfTheMonth;

  /* istanbul ignore next */
  const onCloseCallback = () => {
    onClose();
    setVisible(false);
  };

  return [
    <div key="dpk_sels" data-mbx-cls="date-s">
      <Label key="day">{String(day)}</Label>
      <Label key="month">{String(customMonths[month])}</Label>
      <Label key="year">{String(year)}</Label>
    </div>,
    <IconButton
      disabled={disabled}
      dark={commonProps.dark}
      onClick={() => setVisible(true)}
      key="dpk_cal_bt"
      features={{ noShFc: true }}
    >
      <CalendarIcon hover={commonProps.hover} disabled={disabled} />
    </IconButton>,
    <Modal
      disabled={disabled}
      hide={!isVisible}
      key="dpk_mod"
      animated={animated}
      onClose={onCloseCallback}
    >
      <Calendar
        shadow={false}
        days={customDays}
        months={customMonths}
        startMonth={startMonth}
        startYear={startYear}
        disabled={disabled}
        hideArrows={hideArrows}
        fromToday={fromToday}
        onViewChange={onViewChange}
        dayLabel={dayLabel}
        value={{ day, month, year }}
        onChange={(date) => {
          onChange(date);
          setValue(date);
        }}
        dark={commonProps.dark}
        labelProps={{ dark: true }}
        {...calendarProps}
      />
    </Modal>,
  ];
};

export default DatePickerInternalComponent;
