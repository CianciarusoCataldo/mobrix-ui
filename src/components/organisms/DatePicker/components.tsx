import React from "react";

import {
  CalendarDate,
  DatePickerProps,
  MobrixUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "../Calendar/constants";

import { getMonthsDuration } from "../Calendar/utils";

import { CalendarIcon } from "./icons";

import Container from "../../molecules/Container";
import Modal from "../../molecules/Modal";
import Calendar from "../Calendar";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";

const DatePickerInternalComponent: MobrixUiReactiveComponent<
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
  calendarProps = {},
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
      value.dayOfTheMonth && value.dayOfTheMonth > 0 && value.dayOfTheMonth <= monthsDuration[month]
        ? value.dayOfTheMonth
        : todayDate.dayOfTheMonth;

    /* istanbul ignore next */
    const calendarFocusCallback = () => !commonProps.hide && setVisible(false);

    const DateLabel = ({ children }) => <Label additionalProps={{
      "data-mobrix-ui-class": "date-picker-element",
    }}
      dark={commonProps.dark}
    >{children}</Label>

    return [
      <div data-mobrix-ui-class="date-selectors" key="date_picker_selectors">
        <DateLabel>{String(day)}</DateLabel>
        <DateLabel>{String(customMonths[month])}</DateLabel>
        <DateLabel>{String(year)}</DateLabel>
      </div>,
      <Button
        unstyled
        dark={commonProps.dark}
        onClick={() => setVisible(true)}
        key="date_picker_calendar_button"
        additionalProps={{
          "data-mobrix-ui-test": "date_picker_calendar_button"
        }}
      >
        {CalendarIcon}
      </Button>,
      <Modal
        hide={!isVisible}
        key="date_picker_modal"
        animated={animated}
        onClose={() => setVisible(false)}
        dark={true}
        additionalProps={{
          "data-mobrix-ui-class": "date-picker-modal"
        }}
        closeOutside
      >
        <Calendar
          animated={animated}
          additionalProps={{ "data-mobrix-ui-test": "date_picker_calendar" }}
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
          //onFocusLost={calendarFocusCallback}
          dark={commonProps.dark}
          labelProps={{ dark: true }}
          {...calendarProps}
        />
      </Modal>,
    ];
  };

export default DatePickerInternalComponent;
