import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import ParkingLot from "../features/parking/ParkingLot";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Parked Cars</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Parked Cars</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ParkingLot />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
