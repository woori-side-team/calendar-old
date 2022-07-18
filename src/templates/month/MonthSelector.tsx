import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";

import { getNextMonth, getPrevMonth, MonthInfo } from "utils/DateUtils";
import useInfiniteSwiper from "hooks/useInfiniteSwiper";

interface MonthSelectorProps {
  selectedMonthInfo: MonthInfo;
  setSelectedMonthInfo: (value: MonthInfo) => void;
}

const MonthSelector = ({ selectedMonthInfo, setSelectedMonthInfo }: MonthSelectorProps) => {
  const initialMonthInfos: Array<MonthInfo> = [];

  for (let month = 1; month <= 12; month++) {
    initialMonthInfos.push({
      year: selectedMonthInfo.year,
      month,
    });
  }

  const {
    items: monthInfos,
    selectedIndex,
    setSelectedIndex,
    swiperProps,
  } = useInfiniteSwiper<MonthInfo>({
    initialItems: initialMonthInfos,
    initialSelectedIndex: selectedMonthInfo.month - 1,
    createPrevItem: getPrevMonth,
    createNextItem: getNextMonth,
    onSelectItem: newMonthInfo => {
      setSelectedMonthInfo(newMonthInfo);
    },
  });

  const handleClickTitle = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Swiper {...swiperProps} slidesPerView={3} centeredSlides>
      {monthInfos.map((monthInfo, index) => (
        <SwiperSlide key={index}>
          <Title
            isActive={index === selectedIndex}
            onClick={() => {
              handleClickTitle(index);
            }}
          >
            {`${monthInfo.year}.${monthInfo.month}`}
          </Title>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const createActiveStyle = (theme: Theme) => css`
  border-bottom: 2px solid ${theme.scale.max};
  font-size: 25px;
  color: ${theme.scale.max};
`;

const Title = styled.div<{ isActive: boolean }>`
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 48px;
  padding-bottom: 10px;
  line-height: 25px;
  font-size: 17px;
  color: ${({ theme }) => theme.scale.scale4};

  ${({ theme, isActive }) => isActive && createActiveStyle(theme)};
`;

export default MonthSelector;
