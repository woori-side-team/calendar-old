import React from "react";
import styled from "@emotion/styled";

import { ModalProps, SheetModal } from "components/Modals";

const ScheduleSheet = ({ isOpen, onClose }: Pick<ModalProps, "isOpen" | "onClose">) => (
  <SheetModal isOpen={isOpen} onClose={onClose}>
    <Header>
      <Title>다가오는 일정</Title>
      <EditButton>편집</EditButton>
    </Header>
  </SheetModal>
);

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

export default ScheduleSheet;
