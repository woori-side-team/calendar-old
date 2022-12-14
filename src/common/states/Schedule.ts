import { atom } from "recoil";

import DateInfo from "common/utils/DateInfo";

export interface Schedule {
  tag: string;
  content: string;
  type: "AllDay" | "Hours";
  start: DateInfo;
  end: DateInfo;
  colorIndex: number;
}

export const schedulesState = atom<Array<Schedule>>({
  key: "schedules",
  default: [
    {
      tag: "개인",
      content: "공부하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 8, monthDay: 29 }),
      end: DateInfo.fromValues({ year: 2022, month: 8, monthDay: 29 }),
      colorIndex: 1,
    },
    {
      tag: "개인",
      content: "종소세 내야해!",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1 }),
      colorIndex: 3,
    },
    {
      tag: "업무",
      content: "개발팀과 QA 미팅",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 14, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 15, minute: 0 }),
      colorIndex: 0,
    },
    {
      tag: "업무",
      content: "가족 모임",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 16, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 17, minute: 30 }),
      colorIndex: 1,
    },
    {
      tag: "업무",
      content: "매니저님에게 기획서 전달",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 17, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 18, minute: 30 }),
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "기타 연습하기",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 2, hour: 17, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 2, hour: 18, minute: 30 }),
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "피아노 연습하기",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 4, hour: 17, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 4, hour: 18, minute: 30 }),
      colorIndex: 1,
    },
    {
      tag: "개인",
      content: "운동하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 11 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 11 }),
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "운동하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25 }),
      colorIndex: 2,
    },
    {
      tag: "개인",
      content: "Vue 공부하기",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25, hour: 17, minute: 0 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25, hour: 18, minute: 30 }),
      colorIndex: 4,
    },
    {
      tag: "개인",
      content: "Svelte 공부하기",
      type: "Hours",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25, hour: 17, minute: 30 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 25, hour: 18, minute: 30 }),
      colorIndex: 3,
    },
    {
      tag: "개인",
      content: "React 공부하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 20 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 21 }),
      colorIndex: 1,
    },
    /*
    {
      tag: "개인",
      content: "Solid 공부하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 19 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 22 }),
      colorIndex: 3,
    },
    */
    {
      tag: "개인",
      content: "백엔드 공부하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 20 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 4 }),
      colorIndex: 4,
    },
    {
      tag: "개인",
      content: "컴퓨터 공학 공부하기",
      type: "AllDay",
      start: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1, hour: 1 }),
      end: DateInfo.fromValues({ year: 2022, month: 9, monthDay: 2 }),
      colorIndex: 0,
    },
  ],
});
