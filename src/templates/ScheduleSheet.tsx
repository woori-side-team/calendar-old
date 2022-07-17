import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

import { ModalProps, SheetModal } from "components/Modals";

const ScheduleSheet = ({ isOpen, onClose }: Pick<ModalProps, "isOpen" | "onClose">) => {
  const theme = useTheme();

  return (
    <SheetModal isOpen={isOpen} onClose={onClose}>
      <Header>
        <Title>다가오는 일정</Title>
        <EditButton>편집</EditButton>
      </Header>
      <Content>
        <Schedule>
          <Marker backgroundColor={theme.tint.indigo} scheduleType="Hours">
            1
          </Marker>
          {"[업무] 김대리님한테 기획서 전달"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.orange} scheduleType="Hours">
            1
          </Marker>
          {"[업무] 개발팀과 QA 미팅 @14:00"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.pink} scheduleType="Hours">
            1
          </Marker>
          {"[개인] 가족 모임 @19:00, 강남역"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.teal} scheduleType="AllDay">
            1
          </Marker>
          {"[개인] 종소세 내야해!!!! @9:00"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.orange} scheduleType="Hours">
            4
          </Marker>
          {"일이삼사오육칠팔구십일이삼사오육칠"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.indigo} scheduleType="Hours">
            6
          </Marker>
          {"일이삼사오육칠팔구십일이삼사오육칠"}
        </Schedule>
        <Schedule>
          <Marker backgroundColor={theme.tint.pink} scheduleType="Hours">
            11
          </Marker>
          {"일이삼사오육칠팔구십일이삼사오육칠"}
        </Schedule>
      </Content>
    </SheetModal>
  );
};

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
  margin-left: auto;
  padding: 0;

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

  width: 100%;

  font-size: 14px;
  font-weight: 400;

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`;

interface MarkerProps {
  backgroundColor: string;
  scheduleType: "Hours" | "AllDay";
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
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: ${({ scheduleType }) => (scheduleType === "Hours" ? "50%" : 0)};
`;

export default ScheduleSheet;
