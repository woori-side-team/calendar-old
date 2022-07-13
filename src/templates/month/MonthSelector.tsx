import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { selectedMonthState, selectedYearState } from "states/Selection";
import { useMonths } from "hooks/useMonths";

const MonthSelector = () => {
  const setSelectedYear = useSetRecoilState(selectedYearState);
  const setSelectedMonth = useSetRecoilState(selectedMonthState);
  const { monthInfos, selectIndex, setSelectIndex } = useMonths();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleSwiper = (newSwiper: SwiperType) => {
    setSwiper(newSwiper);
  };

  const handleClickTitle = (index: number) => {
    setSelectIndex(index);
  };

  const handleSlideChange = () => {
    if (swiper !== null) {
      setSelectIndex(swiper.activeIndex);
    }
  };

  useEffect(() => {
    setSelectedYear(monthInfos[selectIndex].year);
    setSelectedMonth(monthInfos[selectIndex].month);

    if (swiper !== null) {
      swiper.slideTo(selectIndex);
    }
  }, [selectIndex, swiper, monthInfos, setSelectedYear, setSelectedMonth]);

  return (
    <Swiper slidesPerView={3} centeredSlides onSwiper={handleSwiper} onSlideChange={handleSlideChange}>
      {monthInfos.map((monthInfo, index) => (
        <SwiperSlide key={index}>
          <Title
            isActive={index === selectIndex}
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
