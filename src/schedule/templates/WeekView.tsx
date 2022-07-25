import styled from "@emotion/styled";

const WeekView = () => (
  <Container>
    <Week>
      <Day>4 Mon</Day>
    </Week>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  overflow-y: auto;

  width: 100%;
  height: 100%;
  flex: 1;
  padding-top: 28px;
`;

const Week = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 0 16px;
`;

const Day = styled.div`
  box-sizing: border-box;

  width: 124px;
  height: 160px;
  padding: 16px 6px;

  color: ${({ theme }) => theme.scale.scale8};
  border: 1px solid ${({ theme }) => theme.scale.scale2};
  border-radius: 12px;
`;

export default WeekView;
