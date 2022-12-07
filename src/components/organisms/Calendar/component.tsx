import classNames from "classnames";
import React from "react";

import { DeepPartial, MobrixUiReactiveComponent } from "../../../utils/global";
import { CalendarDate, CalendarProps } from "./types";

import { defaultDays, defaultMonths } from "./constants";

import { getMonthsDuration, getDateMatrix } from "./utils";

import { arrowIcon } from "../../molecules/Carousel/icons";

import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import Table from "../../molecules/Table";

const CalendarComponent: MobrixUiReactiveComponent<
  DeepPartial<CalendarDate>,
  CalendarProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  value,
  shadow,
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
  ...commonProps
}) => {
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

  const dateMatrix = basicMatrix.map((week, indexWeek) => {
    return week.map((day, indexDay) => {
      const isDisabled =
        fromToday &&
        (onScreenDate.year < todayDate.year ||
          (onScreenDate.year === todayDate.year &&
            onScreenDate.month < todayDate.month) ||
          (onScreenDate.year === todayDate.year &&
            onScreenDate.month === todayDate.month &&
            day < todayDate.dayOfTheMonth));

      return (
        <Button
          key={"date-button-" + indexDay}
          id={isDisabled ? "disabled_date_button" : "date_button_" + day}
          unstyled
          style={{ width: "100%" }}
          className={classNames("date-element", {
            selected:
              value.year === onScreenDate.year &&
              value.month === onScreenDate.month &&
              value.day === day,
          })}
          disabled={isDisabled}
          hide={day <= 0}
          a11y={false}
          onClick={() => {
            onChange({ ...onScreenDate, day });
            setValue({
              month: onScreenDate.month,
              year: onScreenDate.year,
              day,
            });
          }}
        >
          <Label
            a11y={day > 0}
            key="date_label"
            dark={commonProps.dark}
            className={classNames("date-label", {
              today:
                fromToday &&
                day === todayDate.dayOfTheMonth &&
                onScreenDate.month === todayDate.month &&
                onScreenDate.year === todayDate.year,
            })}
          >
            {day > 0 ? String(day) : " "}
          </Label>
        </Button>
      );
    });
  });

  const changeDisplayedDate = (
    newValue: number,
    type: "year" | "month" | "day"
  ) => {
    displayDate({
      ...onScreenDate,
      [type]: newValue,
    });
  };

  const arrowActions: Record<"left" | "right", () => void> = {
    left: () =>
      onScreenDate.month > 0
        ? changeDisplayedDate(onScreenDate.month - 1, "month")
        : changeDisplayedDate(onScreenDate.year - 1, "year"),
    right: () =>
      onScreenDate.month < 11
        ? changeDisplayedDate(onScreenDate.month + 1, "month")
        : changeDisplayedDate(onScreenDate.year + 1, "year"),
  };

  const getArrowButton = (direction: "left" | "right") => (
    <div className="selector-element">
      <Button
        onClick={() => {
          arrowActions[direction]();
          onViewChange({ ...onScreenDate, day: 1 });
        }}
        hide={hideArrows}
        dark={commonProps.dark}
        unstyled
        key={"arrow_" + direction}
        id={"arrow_" + direction}
        className={"arrow " + direction}
      >
        {arrowIcon}
      </Button>
    </div>
  );

  let components: JSX.Element[] = [];

  dayLabel &&
    components.push(
      <div className="top-selector" key="date_top_selector">
        {getArrowButton("left")}
        <Label className="actual-date" dark={commonProps.dark}>{`${
          customMonths[onScreenDate.month]
        } ${onScreenDate.year}`}</Label>
        {getArrowButton("right")}
      </div>
    );

  components.push(
    <Table
      key="calendar_table"
      id="calendar-table"
      unstyled={commonProps.unstyled}
      shadow={shadow}
      dark={commonProps.dark}
      headers
      rows={[days.map((dayName) => dayName.slice(0, 3)), ...dateMatrix]}
    />
  );

  return components;
};

export default CalendarComponent;
