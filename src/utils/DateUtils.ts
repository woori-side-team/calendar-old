export interface MonthInfo {
  year: number;
  month: number; // 1 ~ 12.
}

export interface DayInfo extends MonthInfo {
  monthDay: number;
}

export function createInfoFromDate(date: Date): DayInfo {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    monthDay: date.getDate(),
  };
}

export function getNow() {
  return createInfoFromDate(new Date());
}

export function getNextMonth(monthInfo: MonthInfo): MonthInfo {
  if (monthInfo.month === 12) {
    return { year: monthInfo.year + 1, month: 1 };
  } else {
    return { year: monthInfo.year, month: monthInfo.month + 1 };
  }
}

export function getPrevMonth(monthInfo: MonthInfo): MonthInfo {
  if (monthInfo.month === 1) {
    return { year: monthInfo.year - 1, month: 12 };
  } else {
    return { year: monthInfo.year, month: monthInfo.month - 1 };
  }
}

export function getMonthSize(monthInfo: MonthInfo) {
  return new Date(monthInfo.year, monthInfo.month, 0).getDate();
}

export function getWeekDay(dayInfo: DayInfo) {
  return new Date(dayInfo.year, dayInfo.month - 1, dayInfo.monthDay).getDay();
}

export function areSameMonths(monthInfo1: MonthInfo, monthInfo2: MonthInfo) {
  return monthInfo1.year === monthInfo2.year && monthInfo1.month === monthInfo2.month;
}

export function areSameDays(dayInfo1: DayInfo, dayInfo2: DayInfo) {
  return areSameMonths(dayInfo1, dayInfo2) && dayInfo1.monthDay === dayInfo2.monthDay;
}
