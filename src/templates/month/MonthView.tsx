import React from "react";
import styled from "@emotion/styled";
import { useMonth } from "hooks/useMonth";
import { css, Theme } from "@emotion/react";

const weekDayNames = ["일", "월", "화", "수", "목", "금", "토"];

const MonthView = () => {
  const year = 2022;
  const month = 7;
  const weeks = useMonth(year, month);

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
            <DayCell isCurrentMonth={day.month === month} key={day.monthDay}>
              {day.monthDay}
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

const DayCell = styled.div<{ isCurrentMonth: boolean }>`
  ${cellStyle}

  height: 44px;

  ${({ isCurrentMonth, theme }) => (isCurrentMonth ? createHighlightStyle(theme) : createDisabledStyle(theme))}
`;

export default MonthView;
