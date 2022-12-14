import styled from "@emotion/styled";

import useRouter from "common/hooks/useRouter";
import { Ripple } from "common/components/Effects";

import { ReactComponent as SearchIcon } from "modules/layout/assets/Search.svg";
import { ReactComponent as ModeIcon } from "modules/layout/assets/Mode.svg";
import { ReactComponent as ProfileIcon } from "modules/layout/assets/Profile.svg";

const ToolBar = () => {
  const { openMonthOrWeek } = useRouter();

  return (
    <Container>
      <Ripple Component={Button}>
        <SearchIcon />
      </Ripple>
      <Ripple Component={Button} onClick={openMonthOrWeek}>
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
