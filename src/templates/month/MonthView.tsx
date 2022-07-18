import React from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";

import { areSameDays, DayInfo, getNow, MonthInfo } from "utils/DateUtils";
import { Schedule, schedulesState } from "states/Schedule";
import useMonthCalendar from "hooks/useMonthCalendar";

interface MonthViewProps {
  selectedMonthInfo: MonthInfo;
}

const MonthView = ({ selectedMonthInfo }: MonthViewProps) => {
  const schedules = useRecoilValue(schedulesState);
  const theme = useTheme();
  const weeks = useMonthCalendar(selectedMonthInfo);
  const now = getNow();
  const colors = getColors(theme);

  const scheduleMap: Record<string, Array<Schedule>> = {};

  for (const schedule of schedules) {
    const startKey = getDayKey(schedule.start);

    if (typeof scheduleMap[startKey] === "undefined") {
      scheduleMap[startKey] = [];
    }

    scheduleMap[startKey].push(schedule);
  }

  return (
    <Container>
      <Row>
        {weekDayNames.map(name => (
          <NameCell key={name}>{name}</NameCell>
        ))}
      </Row>
      {weeks.map((week, weekIndex) => (
        <Row key={weekIndex}>
          {week.map(day => {
            const currentSchedules = scheduleMap[getDayKey(day)];

            const allDaySchedules = !currentSchedules
              ? []
              : currentSchedules.filter(schedule => schedule.type === "AllDay");

            const hoursSchedules = !currentSchedules
              ? []
              : currentSchedules.filter(schedule => schedule.type === "Hours");

            const hoursOnly = allDaySchedules.length === 0;

            return (
              <DayCell isSelectedMonth={day.month === selectedMonthInfo.month} key={day.monthDay}>
                <Day isNow={areSameDays(day, now)}>{day.monthDay}</Day>
                {allDaySchedules.map((schedule, scheduleIndex) => (
                  <Markers key={scheduleIndex} alignCenter={false}>
                    <AllDayMarker color={colors[schedule.colorIndex % colors.length]} />
                  </Markers>
                ))}
                <Markers alignCenter={hoursOnly}>
                  {hoursSchedules.map((schedule, scheduleIndex) => (
                    <HoursMarker
                      key={scheduleIndex}
                      color={colors[schedule.colorIndex % colors.length]}
                      large={hoursOnly}
                    />
                  ))}
                </Markers>
              </DayCell>
            );
          })}
        </Row>
      ))}
    </Container>
  );
};

const weekDayNames = ["일", "월", "화", "수", "목", "금", "토"];

function getDayKey(dayInfo: DayInfo) {
  return `${dayInfo.year}:${dayInfo.month}:${dayInfo.monthDay}`;
}

function getColors(theme: Theme) {
  return [theme.tint.indigo, theme.tint.orange, theme.tint.pink, theme.tint.teal];
}

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
  isSelectedMonth: boolean;
}

const DayCell = styled.button<DayCellProps>`
  ${cellStyle}

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 58px;
  padding: 0;
  border: 0;

  ${({ isSelectedMonth, theme }) => (isSelectedMonth ? createHighlightStyle(theme) : createDisabledStyle(theme))}
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

interface MarkersProps {
  alignCenter: boolean;
}

const Markers = styled.span<MarkersProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ alignCenter }) => (alignCenter ? "center" : "flex-start")};

  width: 100%;
  margin-top: 2px;
  flex-shrink: 0;
`;

interface AllDayMarkerProps {
  color: string;
}

const AllDayMarker = styled.span<AllDayMarkerProps>`
  display: inline-block;

  width: 100%;
  height: 6px;
  border-radius: 2px;

  background-color: ${({ color }) => color};
`;

interface HoursMarkerProps {
  color: string;
  large: boolean;
}

const HoursMarker = styled.span<HoursMarkerProps>`
  display: inline-block;

  ${({ large }) => (large ? `width: 8px; height: 8px;` : `width: 6px; height: 6px;`)}

  border-radius: 50%;

  background-color: ${({ color }) => color};

  &:not(:first-of-type) {
    margin-left: 2px;
  }
`;

export default MonthView;
