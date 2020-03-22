import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonToggle
} from "@ionic/react";
import {
  calendar,
  contacts,
  hammer,
  help,
  informationCircle,
  logIn,
  logOut,
  map,
  person,
  personAdd,
  bulb,
  heart
} from "ionicons/icons";
import React, { useState } from "react";
import { connect } from "../data/connect";
import { RouteComponentProps, withRouter } from "react-router";
import { setDarkMode } from "../data/user/user.actions";

const routes = {
  // appPages: [
  //   { title: "Schedule", path: "/tabs/schedule", icon: calendar },
  //   { title: "Speakers", path: "/tabs/speakers", icon: contacts },
  //   { title: "Map", path: "/tabs/map", icon: map },
  //   { title: "About", path: "/tabs/about", icon: informationCircle }
  // ],
  loggedInPages: [
    { title: "Account", path: "/account", icon: person },
    { title: "Support", path: "/support", icon: help },
    { title: "Logout", path: "/logout", icon: logOut }
  ],
  loggedOutPages: [
    // { title: "Login", path: "/login", icon: logIn },
    // { title: "Support", path: "/support", icon: help },
    { title: "Feed", path: "/tabs/feed", icon: heart },

    { title: "Lade ein", path: "/tabs/signup", icon: personAdd }
  ]
};

interface Pages {
  title: string;
  path: string;
  icon: { ios: string; md: string };
  routerDirection?: string;
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
}

interface DispatchProps {
  setDarkMode: typeof setDarkMode;
}

interface MenuProps extends RouteComponentProps, StateProps, DispatchProps {}

const Menu: React.FC<MenuProps> = ({
  darkMode,
  history,
  isAuthenticated,
  setDarkMode
}) => {
  const [disableMenu, setDisableMenu] = useState(false);

  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button routerLink={p.path} routerDirection="none">
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu type="overlay" disabled={disableMenu} contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Einstellungen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        {/* <IonList>
          <IonListHeader>Navigate</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList> */}
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {isAuthenticated
            ? renderlistItems(routes.loggedInPages)
            : renderlistItems(routes.loggedOutPages)}
        </IonList>
        <IonList>
          <IonListHeader>UI</IonListHeader>
          <IonItem
            onClick={() => {
              setDisableMenu(true);
              history.push("/tutorial");
            }}
          >
            <IonIcon slot="start" icon={hammer} />
            Einführung
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonIcon slot="start" icon={bulb} />
            <IonLabel>Dark Theme</IonLabel>
            <IonToggle
              checked={darkMode}
              onClick={() => setDarkMode(!darkMode)}
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default connect<{}, StateProps, {}>({
  mapStateToProps: state => ({
    darkMode: state.user.darkMode,
    isAuthenticated: state.user.isLoggedin
  }),
  mapDispatchToProps: {
    setDarkMode
  },
  component: withRouter(Menu)
});
