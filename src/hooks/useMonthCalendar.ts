import DateInfo from "utils/DateInfo";

export default function useMonthCalendar(monthInfo: DateInfo) {
  const monthSize = monthInfo.getMonthSize();
  const monthFirstDay = monthInfo.getFirstDayOfMonth();

  const prevMonthInfo = monthInfo.addMonth(-1);
  const prevMonthSize = prevMonthInfo.getMonthSize();

  const nextMonthInfo = monthInfo.addMonth(1);

  const weeks: Array<Array<DateInfo>> = [[]];
  let pushCount = 0;

  function pushDay(day: DateInfo) {
    const currentWeek = weeks[weeks.length - 1];

    if (currentWeek.length < 7) {
      currentWeek.push(day);
    } else {
      weeks.push([day]);
    }

    pushCount++;
  }

  for (let monthDay = prevMonthSize - monthFirstDay.weekDay + 1; monthDay <= prevMonthSize; monthDay++) {
    pushDay(DateInfo.fromValues({ ...prevMonthInfo.getValues(), monthDay }));
  }

  for (let monthDay = 1; monthDay <= monthSize; monthDay++) {
    pushDay(DateInfo.fromValues({ year: monthInfo.year, month: monthInfo.month, monthDay }));
  }

  const remainingSize = 7 * 6 - pushCount;

  for (let monthDay = 1; monthDay <= remainingSize; monthDay++) {
    pushDay(DateInfo.fromValues({ ...nextMonthInfo.getValues(), monthDay }));
  }

  return weeks;
}
