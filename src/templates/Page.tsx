import React, { ReactNode } from "react";
import { IonPage } from "@ionic/react";
import styled from "@emotion/styled";

import ToolBar from "templates/ToolBar";
import NavigationBar from "templates/NavigationBar";
import ScheduleSheet from "templates/ScheduleSheet";
import { fixColumnFlexItemOverflow } from "styles/Mixins";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <IonPage>
    <Container>
      <ToolBar />
      {children}
      <NavigationBar />
      <ScheduleSheet />
    </Container>
  </IonPage>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const PageContent = styled.div`
  ${fixColumnFlexItemOverflow}

  width: 100%;
  height: 100%;
  flex: 1;
`;

export default Page;
