import { useEffect, useState } from "react";

interface MonthInfo {
  year: number;
  month: number;
}

function getNextMonth(monthInfo: MonthInfo): MonthInfo {
  if (monthInfo.month === 12) {
    return { year: monthInfo.year + 1, month: 1 };
  } else {
    return { year: monthInfo.year, month: monthInfo.month + 1 };
  }
}

function getPrevMonth(monthInfo: MonthInfo): MonthInfo {
  if (monthInfo.month === 1) {
    return { year: monthInfo.year - 1, month: 12 };
  } else {
    return { year: monthInfo.year, month: monthInfo.month - 1 };
  }
}

export function useMonths() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const initialMonthInfos: Array<MonthInfo> = [];

  for (let month = 1; month <= 12; month++) {
    initialMonthInfos.push({
      year: currentYear,
      month,
    });
  }

  const [monthInfos, setMonthInfos] = useState<Array<MonthInfo>>(initialMonthInfos);
  const [selectIndex, setSelectIndex] = useState(currentMonth - 1);

  useEffect(() => {
    setMonthInfos(prevMonthInfos => {
      if (selectIndex === 0) {
        setSelectIndex(1);
        return [getPrevMonth(prevMonthInfos[0]), ...prevMonthInfos];
      } else if (selectIndex === prevMonthInfos.length - 1) {
        setSelectIndex(prevMonthInfos.length - 1);
        return [...prevMonthInfos, getNextMonth(prevMonthInfos[prevMonthInfos.length - 1])];
      } else {
        return prevMonthInfos;
      }
    });
  }, [selectIndex]);

  return { monthInfos, setMonthInfos, selectIndex, setSelectIndex };
}
