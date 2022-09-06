import { useState } from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import styled from "@emotion/styled";

import DateInfo from "common/utils/DateInfo";
import Page, { PageContent } from "modules/layout/components/Page";
import MonthSelector from "modules/schedule/components/MonthSelector";
import MonthView from "modules/schedule/components/MonthView";
import ScheduleSheet from "modules/schedule/components/ScheduleSheet";
import WeekView from "modules/schedule/components/WeekView";
import DayView from "modules/schedule/components/DayView";

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
      <Route exact path={`${match.path}/day`}>
        <DayView selectedDayInfo={DateInfo.fromValues({ year: 2022, month: 9, monthDay: 1 })} />
      </Route>
    </>
  );
};

export default SchedulePage;
