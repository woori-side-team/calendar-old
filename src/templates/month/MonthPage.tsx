import React, { useState } from "react";

import { getNow, MonthInfo } from "utils/DateUtils";
import Page, { PageContent } from "templates/Page";
import MonthSelector from "templates/month/MonthSelector";
import MonthView from "templates/month/MonthView";

const MonthPage = () => {
  const [currentMonthInfo, setCurrentMonthInfo] = useState<MonthInfo>(getNow());

  return (
    <Page>
      <PageContent>
        <MonthSelector setCurrentMonthInfo={setCurrentMonthInfo} />
        <MonthView currentMonthInfo={currentMonthInfo} />
      </PageContent>
    </Page>
  );
};

export default MonthPage;
