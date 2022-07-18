import React, { useState } from "react";

import { getNow, MonthInfo } from "utils/DateUtils";
import Page, { PageContent } from "templates/Page";
import MonthSelector from "templates/month/MonthSelector";
import MonthView from "templates/month/MonthView";

const MonthPage = () => (
  <Page>
    <PageContent>
      <MonthArea />
    </PageContent>
  </Page>
);

const MonthArea = () => {
  const [selectedMonthInfo, setSelectedMonthInfo] = useState<MonthInfo>(getNow());

  return (
    <>
      <MonthSelector selectedMonthInfo={selectedMonthInfo} setSelectedMonthInfo={setSelectedMonthInfo} />
      <MonthView selectedMonthInfo={selectedMonthInfo} />
    </>
  );
};

export default MonthPage;
