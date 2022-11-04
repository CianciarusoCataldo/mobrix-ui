import "./styles.css";

import React from "react";
import classNames from "classnames";

import { CalendarComponent } from "./types";

import { buildComponent } from "../../../utils";

import Button from "../../atoms/Button";
import Label from "../../atoms/Label";
import Table from "../../molecules/Table";
import Dropdown from "../../molecules/Dropdown";
import { arrowIcon } from "../../molecules/Carousel/icons";

const weekDays = [
  "Sunday ",
  "Monday",
  "Tuesday ",
  "Wednesday",
  "Thursday",
  "Friday ",
  "Saturday",
];

const leapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const Calendar: CalendarComponent = ({
  day: selectedDay,
  month: selectedMonth,
  year: SelectedYear,
  shadow,
  ...commonProps
}) => {
  const dateobj = new Date();

  const today = {
    year: dateobj.getFullYear(),
    month: dateobj.getMonth(),
    dayOfTheMonth: dateobj.getDate(),
    day: dateobj.getDay(),
  };

  const [day, setDay] = React.useState(selectedDay || dateobj.getDay());

  const [actualDay, setActualDay] = React.useState(today.dayOfTheMonth);

  const [month, setMonth] = React.useState(selectedMonth || dateobj.getMonth());

  const [year, setYear] = React.useState(SelectedYear || dateobj.getFullYear());

  const [fromDate, setFromDate] = React.useState<{
    year: number;
    day: number;
    month: number;
  } | null>(null);

  const [toDate, setToDate] = React.useState<{
    year: number;
    day: number;
    month: number;
  } | null>(null);

  const months = [
    { id: 0, name: "January", days: 31 },
    { id: 1, name: "February", days: leapYear(year) ? 29 : 28 },
    { id: 2, name: "March", days: 31 },
    { id: 3, name: "April", days: 31 },
    { id: 4, name: "May", days: 31 },
    { id: 5, name: "June", days: 30 },
    { id: 6, name: "July", days: 31 },
    { id: 7, name: "August", days: 31 },
    { id: 8, name: "September", days: 30 },
    { id: 9, name: "October", days: 31 },
    { id: 10, name: "November", days: 30 },
    { id: 11, name: "Dicember", days: 31 },
  ];

  const getDateMatrix = () => {
    const offset = new Date(year, month).getDay();

    let matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];

    let dayCounter = 1;

    for (let i = offset; i < 7; i++) {
      matrix[0][i] = dayCounter;
      dayCounter++;
    }

    for (let i = 1; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (dayCounter <= months[month].days) {
          matrix[i][j] = dayCounter;
          dayCounter++;
        }
      }
    }

    return matrix;
  };

  let dateMatrix = getDateMatrix().map((week, indexWeek) => {
    return week.map((day, indexDay) => (
      <Button
        unstyled
        style={{ width: "100%" }}
        className={classNames("date-element", {
          selected:
            day > 0 &&
            fromDate &&
            ((day === fromDate?.day &&
              month === fromDate.month &&
              year === fromDate.year) ||
              (toDate &&
                ((day === toDate.day &&
                  month === toDate.month &&
                  year === toDate.year) ||
                  (fromDate.year === toDate.year &&
                    fromDate.month === toDate.month &&
                    day > fromDate.day &&
                    day < toDate.day) ||
                  (toDate.month > fromDate.month &&
                    ((month === toDate.month && day < toDate.day) ||
                      (month === fromDate.month && day > fromDate.day)))))),
        })}
        onClick={() => {
          if (
            !(
              month < today.month ||
              (month === today.month && day < today.dayOfTheMonth) ||
              year < today.year
            )
          ) {
            if (
              !fromDate ||
              year < fromDate.year ||
              month < fromDate.month ||
              (year === fromDate.year &&
                month === fromDate.month &&
                day < fromDate.day)
            ) {
              setFromDate({ year, month, day });
            } else if (
              year === fromDate.year &&
              month === fromDate.month &&
              day === fromDate.day
            ) {
              setFromDate(null);
              setToDate(null);
            } else if (
              year >= fromDate.year &&
              ((month == fromDate.month && day > fromDate.day) ||
                month > fromDate.month)
            ) {
              setToDate({ year, month, day });
            } else if (
              year === toDate?.year &&
              month === toDate.month &&
              day === toDate.day
            ) {
              setToDate(null);
            }
          }
        }}
      >
        <Label
          className={classNames("date-label", {
            today:
              day === today.dayOfTheMonth &&
              month === today.month &&
              year === today.year,
          })}
          value={day > 0 ? String(day) : " "}
          dark={commonProps.dark}
        />
      </Button>
    ));
  });

  return buildComponent({
    name: "mobrix-ui-calendar",
    commonProps,
    Component: [
      <div className="dates-selector" key="selector">
        <div className="selector-element label-box">
          <Label
            className="day-label"
            value={weekDays[day]}
            dark={commonProps.dark}
          />
          <div className="dates-selector">
            <div className="selector-button">
              <Label
                style={{ marginRight: "0.2rem" }}
                className="selector-label"
                value={String(actualDay)}
                dark={commonProps.dark}
              />
            </div>
            <div className="date-label">
              <Dropdown
                onChange={(e) => {
                  setMonth(Number(e));
                }}
                unstyled
                value={month}
                content={months.map((el, index) => ({ name: el.name }))}
              />
            </div>
            <div className="date-label">
              <Dropdown
                onChange={(e) => {
                  setYear(Number(e));
                }}
                value={0}
                unstyled
                content={new Array(10).fill(" ").map((el, index) => ({
                  name: String(dateobj.getFullYear() - index),
                }))}
              />
            </div>
          </div>
        </div>
      </div>,
      <div className="dates-box" key="dates">
        <div className="selector-element">
          <Button
            dark={commonProps.dark}
            unstyled
            disabled={month <= 0}
            onClick={() => {
              if (month > 0) {
                setDay(new Date(year, month - 1, actualDay).getDay());
                setMonth(month - 1);
              }
            }}
            className="arrow"
          >
            {arrowIcon}
          </Button>
        </div>
        <Table
          shadow={shadow}
          dark={commonProps.dark}
          headers
          rows={[
            ["Sun ", "Mon", "Tue ", "Wed", "Thu", "Fri ", "Sat"],
            ...dateMatrix,
          ]}
        />
        <div className="selector-element">
          <Button
            disabled={month >= 11}
            onClick={() => {
              month < 11 && setMonth(month + 1);
            }}
            dark={commonProps.dark}
            unstyled
            className="arrow right"
          >
            {arrowIcon}
          </Button>
        </div>
      </div>,
    ],
  });
};

export default Calendar;
