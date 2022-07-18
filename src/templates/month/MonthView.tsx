import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

import { areSameDays, getNow, MonthInfo } from "utils/DateUtils";
import useMonthCalendar from "hooks/useMonthCalendar";

const weekDayNames = ["일", "월", "화", "수", "목", "금", "토"];

interface MonthViewProps {
  currentMonthInfo: MonthInfo;
}

const MonthView = ({ currentMonthInfo }: MonthViewProps) => {
  const weeks = useMonthCalendar(currentMonthInfo);
  const now = getNow();

  return (
    <Container>
      <Row>
        {weekDayNames.map(name => (
          <NameCell key={name}>{name}</NameCell>
        ))}
      </Row>
      {weeks.map((week, index) => (
        <Row key={index}>
          {week.map(day => (
            <DayCell isCurrentMonth={day.month === currentMonthInfo.month} key={day.monthDay}>
              <Day isNow={areSameDays(day, now)}>{day.monthDay}</Day>
            </DayCell>
          ))}
        </Row>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const cellStyle = css`
  text-align: center;

  width: 100%;
  flex: 1;

  background-color: transparent;
`;

const createDisabledStyle = (theme: Theme) => css`
  color: ${theme.scale.scale3};
`;

const createHighlightStyle = (theme: Theme) => css`
  &:first-of-type {
    color: ${theme.tint.red};
  }

  &:last-of-type {
    color: ${theme.tint.blue};
  }
`;

const NameCell = styled.div`
  ${cellStyle}

  line-height: 28px;

  ${({ theme }) => createHighlightStyle(theme)}
`;

interface DayCellProps {
  isCurrentMonth: boolean;
}

const DayCell = styled.button<DayCellProps>`
  ${cellStyle}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  border: 0;

  height: 44px;

  ${({ isCurrentMonth, theme }) => (isCurrentMonth ? createHighlightStyle(theme) : createDisabledStyle(theme))}
`;

interface DayProps {
  isNow: boolean;
}

const Day = styled.span<DayProps>`
  width: 100%;
  line-height: 26px;
  border-radius: 8px;

  background-color: ${({ theme, isNow }) => (isNow ? theme.background.secondary : "transparent")};
`;

export default MonthView;
