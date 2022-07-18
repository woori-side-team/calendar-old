import { DayInfo, getMonthSize, MonthInfo, getPrevMonth, getNextMonth, getWeekDay } from "utils/DateUtils";

export default function useMonthCalendar(monthInfo: MonthInfo) {
  const monthSize = getMonthSize(monthInfo);
  const monthFirstDay: DayInfo = { ...monthInfo, monthDay: 1 };

  const prevMonthInfo = getPrevMonth(monthInfo);
  const prevMonthSize = getMonthSize(prevMonthInfo);

  const nextMonthInfo = getNextMonth(monthInfo);

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

  for (let monthDay = prevMonthSize - getWeekDay(monthFirstDay) + 1; monthDay <= prevMonthSize; monthDay++) {
    pushDay({ ...prevMonthInfo, monthDay });
  }

  for (let monthDay = 1; monthDay <= monthSize; monthDay++) {
    pushDay({ year: monthInfo.year, month: monthInfo.month, monthDay });
  }

  const remainingSize = 7 * 6 - pushCount;

  for (let monthDay = 1; monthDay <= remainingSize; monthDay++) {
    pushDay({ ...nextMonthInfo, monthDay });
  }

  return weeks;
}
