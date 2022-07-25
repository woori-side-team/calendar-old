import React, { useState } from "react";
import styled from "@emotion/styled";

import DateInfo from "utils/DateInfo";
import Page, { PageContent } from "layout/templates/Page";
import MonthSelector from "schedule/templates/MonthSelector";
import MonthView from "schedule/templates/MonthView";
import ScheduleSheet from "schedule/templates/ScheduleSheet";

const SchedulePage = () => (
  <Page>
    <StyledPageContent>
      <MonthArea />
    </StyledPageContent>
    <ScheduleSheet />
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

export default SchedulePage;
