import React, { useState } from "react";
import styled from "@emotion/styled";

import DateInfo from "utils/DateInfo";
import Page, { PageContent } from "templates/Page";
import MonthSelector from "templates/month/MonthSelector";
import MonthView from "templates/month/MonthView";

const MonthPage = () => (
  <Page>
    <StyledPageContent>
      <MonthArea />
    </StyledPageContent>
  </Page>
);

const StyledPageContent = styled(PageContent)`
  display: flex;
  flex-direction: column;
`;

const MonthArea = () => {
  const [selectedMonthInfo, setSelectedMonthInfo] = useState(DateInfo.now());

  return (
    <>
      <MonthSelector selectedMonthInfo={selectedMonthInfo} setSelectedMonthInfo={setSelectedMonthInfo} />
      <MonthView selectedMonthInfo={selectedMonthInfo} />
    </>
  );
};

export default MonthPage;
