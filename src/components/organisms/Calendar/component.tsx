import React from "react";

import {
  CalendarDate,
  CalendarProps,
  DeepPartial,
  MobrixUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "./constants";

import { getMonthsDuration, getDateMatrix } from "./utils";

import { arrowIcon } from "../../molecules/Carousel/icons";

import { Button, IconButton, Label } from "../../atoms";
import { Table } from "../../molecules";

const CalendarComponent: MobrixUiReactiveComponent<
  DeepPartial<CalendarDate>,
  CalendarProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  value,
  shadow,
  disabled,
  today: todayDate,
  hideArrows,
  days = defaultDays,
  months: customMonths = defaultMonths,
  onViewChange = () => {},
  onChange = () => {},
  startYear,
  startMonth,
  fromToday = true,
  dayLabel = true,
  setValue,
  labelClassName,
  labelProps = {},
  hover,
  ...commonProps
}) => {
  const customProps = labelClassName
    ? { className: labelClassName, ...labelProps }
    : labelProps;
  const year = startYear && startYear > 0 ? startYear : todayDate.year;
  const month =
    startMonth !== undefined && startMonth >= 0 && startMonth <= 11
      ? startMonth
      : todayDate.month;

  const [onScreenDate, displayDate] = React.useState<{
    month: number;
    year: number;
  }>({
    year,
    month,
  });

  React.useEffect(() => {
    const actualYear = startYear && startYear > 0 ? startYear : todayDate.year;
    const actualMonth =
      startMonth !== undefined && startMonth >= 0 && startMonth <= 11
        ? startMonth
        : todayDate.month;

    displayDate({ month: actualMonth, year: actualYear });
  }, [startMonth, startYear]);

  const months = getMonthsDuration(onScreenDate.year);

  const basicMatrix = getDateMatrix({ ...onScreenDate, day: 1 }, months);

  const arrowActions: Record<"left" | "right", () => void> = {
    left: () =>
      onScreenDate.month > 0
        ? displayDate({
            ...onScreenDate,
            month: onScreenDate.month - 1,
          })
        : displayDate({ year: onScreenDate.year - 1, month: 11 }),
    right: () =>
      onScreenDate.month < 11
        ? displayDate({
            ...onScreenDate,
            month: onScreenDate.month + 1,
          })
        : displayDate({ year: onScreenDate.year + 1, month: 0 }),
  };

  const getArrowButton = (direction: "left" | "right") => (
    <IconButton
      disabled={disabled}
      onClick={() => {
        arrowActions[direction]();
        onViewChange({ ...onScreenDate, day: 1 });
      }}
      hide={hideArrows}
      hover={hover}
      dark={commonProps.dark}
      key={"arrow_" + direction}
      additionalProps={{
        "data-mbx-calendar-arrow": direction,
        "data-mbx-opacityhover": hover && !disabled,
      }}
      {...customProps}
    >
      {arrowIcon}
    </IconButton>
  );

  let components: JSX.Element[] = [];

  dayLabel &&
    components.push(
      <div data-mbx-class="top-selector" key="date_top_selector">
        {getArrowButton("left")}
        <Label
          additionalProps={{
            "data-mbx-class": "actual-date",
          }}
          dark={commonProps.dark}
          {...customProps}
        >{`${customMonths[onScreenDate.month]} ${onScreenDate.year}`}</Label>
        {getArrowButton("right")}
      </div>
    );

  components.push(
    <Table
      disabled={disabled}
      key="calendar_table"
      additionalProps={{
        "data-mbx-calendar-table": "true",
      }}
      propsCallback={(row, column) => {
        if (row > 0) {
          const isDisabled = fromToday
            ? onScreenDate.year < todayDate.year ||
              (onScreenDate.year === todayDate.year &&
                onScreenDate.month < todayDate.month) ||
              (onScreenDate.year === todayDate.year &&
                onScreenDate.month === todayDate.month &&
                basicMatrix[row - 1][column] < todayDate.dayOfTheMonth)
            : false;

          const isNotDay = basicMatrix[row - 1][column] <= 0;

          const extraProps =
            !disabled && !isDisabled && !isNotDay
              ? {
                  onClick: () => {
                    onChange({
                      ...onScreenDate,
                      dayOfTheMonth: basicMatrix[row - 1][column],
                      day: basicMatrix[row - 1][column],
                    });
                    setValue({
                      month: onScreenDate.month,
                      year: onScreenDate.year,
                      day: basicMatrix[row - 1][column],
                    });
                  },
                }
              : {};

          return {
            ...(basicMatrix[row - 1][column] > 0 && {
              "data-mbx-calendar-day": basicMatrix[row - 1][column],
            }),
            "data-mbx-calendar-today":
              fromToday &&
              basicMatrix[row - 1][column] === todayDate.dayOfTheMonth &&
              onScreenDate.month === todayDate.month &&
              onScreenDate.year === todayDate.year,
            "data-mbx-selected":
              value.year === onScreenDate.year &&
              value.month === onScreenDate.month &&
              value.day === basicMatrix[row - 1][column],
            "data-mbx-disabled": isDisabled || isNotDay,
            ...extraProps,
          };
        } else return {};
      }}
      background={commonProps.background}
      shadow={shadow}
      dark={commonProps.dark}
      headers
      rows={[
        days.map((dayName) => dayName.slice(0, 3)),
        ...basicMatrix.map((row) =>
          row.map((element) => (element > 0 ? String(element) : ""))
        ),
      ]}
    />
  );

  return components;
};

export default CalendarComponent;
