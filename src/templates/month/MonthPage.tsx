import React from "react";

import Page, { PageContent } from "templates/Page";
import MonthSelector from "templates/month/MonthSelector";
import MonthView from "templates/month/MonthView";

const MonthPage = () => (
  <Page>
    <PageContent>
      <MonthSelector />
      <MonthView />
    </PageContent>
  </Page>
);

export default MonthPage;
