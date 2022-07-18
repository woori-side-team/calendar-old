import { useEffect, useState } from "react";

import { MonthInfo, getPrevMonth, getNextMonth, getNow } from "utils/DateUtils";

export default function useMonthSelection() {
  const now = getNow();

  const initialMonthInfos: Array<MonthInfo> = [];

  for (let month = 1; month <= 12; month++) {
    initialMonthInfos.push({
      year: now.year,
      month,
    });
  }

  const [monthInfos, setMonthInfos] = useState<Array<MonthInfo>>(initialMonthInfos);
  const [selectIndex, setSelectIndex] = useState(now.month - 1);

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
