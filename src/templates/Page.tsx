import React, { ReactNode } from "react";
import { IonPage } from "@ionic/react";
import styled from "@emotion/styled";

import NavigationBar from "templates/NavigationBar";
import UpcomingSheet from "templates/UpcomingSheet";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => (
  <IonPage>
    <Container>
      <NavigationBar />
      {children}
      <UpcomingSheet />
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
  width: 100%;
  height: 100%;
  flex: 1;
`;

export default Page;
