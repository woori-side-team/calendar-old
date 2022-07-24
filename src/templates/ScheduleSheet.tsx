import React from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { Theme, useTheme } from "@emotion/react";

import DateInfo from "utils/DateInfo";
import { schedulesState } from "states/Schedule";
import { PersistentSheetModal } from "components/Modals";
import { Ripple } from "components/Effects";

const ScheduleSheet = () => {
  const theme = useTheme();
  const schedules = useRecoilValue(schedulesState);
  const now = DateInfo.now();
  const colors = getColors(theme);

  return (
    <PersistentSheetModal breakpoints={[0.1, 0.75]} state="MinHeight">
      <Header>
        <Title>다가오는 일정</Title>
        <Ripple Component={EditButton}>편집</Ripple>
      </Header>
      <Content>
        {schedules
          .filter(schedule => schedule.start.month === now.month)
          .map((schedule, index) => (
            <Schedule key={index}>
              <Marker color={colors[schedule.colorIndex % colors.length]} type={schedule.type}>
                {schedule.start.monthDay}
              </Marker>
              {`[${schedule.tag}] ${schedule.content}`}
            </Schedule>
          ))}
      </Content>
    </PersistentSheetModal>
  );
};

function getColors(theme: Theme) {
  return [theme.tint.indigo, theme.tint.orange, theme.tint.pink, theme.tint.teal];
}

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  padding: 24px 20px 0 20px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const EditButton = styled.button`
  box-sizing: border-box;

  margin-left: auto;
  padding: 5px;

  font-family: inherit;
  color: ${({ theme }) => theme.tint.blue};
  font-size: 14px;
  font-weight: 400;

  border: 0;
  background-color: transparent;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  font-size: 14px;
  font-weight: 400;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

interface MarkerProps {
  color: string;
  type: "Hours" | "AllDay";
}

const Marker = styled.div<MarkerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  margin-left: 40px;
  margin-right: 14px;
  color: ${({ theme }) => theme.background.primary};
  background-color: ${({ color }) => color};

  border-radius: ${({ type }) => (type === "Hours" ? "50%" : 0)};
`;

export default ScheduleSheet;
