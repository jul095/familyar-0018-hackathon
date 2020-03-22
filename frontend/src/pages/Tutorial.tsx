import React, { useState, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonSlides,
  IonSlide,
  IonIcon,
  IonItemDivider,
  IonItem,
  IonInput,
  IonPicker,
  IonLabel,
  IonDatetime
} from "@ionic/react";
import {
  arrowForward,
  contract,
  arrowUp,
  arrowDown,
  text
} from "ionicons/icons";
import { setHasSeenTutorial } from "../data/user/user.actions";
import "./Tutorial.scss";
import { connect } from "../data/connect";
import { RouteComponentProps, Redirect } from "react-router";
import MyPicker from "../components/MyPicker";

interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
}

export interface ISessionTime {
  weekday: string;
}

interface TutorialProps extends OwnProps, DispatchProps, ISessionTime {}

const Tutorial: React.FC<TutorialProps> = ({ history, setHasSeenTutorial }) => {
  const [showSkip, setShowSkip] = useState(true);
  const slideRef = useRef<HTMLIonSlidesElement>(null);
  const [surname, setSurname] = useState<string>();
  const [name, setName] = useState<string>();
  const [familyMember, setFamilyMember] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>("2020-02-22T");

  const customMonthShortNames = [
    "Januar",
    "Februar",
    "März",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];

  // managing Picker
  const [pickerIsOpen, setPickerIsOpen] = useState(false);
  const [memberState, setMemberState] = useState<ISessionTime>({
    weekday: "Opa, Mutter, Kind, ..."
  });

  const startApp = async () => {
    //console.log(setHasSeenTutorial);
    await setHasSeenTutorial(true);
    history.push("/tabs", { direction: "none" });
  };

  const transitionForm = () => {
    slideRef.current!.slideTo(2);
  };

  const dislikeFamilyar = () => {
    history.push("/login", { direction: "none" });
  };

  const handleSlideChangeStart = () => {
    slideRef.current!.isEnd().then(isEnd => setShowSkip(!isEnd));
  };

  return (
    <IonPage id="tutorial-page">
      {/* <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="end">
            {showSkip && (
              <IonButton color="primary" onClick={startApp}>
                Skip
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader> */}
      <IonContent color="danger" fullscreen>
        <IonSlides
          ref={slideRef}
          onIonSlideWillChange={handleSlideChangeStart}
          pager={false}
        >
          <IonSlide>
            <img
              height="10px"
              src="assets/img/logo.png"
              alt=""
              className="slide-logo"
            />
            <h2 className="slide-title">
              Willkommen bei <b>Familyar</b>
            </h2>
            <h3>Deiner Familien-App</h3>
            <p>Ist deine Familie schon familyar?</p>

            <img
              src="assets/img/thumpsup.png"
              onClick={() => transitionForm()}
              className="thumbs-image"
            />

            <img
              src="assets/img/thumpsdown.png"
              onClick={() => dislikeFamilyar()}
              className="thumbs-image"
            />
          </IonSlide>

          <IonSlide>
            <img
              src="assets/img/ica-slidebox-img-4.png"
              alt=""
              className="slide-image"
            />
            <h2 className="slide-title">Erstelle deine Familie!</h2>
            <IonItemDivider color="danger">
              Dein Familienname ist...
            </IonItemDivider>
            <IonItem>
              <IonInput
                value={surname}
                placeholder="Familienname"
                onIonChange={e => setSurname(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="danger">Dein Vorname ist...</IonItemDivider>
            <IonItem>
              <IonInput
                value={name}
                placeholder="Vorname"
                onIonChange={e => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="danger">Du bist...</IonItemDivider>
            <IonButton
              onClick={() => {
                setPickerIsOpen(true);
              }}
            >
              {memberState.weekday}
            </IonButton>
            <IonItemDivider color="danger">
              Du feierst Geburtstag am...
            </IonItemDivider>
            <IonItem>
              {/* <IonLabel>Geburtstag</IonLabel> */}
              <IonDatetime
                placeholder="Wähle Datum"
                monthShortNames={
                  "Januar ,Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember"
                }
                value={selectedDate}
                onIonChange={e => setSelectedDate(e.detail.value!)}
              ></IonDatetime>
            </IonItem>
            <IonItemDivider color="danger">
              Deine E-Mail Adresse ist...
            </IonItemDivider>
            <IonItem>
              <IonInput
                value={mail}
                placeholder="Mail"
                onIonChange={e => setMail(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <MyPicker
              isOpen={pickerIsOpen}
              onCancel={() => {
                setPickerIsOpen(false);
              }}
              onSave={(_value: any) => {
                console.log(_value);
                let { Day } = _value;
                setMemberState({
                  weekday: Day.value
                });
                setPickerIsOpen(false);
              }}
            />
            <IonButton color="light" fill="clear" onClick={startApp}>
              Loslegen
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: {
    setHasSeenTutorial
  },
  component: Tutorial
});
