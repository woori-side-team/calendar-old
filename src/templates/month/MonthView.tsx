import React from "react";
import styled from "@emotion/styled";

const weekDayNames = Array.from("일월화수목금토");

const MonthView = () => (
  <Container>
    <Row>
      {weekDayNames.map(name => (
        <NameCell key={name}>{name}</NameCell>
      ))}
    </Row>
  </Container>
);

const Container = styled.div`
  width: 100%;
  margin-top: 28px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const Cell = styled.div`
  text-align: center;

  width: 100%;
  flex: 1;

  &:first-of-type {
    color: ${({ theme }) => theme.tint.red};
  }

  &:last-of-type {
    color: ${({ theme }) => theme.tint.blue};
  }
`;

const NameCell = styled(Cell)`
  line-height: 28px;
`;

const DayCell = styled(Cell)`
  height: 44px;
`;

export default MonthView;
