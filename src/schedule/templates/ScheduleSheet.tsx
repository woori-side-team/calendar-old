import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { css, Theme, useTheme } from "@emotion/react";

import DateInfo from "utils/DateInfo";
import { Schedule, schedulesState } from "states/Schedule";
import { PersistentSheetModal } from "components/Modals";
import { Ripple } from "components/Effects";

import { ReactComponent as ScheduleCancelIcon } from "schedule/assets/ScheduleCancel.svg";
import { ReactComponent as SchedulePencilIcon } from "schedule/assets/SchedulePencil.svg";
import { ReactComponent as SheetCancelIcon } from "schedule/assets/SheetCancel.svg";

type Mode = "Edit" | "View";

const ScheduleSheet = () => {
  const [mode, setMode] = useState<Mode>("View");
  const schedules = useRecoilValue(schedulesState);
  const now = DateInfo.now();
  const schedulesToShow = schedules.filter(schedule => schedule.start.month === now.month);

  const handleClickEdit = () => {
    setMode("Edit");
  };

  const handleClickView = () => {
    setMode("View");
  };

  return (
    <PersistentSheetModal breakpoints={[0.1, 0.75]} state="MinHeight">
      <Header>
        <Title>다가오는 일정</Title>
        {mode === "View" ? (
          <Ripple Component={EditModeButton} onClick={handleClickEdit}>
            편집
          </Ripple>
        ) : (
          <Ripple Component={ViewModeButton} onClick={handleClickView}>
            <SheetCancelIcon />
          </Ripple>
        )}
      </Header>
      <Content>
        {schedulesToShow.slice(0, maxShowCount).map((schedule, index) => (
          <ScheduleView key={index} schedule={schedule} mode={mode} />
        ))}
        {schedulesToShow.length > maxShowCount && (
          <Dots>
            <Dot />
            <Dot />
            <Dot />
          </Dots>
        )}
      </Content>
    </PersistentSheetModal>
  );
};

const maxShowCount = 7;

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

const modeButtonStyle = css`
  box-sizing: border-box;

  height: 36px;
  margin-left: auto;
  padding: 5px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;

  border: 0;
  background-color: transparent;
`;

const EditModeButton = styled.button`
  ${modeButtonStyle}

  color: ${({ theme }) => theme.tint.blue};
`;

const ViewModeButton = styled.button`
  ${modeButtonStyle}
`;

const Content = styled.div`
  width: 100%;
  margin-top: 24px;
`;

interface ScheduleProps {
  schedule: Schedule;
  mode: Mode;
}

const ScheduleView = ({ schedule, mode }: ScheduleProps) => {
  const theme = useTheme();
  const colors = getColors(theme);

  return (
    <ScheduleContainer>
      <Marker color={colors[schedule.colorIndex % colors.length]} type={schedule.type}>
        {schedule.start.monthDay}
      </Marker>
      {`[${schedule.tag}] ${schedule.content}`}
      {mode === "Edit" && (
        <ScheduleControls>
          <Ripple Component={ScheduleControlButton}>
            <SchedulePencilIcon />
          </Ripple>
          <Ripple Component={ScheduleControlButton}>
            <ScheduleCancelIcon />
          </Ripple>
        </ScheduleControls>
      )}
    </ScheduleContainer>
  );
};

function getColors(theme: Theme) {
  return [theme.tint.indigo, theme.tint.orange, theme.tint.pink, theme.tint.teal];
}

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 24px;

  font-size: 14px;
  font-weight: 400;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

const ScheduleControls = styled.div`
  margin-left: auto;
  margin-right: 24px;
`;

const ScheduleControlButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;

  border: 0;
  background-color: transparent;
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

const Dots = styled.div`
  width: 100%;
  margin-top: 2px;
`;

const Dot = styled.div`
  text-align: center;
  line-height: 0;

  width: 100%;
  height: 8px;

  &::after {
    content: "";
    display: inline-block;

    width: 4px;
    height: 4px;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.background.tertiary};
  }
`;

export default ScheduleSheet;
