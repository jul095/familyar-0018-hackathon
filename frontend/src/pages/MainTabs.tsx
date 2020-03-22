import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonMenuButton
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { heart, menu } from "ionicons/icons";
import FeedPage from "./FeedPage";
import ChallengePage from "./ChallengePage";
import SettingsPage from "./SettingsPage";
import Signup from "./Signup";

interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/tabs/feed" />
        <Redirect exact path="/tabs" to="/tabs/feed" />
        {/* 
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.        
        */}
        <Route path="/tabs/feed" component={FeedPage} exact={true} />
        <Route path="/tabs/challenge" component={ChallengePage} exact={true} />
        <Route path="/tabs/settings" component={SettingsPage} exact={true} />
        <Route path="/tabs/signup" component={Signup} exact={true} />
      </IonRouterOutlet>
      <IonTabBar color="light" slot="bottom">
        <IonTabButton tab="challenge" href="/tabs/challenge">
          <IonIcon
            color="danger"
            src={"assets/icon/file-tray-stacked-outline.svg"}
          />
        </IonTabButton>
        <IonTabButton tab="feed" href="/tabs/feed">
          <IonIcon color="danger" icon={heart} />
        </IonTabButton>
        <IonTabButton tab="settings">
          <IonMenuButton></IonMenuButton>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
