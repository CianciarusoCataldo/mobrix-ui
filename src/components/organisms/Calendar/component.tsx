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

const CalendarComponent: MbxUiReactiveComponent<
  DeepPartial<CalendarDate>,
  CalendarProps & { today: CalendarDate & { dayOfTheMonth: number } }
> = ({
  value,
  shadow,
  disabled,
  today: todayDt,
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
  arrowClassName,
  ...commonProps
}) => {
  const customProps = labelClassName
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

  React.useEffect(() => {
    const actualYear = startYear && startYear > 0 ? startYear : todayDt.year;
    const actualMonth =
      startMonth !== undefined && startMonth >= 0 && startMonth <= 11
        ? startMonth
        : todayDt.month;

    show({ month: actualMonth, year: actualYear });
  }, [startMonth, startYear]);

  const months = getMonthsDuration(scrDate.year);

  const basicMatrix = getDateMatrix({ ...scrDate, day: 1 }, months);

  const arrowActions: Record<"left" | "right", () => void> = {
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
        arrowActions[direction]();
        onViewChange({ ...scrDate, day: 1 });
      }}
      hide={hideArrows}
      hover={hover}
      dark={commonProps.dark}
      key={"arrow_" + direction}
      features={{ noShFc: true }}
      {...customProps}
      style={{
        ...(direction === "right" && {
          WebkitTransform: "scaleX(-1)",
          transform: "scaleX(-1)",
        }),
      }}
    >
      <ArrowIcon
        dark={commonProps.dark}
        width="3rem"
        height="3rem"
        disabled={disabled}
        hover={hover}
      />
    </IconButton>
  );

  let components: JSX.Element[] = [];

  dayLabel &&
    components.push(
      <div key="t_sel">
        {getArrow("left")}
        <Label disabled={disabled} dark={commonProps.dark} {...customProps}>{`${
          customMonths[scrDate.month]
        } ${scrDate.year}`}</Label>
        {getArrow("right")}
      </div>,
    );

  components.push(
    <Table
      disabled={disabled}
      key="cal_tb"
      propsCallback={(row, column) => {
        if (row > 0) {
          const isDisabled = fromToday
            ? scrDate.year < todayDt.year ||
              (scrDate.year === todayDt.year &&
                scrDate.month < todayDt.month) ||
              (scrDate.year === todayDt.year &&
                scrDate.month === todayDt.month &&
                basicMatrix[row - 1][column] < todayDt.dayOfTheMonth)
            : false;

          const isNotDay = basicMatrix[row - 1][column] <= 0;

          const onClick = () => {
            onChange({
              ...scrDate,
              dayOfTheMonth: basicMatrix[row - 1][column],
              day: basicMatrix[row - 1][column],
            });
            setValue({
              month: scrDate.month,
              year: scrDate.year,
              day: basicMatrix[row - 1][column],
            });
          };

          const extraProps =
            !disabled && !isDisabled && !isNotDay
              ? {
                  onClick,
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      onClick();
                    }
                  },
                }
              : {};

          return {
            tabIndex: isDisabled || isNotDay ? -1 : 0,
            "data-mbx-ctoday":
              fromToday &&
              basicMatrix[row - 1][column] === todayDt.dayOfTheMonth &&
              scrDate.month === todayDt.month &&
              scrDate.year === todayDt.year,
            "data-mbx-scal":
              value.year === scrDate.year &&
              value.month === scrDate.month &&
              value.day === basicMatrix[row - 1][column],
            ...((disabled || isDisabled || isNotDay) && {
              "data-mbx-cls": "dsb",
            }),
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
          row.map((element) => (element > 0 ? String(element) : "")),
        ),
      ]}
    />,
  );

  return components;
};

export default CalendarComponent;
