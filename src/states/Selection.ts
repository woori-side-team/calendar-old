import { atom } from "recoil";

const now = new Date();

export const selectedYearState = atom({
  key: "selectedYear",
  default: now.getFullYear(),
});

export const selectedMonthState = atom({
  key: "selectedMonth",
  default: now.getMonth() + 1,
});
