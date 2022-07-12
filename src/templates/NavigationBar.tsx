import React from "react";
import styled from "@emotion/styled";

import { CalendarIcon, ProfileIcon, SearchIcon } from "components/Icons";

const NavigationBar = () => (
  <Container>
    <SearchIcon />
    <CalendarIcon />
    <ProfileIcon />
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

export default NavigationBar;
