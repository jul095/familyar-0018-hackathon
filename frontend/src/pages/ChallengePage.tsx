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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from "@ionic/react";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import "./ChallengePage";

const ChallengePage: React.FC<RouteComponentProps> = () => {
  const [count, setCount] = useState(12);
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
            <IonNote slot="start">
              <div className="rank-number">
                <img
                  className="rank-number"
                  width="80px"
                  src="assets/img/zweiterPlatz.png"
                />
              </div>
            </IonNote>
            <IonLabel className="rank-number">
              <h1 className="rank-number" color="red">
                Hallo Martin
              </h1>
              <IonNote>
                <h2>
                  Du bist diese Woche auf <br />
                  Platz 2.
                </h2>
              </IonNote>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle>Sauber Glauber</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="card-content">
              Wer von euch wäscht sich am häufigsten die Hände?
            </div>
            <IonItem color="danger" onClick={() => setCount(count + 1)}>
              <IonLabel>Du</IonLabel>
              <IonNote slot="end" color="light">
                <h2>{count}</h2>
              </IonNote>
            </IonItem>
            <IonItem color="danger">
              <IonLabel>Hanna</IonLabel>
              <IonNote slot="end" color="light">
                <h2>10</h2>
              </IonNote>
            </IonItem>
            <IonItem color="danger">
              <IonLabel>Max</IonLabel>
              <IonNote slot="end" color="light">
                <h2>5</h2>
              </IonNote>
            </IonItem>
            <div className="task-time">Heute</div>
          </IonCardContent>
        </IonCard>

        <IonCard color="danger">
          <IonCardHeader>
            <IonCardTitle>Kniebeugen King</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="card-content">
              Wer schafft die meisten Kniebeugen am Stück?
            </div>
            <IonItem color="danger">
              <IonLabel>Max</IonLabel>
              <IonNote slot="end" color="light">
                <h2>28</h2>
              </IonNote>
            </IonItem>
            <IonItem color="danger">
              <IonLabel>Du</IonLabel>
              <IonNote slot="end" color="light">
                <h2>27</h2>
              </IonNote>
            </IonItem>
            <IonItem color="danger">
              <IonLabel>Hanna</IonLabel>
              <IonNote slot="end" color="light">
                <h2>5</h2>
              </IonNote>
            </IonItem>
            <div className="task-time">Heute</div>
          </IonCardContent>
        </IonCard>

        <IonCard color="medium">
          <IonCardHeader>
            <IonCardTitle>Umarmungsgegner</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div className="card-content">
              Wer verteilt heute die meisten Umarmungen?
            </div>
            <IonItem color="medium">
              <IonLabel>Hanna</IonLabel>
              <IonNote slot="end" color="light">
                <h2>57</h2>
              </IonNote>
            </IonItem>
            <IonItem color="medium">
              <IonLabel>Max</IonLabel>
              <IonNote slot="end" color="light">
                <h2>48</h2>
              </IonNote>
            </IonItem>
            <IonItem color="medium">
              <IonLabel>Du</IonLabel>
              <IonNote slot="end" color="light">
                <h2>17</h2>
              </IonNote>
            </IonItem>
            <div className="task-time">Gestern</div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ChallengePage;
