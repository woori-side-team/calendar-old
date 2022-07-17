import React from "react";
import styled from "@emotion/styled";

import { CalendarIcon, ProfileIcon, SearchIcon } from "components/Icons";
import { Ripple } from "components/Effects";

const ToolBar = () => (
  <Container>
    <Ripple Component={Button}>
      <SearchIcon />
    </Ripple>
    <Ripple Component={Button}>
      <CalendarIcon />
    </Ripple>
    <Ripple Component={Button}>
      <ProfileIcon />
    </Ripple>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  padding: 8px 20px 12px 20px;
`;

const Button = styled.button`
  overflow: hidden;
  display: flex;

  padding: 0;
  border: 0;
  background-color: transparent;

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export default ToolBar;