import React from 'react';
import {
	IonGrid, IonRow, IonFab, IonFabButton, IonFabList, IonIcon,
	IonButtons,
	IonButton,
	IonModal,
	IonHeader,
	IonContent,
	IonToolbar,
	IonTitle,
	useIonAlert
} from '@ionic/react';

import { chevronUpCircle, enter, eye, logOut } from 'ionicons/icons';
import { useGetParkingsQuery } from "../api/apiSlice"
import Loading from "./Loading";
import ParkingForm from "./ParkingForm";
import ParkingSpot from "./ParkingSpot";

const ParkingLot = () => {
	const [presentAlert] = useIonAlert();

	const showMessage = (msg) => {
		presentAlert({
			header: 'Alert',
			subHeader: 'Project Todo',
			message: msg,
			buttons: ['OK'],
		});
	}

	const {
		data: parkedVehicles,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetParkingsQuery();

	const [showCheckinModal, setShowCheckinModal] = React.useState(false);
	const [checkoutVehicle, setCheckoutVehicle] = React.useState(undefined);

	const startCheckIn = () => {
		setCheckoutVehicle(undefined);
		setShowCheckinModal(true);

	}

	const startCheckout = (vehicle) => {
		setCheckoutVehicle(vehicle);
		setShowCheckinModal(true);
	}

	let content;
	if (isLoading) {
		content = (<Loading />);
	} else if (isSuccess) {
		content = (<IonGrid>
			<IonRow class="ion-justify-content-center">
				{parkedVehicles.filter(f => f.setCheckoutatt == null).map(vehicle => {
					return (<ParkingSpot key={vehicle.id} item={vehicle} onCheckout={() => startCheckout(vehicle)} />);
				})}
			</IonRow>
		</IonGrid>);
	} else if (isError) {
		content = (<p>{error}</p>);
	}

	return (<>
		{content}


		<IonModal isOpen={showCheckinModal} backdropDismiss={false} >

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="end">
						<IonButton onClick={() => setShowCheckinModal(false)}>Close</IonButton>
					</IonButtons>
					<IonTitle>Parking Spot {checkoutVehicle != undefined ? "Check-OUT" : "Check-IN"}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<ParkingForm vehicle={checkoutVehicle} />
			</IonContent>
		</IonModal>

		<IonFab slot="fixed" vertical="bottom" horizontal="end">
			<IonFabButton>
				<IonIcon icon={chevronUpCircle}></IonIcon>
			</IonFabButton>
			<IonFabList side="top">
				<IonFabButton onClick={() => showMessage("Open the check-OUT screen using FAST CHECK-OUT mode: User just need to inform VIN or Licence Place to start Checkout.")}>
					<IonIcon color='danger' icon={logOut}></IonIcon>
				</IonFabButton>

				<IonFabButton onClick={() => showMessage("Hability to search cars using a variety of filter combination: Facility, Vin, Owner, Facility, Etc. This can be usefull to find spots in another facility or find a car in any facility.")}>
					<IonIcon icon={eye}></IonIcon>
				</IonFabButton>

				<IonFabButton onClick={() => startCheckIn()} >
					<IonIcon color='success' icon={enter}></IonIcon>
				</IonFabButton>

			</IonFabList>
		</IonFab>

	</>);
}
export default ParkingLot;