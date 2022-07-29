import React from "react";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { ReactComponent as NextWeekIcon } from "schedule/assets/NextWeek.svg";

const WeekView = () => (
  <Container>
    <Week>
      <OtherWeek targetWeek="Prev">
        <NextWeekIcon />
      </OtherWeek>
      {Array.from(Array(7).keys()).map(value => (
        <DayCard key={value} weekDay={value}>
          <MonthDay>{10 + value}</MonthDay>
          <WeekDay>{weekDayNames[value]}</WeekDay>
        </DayCard>
      ))}
      <OtherWeek targetWeek="Next">
        <NextWeekIcon />
      </OtherWeek>
    </Week>
  </Container>
);

const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: 28px;
`;

const Week = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 0 16px 28px 16px;
`;

const cardStyle = (theme: Theme) => css`
  box-sizing: border-box;

  height: 160px;
  padding: 16px 6px;
  flex-shrink: 0;

  border: 1px solid ${theme.scale.scale2};
  border-radius: 12px;
  background-color: transparent;

  &:not(:first-of-type) {
    margin-left: 4px;
  }
`;

interface DayCardProps {
  weekDay: number;
}

const DayCard = styled.div<DayCardProps>`
  ${({ theme }) => cardStyle(theme)}

  width: 124px;

  color: ${({ theme, weekDay }) =>
    weekDay === 0 ? theme.tint.red : weekDay === 6 ? theme.tint.blue : theme.scale.scale8};
`;

interface OtherWeekProps {
  targetWeek: "Prev" | "Next";
}

const OtherWeek = styled.div<OtherWeekProps>`
  ${({ theme }) => cardStyle(theme)}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 46px;

  ${({ targetWeek }) => targetWeek === "Prev" && `transform: rotate(180deg);`}
`;

const MonthDay = styled.span`
  font-size: 24px;
`;

const WeekDay = styled.span`
  margin-left: 2px;
  font-size: 16px;
`;

export default WeekView;
