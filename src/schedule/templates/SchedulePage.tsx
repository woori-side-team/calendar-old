import React, { useState } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import styled from "@emotion/styled";

import DateInfo from "utils/DateInfo";
import Page, { PageContent } from "layout/templates/Page";
import MonthSelector from "schedule/templates/MonthSelector";
import MonthView from "schedule/templates/MonthView";
import ScheduleSheet from "schedule/templates/ScheduleSheet";
import WeekView from "schedule/templates/WeekView";

const SchedulePage = (props: RouteComponentProps) => (
  <Page>
    <StyledPageContent>
      <Views {...props} />
    </StyledPageContent>
    <ScheduleSheet />
  </Page>
);

const StyledPageContent = styled(PageContent)`
  display: flex;
  flex-direction: column;
`;

const Views = ({ match }: RouteComponentProps) => {
  const [selectedMonthInfo, setSelectedMonthInfo] = useState(DateInfo.now());

  return (
    <>
      <MonthSelector selectedMonthInfo={selectedMonthInfo} setSelectedMonthInfo={setSelectedMonthInfo} />
      <Route exact path={`${match.path}/month`}>
        <MonthView selectedMonthInfo={selectedMonthInfo} />
      </Route>
      <Route exact path={`${match.path}/week`}>
        <WeekView />
      </Route>
    </>
  );
};

export default SchedulePage;
