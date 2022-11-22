import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Configuration</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div style={{ margin: 50 }}>
          <h1>
            <u>TODO:</u>
          </h1>
          <p>
            The app has a lot of gaps and also not implemented features. If I
            have to go over everything it will take too much time however I am
            aware of:
          </p>

          <h2>
            <ul>
              <li>Fast Check-out using VIN or Licence Plate</li>
              <li>Remove car from the list of parked cars after check out</li>
              <li>
                Search for cars in any facility using a variety of filters
              </li>
              <li>Front and Backend Validations</li>
              <li>
                Database model: I used just one table to make things simple
                however, it will be ideal store facilities, clients and vehicles
                in separated tables in case using a RDBMS ou documents for
                NO-SQL
              </li>
              <li>Configuration table</li>
              <li>
                Control the number of spots and track free and occupied spots
              </li>
              <li>
                Routine to download and transform the VIN off-line database,
                making possible work off line
              </li>
              <li>
                Backend API uses a trick to enable access to .json from external
                connections. Should be refactor to use a real API architecture.
              </li>

              <li>Refactor front end code to use TypeScript</li>
            </ul>
          </h2>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
