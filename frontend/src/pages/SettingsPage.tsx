import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonNote,
  IonLabel,
  IonCheckbox,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon
} from "@ionic/react";
import React from "react";
//import ExploreContainer from "../components/ExploreContainer";
//import "./Home.css";
import { add } from "ionicons/icons";
import { RouteComponentProps } from "react-router";

const SettingsPage: React.FC<RouteComponentProps> = props => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Familie Name</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push("/new")}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
