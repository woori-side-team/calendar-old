import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { css, Theme } from "@emotion/react";

const months = ["2022.01", "2022.02", "2022.03", "2022.04", "2022.05"];

const MonthSelector = () => (
  <Swiper slidesPerView={3} centeredSlides>
    {months.map((value, index) => (
      <SwiperSlide key={value}>
        {({ isActive }) => <Slide value={value} index={index} isActive={isActive} />}
      </SwiperSlide>
    ))}
  </Swiper>
);

interface SlideProps {
  value: string;
  index: number;
  isActive: boolean;
}

const Slide = ({ value, index, isActive }: SlideProps) => {
  const swiper = useSwiper();

  const handleClick = () => {
    swiper.slideTo(index);
  };

  return (
    <Title isActive={isActive} onClick={handleClick}>
      {value}
    </Title>
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
