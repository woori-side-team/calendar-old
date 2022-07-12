import React from "react";
import { RecoilRoot } from "recoil";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
/*
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
*/

// Swiper.js.
import "swiper/css";

import NavigationBar from "templates/NavigationBar";
import MonthPage from "templates/month/MonthPage";
import ThemePage from "templates/theme/ThemePage";
import { defaultTheme } from "styles/Theme";
import "styles/IonicTheme.css";

setupIonicReact();

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <IonApp>
        <NavigationBar />
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/">
              <MonthPage />
            </Route>
            <Route exact path="/theme">
              <ThemePage />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
