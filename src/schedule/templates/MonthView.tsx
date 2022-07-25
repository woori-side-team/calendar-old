import React from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";

import DateInfo from "utils/DateInfo";
import { Schedule, schedulesState } from "states/Schedule";

interface MonthViewProps {
  selectedMonthInfo: DateInfo;
}

const MonthView = ({ selectedMonthInfo }: MonthViewProps) => {
  const schedules = useRecoilValue(schedulesState);
  const theme = useTheme();
  const now = DateInfo.now();
  const colors = getColors(theme);

  // Key = Day key, Value = [Schedule, Number of days of the schedule]
  const scheduleMap: Record<string, Array<[Schedule, number]>> = {};

  for (const schedule of schedules) {
    const dayInfos = schedule.start.getDaysUntil(schedule.end);

    for (const dayInfo of dayInfos) {
      const dayKey = getDayKey(dayInfo);

      if (typeof scheduleMap[dayKey] === "undefined") {
        scheduleMap[dayKey] = [];
      }

      scheduleMap[dayKey].push([schedule, dayInfos.length]);
    }
  }

  for (const values of Object.values(scheduleMap)) {
    values.sort((value1, value2) => value2[1] - value1[1]);
  }

  return (
    <Container>
      <Row>
        {weekDayNames.map(name => (
          <NameCell key={name}>{name}</NameCell>
        ))}
      </Row>
      {selectedMonthInfo.getMonthCalendar().map((week, weekIndex) => (
        <Row key={weekIndex}>
          {week.map(day => {
            const currentSchedules = scheduleMap[getDayKey(day)];

            const allDaySchedules = !currentSchedules
              ? []
              : currentSchedules.filter(([schedule]) => schedule.type === "AllDay");

            const hoursSchedules = !currentSchedules
              ? []
              : currentSchedules.filter(([schedule]) => schedule.type === "Hours");

            const hoursOnly = allDaySchedules.length === 0;

            return (
              <DayCell key={day.monthDay} isSelectedMonth={day.isSameMonth(selectedMonthInfo)}>
                <Day isNow={day.isSameDay(now)}>{day.monthDay}</Day>
                {allDaySchedules.map(([schedule], scheduleIndex) => (
                  <Markers key={scheduleIndex} alignCenter={false}>
                    <AllDayMarker
                      color={colors[schedule.colorIndex % colors.length]}
                      isStart={day.isSameDay(schedule.start)}
                      isEnd={day.isSameDay(schedule.end)}
                    />
                  </Markers>
                ))}
                <Markers alignCenter={hoursOnly}>
                  {hoursSchedules.map(([schedule], scheduleIndex) => (
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

function getDayKey(dayInfo: DateInfo) {
  return `${dayInfo.year}:${dayInfo.month}:${dayInfo.monthDay}`;
}

function getColors(theme: Theme) {
  return [theme.tint.indigo, theme.tint.orange, theme.tint.pink, theme.tint.teal];
}

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: 28px;
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

  min-height: 58px;
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
  isStart: boolean;
  isEnd: boolean;
}

const AllDayMarker = styled.span<AllDayMarkerProps>`
  display: inline-block;

  width: 100%;
  height: 6px;

  background-color: ${({ color }) => color};

  ${({ isStart }) => isStart && `border-top-left-radius: 2px; border-bottom-left-radius: 2px;`}

  ${({ isEnd }) => isEnd && `border-top-right-radius: 2px; border-bottom-right-radius: 2px;`}
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
