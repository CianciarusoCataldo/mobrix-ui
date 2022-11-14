import "./styles.css";

import React from "react";
import classNames from "classnames";

import { CalendarComponent, CalendarDate } from "./types";

import { defaultDays, defaultMonths } from "./constants";

import { getDateMatrix, getMonthsDuration, today } from "./utils";
import { buildComponent, withMobrixUiValue } from "../../../utils";

import { arrowIcon } from "../../molecules/Carousel/icons";
import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import Table from "../../molecules/Table";
import { DeepPartial } from "../../../utils/global";

const Calendar: CalendarComponent = ({
  value: inputValue,
  shadow,
  hideArrows,
  days = defaultDays,
  months: customMonths = defaultMonths,
  onViewChange,
  onChange,
  startYear,
  startMonth,
  fromToday = true,
  dayLabel,
  ...commonProps
}) => {
  const todayDate = today();

  return withMobrixUiValue<DeepPartial<CalendarDate>>({
    name: "mobrix-ui-calendar",
    commonProps,
    inputValue,
    defaultValue: {
      year: todayDate.year,
      month: todayDate.month,
      day: todayDate.dayOfTheMonth,
    },
    render: (value, setValue) => {
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
        const actualYear =
          startYear && startYear > 0 ? startYear : todayDate.year;
        const actualMonth =
          startMonth !== undefined && startMonth >= 0 && startMonth <= 11
            ? startMonth
            : todayDate.month;

        displayDate({ month: actualMonth, year: actualYear });
      }, [startMonth, startYear]);

      const months = getMonthsDuration(onScreenDate.year);

      const dateMatrix = getDateMatrix({ ...onScreenDate, day: 1 }, months).map(
        (week, indexWeek) => {
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
                key={"date-button-" + day + "-" + month + "-" + year}
                id={"date-button-" + day + "-" + month + "-" + year}
                unstyled
                style={{ width: "100%" }}
                className={classNames("date-element", {
                  selected:
                    value?.year === onScreenDate.year &&
                    value.month === onScreenDate.month &&
                    value.day === day,
                })}
                disabled={isDisabled}
                hide={day < 0}
                onClick={() => {
                  onChange && onChange({ ...onScreenDate, day });
                  setValue({
                    month: onScreenDate.month,
                    year: onScreenDate.year,
                    day,
                  });
                }}
              >
                <Label
                  key="date_label"
                  className={classNames("date-label", {
                    today:
                      fromToday &&
                      day === todayDate.dayOfTheMonth &&
                      onScreenDate.month === todayDate.month &&
                      onScreenDate.year === todayDate.year,
                  })}
                  value={day > 0 ? String(day) : " "}
                  dark={commonProps.dark}
                />
              </Button>
            );
          });
        }
      );

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
        <div className="selector-element">
          <Button
            onClick={() => {
              arrowActions[direction]();
              onViewChange && onViewChange({ ...onScreenDate, day: 1 });
            }}
            hide={hideArrows}
            dark={commonProps.dark}
            unstyled
            key={"arrow-" + direction}
            id={"arrow-" + direction}
            className={"arrow " + direction}
          >
            {arrowIcon}
          </Button>
        </div>
      );

      return [
        <div className="top-selector" key="date_top_selector">
          {getArrowButton("left")}
          <Label
            className="actual-date"
            value={`${customMonths[onScreenDate.month]} ${onScreenDate.year}`}
            dark={commonProps.dark}
          />
          {getArrowButton("right")}
        </div>,
        <Table
          key="calendar_table"
          id="calendar-table"
          unstyled={commonProps.unstyled}
          shadow={shadow}
          dark={commonProps.dark}
          headers
          rows={[days.map((dayName) => dayName.slice(0, 3)), ...dateMatrix]}
        />,
      ];
    },
  });
};

export default Calendar;
