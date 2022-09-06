import { useRecoilValue } from "recoil";
import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

import DateInfo from "common/utils/DateInfo";
import { schedulesState } from "common/states/Schedule";

interface DayViewProps {
  selectedDayInfo: DateInfo;
}

const DayView = ({ selectedDayInfo }: DayViewProps) => {
  const schedules = useRecoilValue(schedulesState);
  const theme = useTheme();

  const colors = getColors(theme);
  const filteredSchedules = schedules
    .filter(schedule => schedule.start.isSameDay(selectedDayInfo))
    .sort((schedule1, schedule2) => schedule1.start.hour - schedule2.start.hour);

  return (
    <Container>
      <ControlArea>
        <Input placeholder="명령어 작성" />
      </ControlArea>
      <DrawArea>
        <MarkerLine />
        {filteredSchedules.map((schedule, index) => {
          const color = colors[schedule.colorIndex];
          const hour = schedule.start.hour % 12;

          return (
            <DayArea key={index}>
              <Time>
                <Hour>{hour === 0 ? 12 : hour}</Hour>
                <AMPM>{hour >= 12 ? "PM" : "AM"}</AMPM>
              </Time>
              <Marker color={color} />
              <Description color={color} hourCount={schedule.end.hour - schedule.start.hour}>
                {schedule.content}
              </Description>
            </DayArea>
          );
        })}
      </DrawArea>
    </Container>
  );
};

function getColors(theme: Theme) {
  return [theme.tint.indigo, theme.tint.orange, theme.tint.pink, theme.tint.teal];
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  flex: 1;
`;

const ControlArea = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 24px 20px;
`;

const Input = styled.input`
  box-sizing: border-box;

  width: 100%;
  height: 46px;
  padding: 10px 14px;
  border: 0;
  border-radius: 12px;
  color: ${({ theme }) => theme.scale.scale5};
  background-color: ${({ theme }) => theme.scale.scale1};

  font-family: inherit;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.scale.scale5};
  }
`;

const DrawArea = styled.div`
  position: relative;

  width: 100%;
  flex: 1;
`;

const MarkerLine = styled.div`
  position: absolute;

  top: 0;
  left: 77px;
  height: 100%;

  border-right: 1px solid ${({ theme }) => theme.scale.scale11};
`;

const DayArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-bottom: 14px;
`;

interface MarkerProps {
  color: string;
}

const Marker = styled.div<MarkerProps>`
  position: absolute;

  top: 0;
  left: 77px;
  width: 14px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.scale.scale11};
  border-radius: 50%;

  transform: translateX(-50%);

  background-color: ${({ color }) => color};
`;

const Time = styled.div`
  position: absolute;

  top: 0;
  left: 36px;
`;

const Hour = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

const AMPM = styled.div`
  font-size: 12px;
  font-weight: 400;

  color: ${({ theme }) => theme.scale.scale6};
`;

interface DescriptionProps {
  hourCount: number;
  color: string;
}

const Description = styled.div<DescriptionProps>`
  box-sizing: border-box;

  flex: 1;
  min-height: ${({ hourCount }) => Math.max(hourCount, 1) * 48}px;
  margin-left: 112px;
  padding: 4px 16px;

  font-size: 18px;

  border-left: 3px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background-color: ${({ theme }) => theme.scale.scale1};
`;

export default DayView;
