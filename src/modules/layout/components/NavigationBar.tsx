import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import useRouter from "common/hooks/useRouter";
import { Ripple } from "common/components/Effects";

import { ReactComponent as ScheduleIcon } from "modules/layout/assets/Schedule.svg";
import { ReactComponent as CheckIcon } from "modules/layout/assets/Check.svg";
import { ReactComponent as MemoIcon } from "modules/layout/assets/Memo.svg";
import { ReactComponent as SettingsIcon } from "modules/layout/assets/Settings.svg";

const NavigationBar = () => {
  const { openMonthOrWeek } = useRouter();

  return (
    <Container>
      <Global styles={modalOverrideStyle} />
      <Ripple Component={Button} onClick={openMonthOrWeek}>
        <Icon isActive={true}>
          <ScheduleIcon />
        </Icon>
        <Label>일정</Label>
      </Ripple>
      <Ripple Component={Button}>
        <Icon isActive={false}>
          <CheckIcon />
        </Icon>
        <Label>체크리스트</Label>
      </Ripple>
      <Ripple Component={Button}>
        <Icon isActive={false}>
          <MemoIcon />
        </Icon>
        <Label>메모</Label>
      </Ripple>
      <Ripple Component={Button}>
        <Icon isActive={false}>
          <SettingsIcon />
        </Icon>
        <Label>설정</Label>
      </Ripple>
    </Container>
  );
};

const barHeight = "80px";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${barHeight};

  background-color: ${({ theme }) => theme.background.secondary};
`;

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  margin: 0;
  padding: 12px 12px 16px 12px;
  border: 0;

  font-family: inherit;
  font-size: 12px;
  color: ${({ theme }) => theme.scale.scale9};
  background-color: transparent;
`;

interface IconProps {
  isActive: boolean;
}

const Icon = styled.span<IconProps>`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 32px;

  & > * {
    z-index: 1;
  }

  ${({ theme, isActive }) =>
    css`
      &::before {
        position: absolute;
        content: "";

        width: ${isActive ? "100%" : "50%"};
        opacity: ${isActive ? 1 : 0};
        height: 100%;
        border-radius: 20px;
        background-color: ${theme.background.primary};
        transition: width 0.3s, opacity 0.3s;
      }
    `}
`;

const Label = styled.span`
  margin-top: 4px;
`;

// Place the modal above the component.
const modalOverrideStyle = css`
  ion-modal {
    bottom: ${barHeight};
  }
`;

export default NavigationBar;
