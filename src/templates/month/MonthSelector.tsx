import React from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";

import DateInfo from "utils/DateInfo";
import useInfiniteSwiper from "hooks/useInfiniteSwiper";

interface MonthSelectorProps {
  selectedMonthInfo: DateInfo;
  setSelectedMonthInfo: (value: DateInfo) => void;
}

const MonthSelector = ({ selectedMonthInfo, setSelectedMonthInfo }: MonthSelectorProps) => {
  const initialItems: Array<DateInfo> = [];

  for (let month = 1; month <= 12; month++) {
    initialItems.push(
      DateInfo.fromValues({
        year: selectedMonthInfo.year,
        month,
      })
    );
  }

  const { items, selectedIndex, setSelectedIndex, swiperProps } = useInfiniteSwiper<DateInfo>({
    initialItems,
    initialSelectedIndex: selectedMonthInfo.month - 1,
    createPrevItem: item => item.addMonth(-1),
    createNextItem: item => item.addMonth(1),
    onSelectItem: item => {
      setSelectedMonthInfo(item);
    },
  });

  const handleClickTitle = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <StyledSwiper {...swiperProps} slidesPerView={3} centeredSlides>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Title
            isActive={index === selectedIndex}
            onClick={() => {
              handleClickTitle(index);
            }}
          >
            {`${item.year}.${item.month}`}
          </Title>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
`;

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
