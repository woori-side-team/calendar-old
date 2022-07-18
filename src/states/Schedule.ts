import { atom } from "recoil";

import { DayInfo, TimeInfo } from "utils/DateUtils";

export type Schedule = {
  tag: string;
  content: string;
  colorIndex: number;
} & (
  | {
      type: "AllDay";
      start: DayInfo;
      end: DayInfo;
    }
  | {
      type: "Hours";
      start: TimeInfo;
      end: TimeInfo;
    }
);

export const schedulesState = atom<Array<Schedule>>({
  key: "schedules",
  default: [
    {
      tag: "개인",
      content: "종소세 내야해!",
      type: "AllDay",
      start: { year: 2022, month: 7, monthDay: 1 },
      end: { year: 2022, month: 7, monthDay: 1 },
      colorIndex: 3,
    },
    {
      tag: "업무",
      content: "개발팀과 QA 미팅",
      type: "Hours",
      start: { year: 2022, month: 7, monthDay: 1, hour: 14, minute: 0 },
      end: { year: 2022, month: 7, monthDay: 1, hour: 15, minute: 0 },
      colorIndex: 0,
    },
    {
      tag: "업무",
      content: "가족 모임",
      type: "Hours",
      start: { year: 2022, month: 7, monthDay: 1, hour: 16, minute: 0 },
      end: { year: 2022, month: 7, monthDay: 1, hour: 17, minute: 30 },
      colorIndex: 1,
    },
    {
      tag: "업무",
      content: "매니저님에게 기획서 전달",
      type: "Hours",
      start: { year: 2022, month: 7, monthDay: 1, hour: 17, minute: 0 },
      end: { year: 2022, month: 7, monthDay: 1, hour: 18, minute: 30 },
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "기타 연습하기",
      type: "Hours",
      start: { year: 2022, month: 7, monthDay: 2, hour: 17, minute: 0 },
      end: { year: 2022, month: 7, monthDay: 2, hour: 18, minute: 30 },
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "피아노 연습하기",
      type: "Hours",
      start: { year: 2022, month: 7, monthDay: 4, hour: 17, minute: 0 },
      end: { year: 2022, month: 7, monthDay: 4, hour: 18, minute: 30 },
      colorIndex: 1,
    },
    {
      tag: "개인",
      content: "운동하기",
      type: "AllDay",
      start: { year: 2022, month: 7, monthDay: 11 },
      end: { year: 2022, month: 7, monthDay: 11 },
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "운동하기",
      type: "AllDay",
      start: { year: 2022, month: 7, monthDay: 18 },
      end: { year: 2022, month: 7, monthDay: 18 },
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "프론트 공부하기",
      type: "AllDay",
      start: { year: 2022, month: 7, monthDay: 19 },
      end: { year: 2022, month: 7, monthDay: 21 },
      colorIndex: 1,
    },
    {
      tag: "개인",
      content: "백엔드 공부하기",
      type: "AllDay",
      start: { year: 2022, month: 7, monthDay: 19 },
      end: { year: 2022, month: 7, monthDay: 20 },
      colorIndex: 3,
    },
    {
      tag: "개인",
      content: "컴퓨터 공학 공부하기",
      type: "AllDay",
      start: { year: 2022, month: 8, monthDay: 1 },
      end: { year: 2022, month: 8, monthDay: 2 },
      colorIndex: 0,
    },
  ],
});
