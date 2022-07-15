export interface Day {
  year: number;
  month: number; // 1 ~ 12.
  monthDay: number;
}

export default function useMonthCalendar(year: number, month: number) {
  const thisMonthDayCount = new Date(year, month, 0).getDate();
  const thisMonthFirstDay = new Date(year, month - 1, 1);
  const prevMonthLastDay = new Date(year, month - 1, 0);
  const prevMonthDayCount = prevMonthLastDay.getDate();
  const nextMonthFirstDay = new Date(year, month + 1, 1);

  const weeks: Array<Array<Day>> = [[]];
  let pushCount = 0;

  function pushDay(day: Day) {
    const currentWeek = weeks[weeks.length - 1];

    if (currentWeek.length < 7) {
      currentWeek.push(day);
    } else {
      weeks.push([day]);
    }

    pushCount++;
  }

  for (let monthDay = prevMonthDayCount - thisMonthFirstDay.getDay() + 1; monthDay <= prevMonthDayCount; monthDay++) {
    pushDay({
      year: prevMonthLastDay.getFullYear(),
      month: prevMonthLastDay.getMonth() + 1,
      monthDay,
    });
  }

  for (let monthDay = 1; monthDay <= thisMonthDayCount; monthDay++) {
    pushDay({ year, month, monthDay });
  }

  const remainingDayCount = 7 * 6 - pushCount;

  for (let monthDay = 1; monthDay <= remainingDayCount; monthDay++) {
    pushDay({
      year: nextMonthFirstDay.getFullYear(),
      month: nextMonthFirstDay.getMonth() + 1,
      monthDay,
    });
  }

  return weeks;
}
