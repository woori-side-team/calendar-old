import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

import { MonthInfo } from "utils/DateUtils";
import useMonthSelection from "hooks/useMonthSelection";

interface MonthSelectorProps {
  setCurrentMonthInfo: (value: MonthInfo) => void;
}

const MonthSelector = ({ setCurrentMonthInfo }: MonthSelectorProps) => {
  const { monthInfos, selectIndex, setSelectIndex } = useMonthSelection();
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
    setCurrentMonthInfo(monthInfos[selectIndex]);

    if (swiper !== null) {
      swiper.slideTo(selectIndex);
    }
  }, [selectIndex, swiper, monthInfos, setCurrentMonthInfo]);

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
