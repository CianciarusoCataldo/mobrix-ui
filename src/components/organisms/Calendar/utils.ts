import { CalendarDate } from "../../../types/components/organisms/Calendar";

export const leapYear = (year: number) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const today = () => {
  const dateobj = new Date();

  const todayDate = {
    year: dateobj.getFullYear(),
    month: dateobj.getMonth(),
    dayOfTheMonth: dateobj.getDate(),
    day: dateobj.getDay(),
  };
  return todayDate;
};

export const getMonthsDuration = (year: number) => [
  31,
  leapYear(year) ? 29 : 28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

export const getDateMatrix = (onScreenDate: CalendarDate, months: number[]) => {
  const offset = new Date(onScreenDate.year, onScreenDate.month, 1).getDay();

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
      if (dayCounter <= months[onScreenDate.month]) {
        matrix[i][j] = dayCounter;
        dayCounter++;
      } else {
        matrix[i][j] = -1;
      }
    }
  }

  return matrix;
};
