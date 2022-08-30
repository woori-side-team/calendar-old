import React, { ReactNode } from "react";
import { IonPage } from "@ionic/react";
import styled from "@emotion/styled";

import ToolBar from "modules/layout/components/ToolBar";
import NavigationBar from "modules/layout/components/NavigationBar";
import { fixColumnFlexItemOverflow } from "common/styles/Mixins";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <IonPage>
    <Container>
      <ToolBar />
      {children}
      <NavigationBar />
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
