import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText, IonButton, IonCol } from '@ionic/react';

//Should be added to the database and colected when checking the car in.
const pic = "https://image.cnbcfm.com/api/v1/image/106429544-1583520556948gemera_exterior_5_high.jpg?v=1583520680&w=740&h=416&ffmt=webp&vtcrop=y";

function ParkingSpot({ item, onCheckout }) {
	return (
		<IonCol size={12} sizeSm={6} sizeMd={4} sizeLg={3} sizeXl={2}>
			<IonCard>
				<img alt={item.carvin + item.carmake + item.carmodel + item.caryear + item.cartrim} src={pic} />
				<IonCardHeader>
					<IonCardTitle>SPOT: {item.facilityspot}</IonCardTitle>
					<IonCardSubtitle>{item.carmake}:{item.carmodel}:{item.caryear}:{item.cartrim}</IonCardSubtitle>
				</IonCardHeader>

				<IonCardContent>
					<IonText>
						<h6>
							{`Identification: ${item.carvin} (${item.carplate}) : ${item.clientname}`}
						</h6>
					</IonText>
					<br />
					<IonText><h6><i>Checked in by:</i></h6></IonText>
					<IonText><b>{item.checkinatt}</b> at <b>{item.checkintime}</b></IonText>

				</IonCardContent>

				<IonButton expand='block' fill="solid" color="primary" onClick={onCheckout}>Checkout</IonButton>

				{/* This button was just helping me to test */}
				{/* <IonButton fill="solid" color="danger" onClick={onDelete}>Delete</IonButton> */}

			</IonCard>
		</IonCol>
	);
}
export default ParkingSpot;