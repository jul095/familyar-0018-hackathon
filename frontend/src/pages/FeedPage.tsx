import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonList,
  IonAvatar,
  IonCheckbox,
  IonGrid
} from "@ionic/react";
import React, { useState } from "react";
//import ExploreContainer from "../components/ExploreContainer";
//import "./Home.css";
import { pin } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import "./FeedPage.scss";

interface StateProps {
  hasSeenTutorial: boolean;
}

interface FeedProps extends RouteComponentProps, StateProps {}

const FeedPage: React.FC<FeedProps> = hasSeenTutorial => {
  const [checked, setChecked] = useState(false);

  const changeHandler = (status: boolean) => {
    status ? setChecked(true) : setChecked(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>
            <div className="ion-header">Familie Müller</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/img/Winky.gif" />
            </IonAvatar>
            <IonLabel>
              <h1 color="red">Hallo Martin</h1>
              <h2>Hab einen schönen Tag</h2>
            </IonLabel>
          </IonItem>
        </IonList>
        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle>Frage des Tages</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="card-content">
              Martin,
              <br /> welches Spiel spielst du im Moment am liebsten?
            </div>
            <div className="task-time">Heute</div>
          </IonCardContent>
        </IonCard>

        <IonCard color="light">
          <IonItem color="danger">
            <IonIcon icon={pin} slot="start" />
            <IonLabel>
              <div className="action-of-the-day">Aktion des Tages</div>
            </IonLabel>
            <IonButton
              onClick={() => {
                changeHandler(true);
              }}
              fill="outline"
              slot="end"
              color="light"
            >
              Zeige
            </IonButton>
          </IonItem>

          <IonCardContent>
            <h2 className="card-content">Bereite einen Filmeabend vor</h2>
            {checked && (
              <IonGrid>
                <IonItem color="light">
                  <IonCheckbox color="medium" slot="start"></IonCheckbox>
                  <IonLabel>Kaufe Süßigkeiten</IonLabel>
                </IonItem>
                <IonItem color="light">
                  <IonCheckbox color="medium" slot="start"></IonCheckbox>
                  <IonLabel>
                    Suche einen Film heraus
                    <br /> oder lasse dein Kind
                    <br />
                    einen auswählen
                  </IonLabel>
                </IonItem>
              </IonGrid>
            )}
            <div className="task-time">Heute</div>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>Frage des Tages</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="card-content">
              Martin,
              <br /> worauf bist du heute am meisten stolz?
            </div>
            <div className="task-time">Gestern</div>
          </IonCardContent>
        </IonCard>

        <IonCard color="light">
          <IonItem color="medium">
            <IonIcon icon={pin} slot="start" />
            <IonLabel>
              <div>Aktion des Tages</div>
            </IonLabel>
            <IonButton fill="outline" slot="end" color="light">
              Zeige
            </IonButton>
          </IonItem>

          <IonCardContent>
            <h2 className="card-content">
              Spielt heute eine Runde
              <br /> Stadt Land Fluss
            </h2>
            {checked && (
              <IonGrid>
                <IonItem color="light">
                  <IonCheckbox color="medium" slot="start"></IonCheckbox>
                  <IonLabel>Kaufe Süßigkeiten</IonLabel>
                </IonItem>
                <IonItem color="light">
                  <IonCheckbox color="medium" slot="start"></IonCheckbox>
                  <IonLabel>
                    Geographie Kenntnisse
                    <br /> aufbessern
                  </IonLabel>
                </IonItem>
              </IonGrid>
            )}
            <div className="task-time">Gestern</div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default FeedPage;
