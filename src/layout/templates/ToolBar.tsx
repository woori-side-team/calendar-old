import React from "react";
import styled from "@emotion/styled";

import useRouter from "hooks/useRouter";
import { Ripple } from "components/Effects";

import { ReactComponent as SearchIcon } from "layout/assets/Search.svg";
import { ReactComponent as ModeIcon } from "layout/assets/Mode.svg";
import { ReactComponent as ProfileIcon } from "layout/assets/Profile.svg";

const ToolBar = () => {
  const { openSchedule } = useRouter();

  return (
    <Container>
      <Ripple Component={Button}>
        <SearchIcon />
      </Ripple>
      <Ripple Component={Button} onClick={openSchedule}>
        <ModeIcon />
      </Ripple>
      <Ripple Component={Button}>
        <ProfileIcon />
      </Ripple>
    </Container>
  );
};

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
