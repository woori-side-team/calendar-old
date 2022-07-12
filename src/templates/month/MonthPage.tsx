import React from "react";

import Page, { PageContent } from "templates/Page";
import MonthSelector from "templates/month/MonthSelector";

const MonthPage = () => (
  <Page>
    <PageContent>
      <MonthSelector />
    </PageContent>
  </Page>
);

export default MonthPage;
