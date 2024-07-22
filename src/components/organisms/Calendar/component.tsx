import React from "react";

import {
  CalendarDate,
  CalendarProps,
  DeepPartial,
  MbxUiReactiveComponent,
} from "../../../types";

import { defaultDays, defaultMonths } from "./constants";

import { getMonthsDuration, getDateMatrix } from "./utils";

import { IconButton, Label } from "../../atoms";
import { Table } from "../../molecules";
import { ArrowIcon } from "../../../icons";

const Component: MbxUiReactiveComponent<
  DeepPartial<CalendarDate>,
  CalendarProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  value,
  today: todayDt,
  days = defaultDays,
  months: customMonths = defaultMonths,
  onViewChange = () => {},
  onChange = () => {},
  startYear,
  startMonth,
  fromToday = true,
  dayLabel = true,
  setValue,
  labelProps = {},
  disabled,
  dark,
  labelClassName,
  arrowClassName,
  hover,
  background,
  active,
  hideArrows,
  shadow,
  a11y,
}) => {
  const cprops = labelClassName
    ? { className: arrowClassName, ...labelProps }
    : labelProps;
  const year = startYear && startYear > 0 ? startYear : todayDt.year;
  const month =
    startMonth !== undefined && startMonth >= 0 && startMonth <= 11
      ? startMonth
      : todayDt.month;

  const [scrDate, show] = React.useState<{
    month: number;
    year: number;
  }>({
    year,
    month,
  });

  React.useEffect(
    () =>
      show({
        month:
          startMonth !== undefined && startMonth >= 0 && startMonth <= 11
            ? startMonth
            : todayDt.month,
        year: startYear && startYear > 0 ? startYear : todayDt.year,
      }),
    [startMonth, startYear],
  );

  const months = getMonthsDuration(scrDate.year);

  const dMat = getDateMatrix({ ...scrDate, day: 1 }, months);

  const arrAct: Record<"left" | "right", () => void> = {
    left: () =>
      scrDate.month > 0
        ? show({
            ...scrDate,
            month: scrDate.month - 1,
          })
        : show({ year: scrDate.year - 1, month: 11 }),
    right: () =>
      scrDate.month < 11
        ? show({
            ...scrDate,
            month: scrDate.month + 1,
          })
        : show({ year: scrDate.year + 1, month: 0 }),
  };

  const getArrow = (direction: "left" | "right") => (
    <IconButton
      disabled={disabled}
      onClick={() => {
        arrAct[direction]();
        onViewChange({ ...scrDate, day: 1 });
      }}
      dark={dark}
      hide={hideArrows || !dayLabel}
      hover={hover}
      active={active}
      key={"arrow_" + direction}
      a11y={a11y}
      {...cprops}
      {...(direction === "right" && {
        style: {
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
        },
      })}
    >
      <ArrowIcon width="3rem" height="3rem" />
    </IconButton>
  );

  return [
    <div key="t_sel">
      {getArrow("left")}
      <Label
        a11y={a11y}
        hide={!dayLabel}
        disabled={disabled}
        dark={dark}
        {...cprops}
      >{`${customMonths[scrDate.month]} ${scrDate.year}`}</Label>
      {getArrow("right")}
    </div>,
    <Table
      a11y={a11y}
      disabled={disabled}
      key="cal_tb"
      background={background}
      shadow={shadow}
      dark={dark}
      headers
      rows={[
        days.map((dayName) => dayName.slice(0, 3)),
        ...dMat.map((row) =>
          row.map((element) => (element > 0 ? String(element) : "")),
        ),
      ]}
      propsCallback={(row, column) => {
        if (row > 0) {
          const isDisabled = fromToday
            ? scrDate.year < todayDt.year ||
              (scrDate.year === todayDt.year &&
                scrDate.month < todayDt.month) ||
              (scrDate.year === todayDt.year &&
                scrDate.month === todayDt.month &&
                dMat[row - 1][column] < todayDt.dayOfTheMonth)
            : false;

          const isNotDay = dMat[row - 1][column] <= 0;

          const onClick = () => {
            onChange({
              ...scrDate,
              dayOfTheMonth: dMat[row - 1][column],
              day: dMat[row - 1][column],
            });
            setValue({
              month: scrDate.month,
              year: scrDate.year,
              day: dMat[row - 1][column],
            });
          };

          return {
            ...(fromToday &&
              dMat[row - 1][column] === todayDt.dayOfTheMonth &&
              scrDate.month === todayDt.month &&
              scrDate.year === todayDt.year && {
                style: {
                  color: "var(--mbx-cal-t)",
                  fontWeight: "800",
                },
              }),
            ...(value.year === scrDate.year &&
              value.month === scrDate.month &&
              value.day === dMat[row - 1][column] && {
                "data-mbx-scal": "",
              }),
            ...((disabled || isDisabled || isNotDay) && {
              "data-mbx-dsb": "",
            }),
            ...(!disabled &&
              !isDisabled &&
              !isNotDay && {
                onClick,
                onKeyDown: (e) => {
                  if (e.key === "Enter") {
                    onClick();
                  }
                },
              }),
            tabIndex: isDisabled || isNotDay || !a11y ? -1 : 0,
          };
        } else return {};
      }}
    />,
  ];
};

export default Component;
