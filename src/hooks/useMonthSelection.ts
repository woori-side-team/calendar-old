import { useEffect, useState } from "react";

import { MonthInfo, getPrevMonth, getNextMonth } from "utils/DateUtils";

export default function useMonthSelection(selectedMonthInfo: MonthInfo) {
  const initialMonthInfos: Array<MonthInfo> = [];

  for (let month = 1; month <= 12; month++) {
    initialMonthInfos.push({
      year: selectedMonthInfo.year,
      month,
    });
  }

  const [monthInfos, setMonthInfos] = useState<Array<MonthInfo>>(initialMonthInfos);
  const [selectedIndex, setSelectedIndex] = useState(selectedMonthInfo.month - 1);

  useEffect(() => {
    setMonthInfos(prevMonthInfos => {
      if (selectedIndex === 0) {
        setSelectedIndex(1);
        return [getPrevMonth(prevMonthInfos[0]), ...prevMonthInfos];
      } else if (selectedIndex === prevMonthInfos.length - 1) {
        setSelectedIndex(prevMonthInfos.length - 1);
        return [...prevMonthInfos, getNextMonth(prevMonthInfos[prevMonthInfos.length - 1])];
      } else {
        return prevMonthInfos;
      }
    });
  }, [selectedIndex]);

  return { monthInfos, setMonthInfos, selectedIndex, setSelectedIndex };
}
