import React, { ComponentProps, useState } from "react";
import { IonRippleEffect } from "@ionic/react";
import styled from "@emotion/styled";

import UpcomingSheet from "templates/UpcomingSheet";

const NavigationBar = () => {
  const [openUpcomingSheet, setOpenUpcomingSheet] = useState(false);

  const handleClickUpcomingButton = () => {
    setOpenUpcomingSheet(true);
  };

  const handleCloseUpcomingSheet = () => {
    setOpenUpcomingSheet(false);
  };

  return (
    <Container>
      <Button onClick={handleClickUpcomingButton}>일정</Button>
      <Button>체크리스트</Button>
      <Button>메모</Button>
      <Button>설정</Button>
      <UpcomingSheet open={openUpcomingSheet} onClose={handleCloseUpcomingSheet} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  background-color: ${({ theme }) => theme.background.secondary};
`;

const Button = ({ children, ...others }: ComponentProps<"button">) => (
  <ButtonContainer {...others} className="ion-activatable">
    {children}
    <IonRippleEffect />
  </ButtonContainer>
);

const ButtonContainer = styled.button`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  margin: 0;
  padding: 1rem 0;
  border: 0;

  font-family: inherit;
  color: ${({ theme }) => theme.scale.scale9};
  background-color: transparent;
`;

export default NavigationBar;
