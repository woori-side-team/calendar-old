import { DayInfo, getMonthSize, MonthInfo, getPrevMonth, getNextMonth, getWeekDay } from "utils/DateUtils";

export default function useMonthCalendar(currentMonthInfo: MonthInfo) {
  const currentMonthSize = getMonthSize(currentMonthInfo);
  const currentMonthFirstDay: DayInfo = { ...currentMonthInfo, monthDay: 1 };

  const prevMonthInfo = getPrevMonth(currentMonthInfo);
  const prevMonthSize = getMonthSize(prevMonthInfo);

  const nextMonthInfo = getNextMonth(currentMonthInfo);

  const weeks: Array<Array<DayInfo>> = [[]];
  let pushCount = 0;

  function pushDay(day: DayInfo) {
    const currentWeek = weeks[weeks.length - 1];

    if (currentWeek.length < 7) {
      currentWeek.push(day);
    } else {
      weeks.push([day]);
    }

    pushCount++;
  }

  for (let monthDay = prevMonthSize - getWeekDay(currentMonthFirstDay) + 1; monthDay <= prevMonthSize; monthDay++) {
    pushDay({ ...prevMonthInfo, monthDay });
  }

  for (let monthDay = 1; monthDay <= currentMonthSize; monthDay++) {
    pushDay({ year: currentMonthInfo.year, month: currentMonthInfo.month, monthDay });
  }

  const remainingSize = 7 * 6 - pushCount;

  for (let monthDay = 1; monthDay <= remainingSize; monthDay++) {
    pushDay({ ...nextMonthInfo, monthDay });
  }

  return weeks;
}
