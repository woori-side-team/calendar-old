import React from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

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

const Title = styled.div<{ isActive: boolean }>`
  text-align: center;

  width: 100%;

  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

export default MonthSelector;
