import React from "react";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

import { ReactComponent as NextWeekIcon } from "schedule/assets/NextWeek.svg";
import { ReactComponent as MemoIcon } from "schedule/assets/Memo.svg";

const WeekView = () => (
  <Container>
    <DayGallery>
      <OtherWeek targetWeek="Prev">
        <NextWeekIcon />
      </OtherWeek>
      {Array.from(Array(7).keys()).map(value => (
        <DayCard key={value} weekDay={value}>
          <MonthDay>{10 + value}</MonthDay>
          <WeekDay>{weekDayNames[value]}</WeekDay>
        </DayCard>
      ))}
      <OtherWeek targetWeek="Next">
        <NextWeekIcon />
      </OtherWeek>
    </DayGallery>
    <SectionTitle>
      <MemoIcon /> 금주의 체크리스트
    </SectionTitle>
    <CheckItemGallery>
      <CheckItem>체크체크</CheckItem>
      <CheckItem>체크체크</CheckItem>
    </CheckItemGallery>
    <SectionTitle>
      <MemoIcon /> 꼭 잊지 말아야 할 메모
    </SectionTitle>
    <MemoGallery>
      <MemoCard>메모메모</MemoCard>
      <MemoCard>메모메모</MemoCard>
      <MemoCard>메모메모</MemoCard>
      <MemoCard>메모메모</MemoCard>
      <MemoCard>메모메모</MemoCard>
    </MemoGallery>
  </Container>
);

const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: 28px;
`;

const DayGallery = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-bottom: 20px;
  padding: 0 16px 12px 16px;
`;

const createDayCardStyle = (theme: Theme) => css`
  box-sizing: border-box;

  height: 160px;
  padding: 16px 6px;
  flex-shrink: 0;

  border: 1px solid ${theme.scale.scale2};
  border-radius: 12px;
  background-color: transparent;

  &:not(:first-of-type) {
    margin-left: 4px;
  }
`;

interface DayCardProps {
  weekDay: number;
}

const DayCard = styled.div<DayCardProps>`
  ${({ theme }) => createDayCardStyle(theme)}

  width: 124px;

  color: ${({ theme, weekDay }) =>
    weekDay === 0 ? theme.tint.red : weekDay === 6 ? theme.tint.blue : theme.scale.scale8};
`;

interface OtherWeekProps {
  targetWeek: "Prev" | "Next";
}

const OtherWeek = styled.div<OtherWeekProps>`
  ${({ theme }) => createDayCardStyle(theme)}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 46px;

  ${({ targetWeek }) => targetWeek === "Prev" && `transform: rotate(180deg);`}
`;

const MonthDay = styled.span`
  font-size: 24px;
`;

const WeekDay = styled.span`
  margin-left: 2px;
  font-size: 16px;
`;

const SectionTitle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: calc(100% - 32px);
  padding-left: 20px;
  padding-bottom: 14px;
  padding-right: 32px;
  border-bottom: 0.7px solid ${({ theme }) => theme.gray.gray3};
  font-size: 18px;
  font-weight: 400;

  & > svg {
    margin-right: 4px;
  }
`;

const CheckItemGallery = styled.div`
  width: 100%;
  margin-bottom: 14px;
`;

const CheckItem = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 10px 24px 10px 28px;
`;

const MemoGallery = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-bottom: 80px;
  padding: 12px 16px 12px 16px;
`;

const MemoCard = styled.div`
  box-sizing: border-box;

  width: 100px;
  height: 120px;
  padding: 8px 11px;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;

  border: 1px solid ${({ theme }) => theme.scale.scale2};
  border-radius: 12px;
  background-color: transparent;

  &:not(:first-of-type) {
    margin-left: 4px;
  }

  color: ${({ theme }) => theme.scale.scale8};
`;

export default WeekView;
