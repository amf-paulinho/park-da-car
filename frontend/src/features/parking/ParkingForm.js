import React from "react";
import { useUpdateParkingMutation, useAddParkingMutation } from "../api/apiSlice";
import { useState } from "react";
import { IonItem, IonInput, IonSelect, IonSelectOption, IonLabel, IonButton, IonLoading, useIonAlert } from "@ionic/react";
import AppConfig from "../../App.config";

const ParkingForm = ({ vehicle = { id: 0 } }) => {


  const [showLoading, setShowLoading] = useState(false);
  const [presentAlert] = useIonAlert();

  const [clientname, setClientname] = useState("");
  const [clientaddress, setClientaddress] = useState("");
  const [clientphone, setClientphone] = useState("");
  const [carvin, setCarvin] = useState("");
  const [caryear, setCaryear] = useState("");
  const [carmake, setCarmake] = useState("");
  const [carmodel, setCarmodel] = useState("");
  const [cartrim, setCartrim] = useState("");
  const [carplate, setCarplate] = useState("");
  const [checkintime, setCheckintime] = useState("");
  const [checkouttime, setCheckouttime] = useState("");
  const [checkinatt, setCheckinatt] = useState("");
  const [checkoutatt, setCheckoutatt] = useState("");
  const [facilityspot, setFacilityspot] = useState("");
  const [facilityname, setFacilityname] = useState("Airship Happy Parking");
  const [facilityaddress, setFacilityaddress] = useState("0x0111 Samba ave - Linux/GNU - 0x04bf");

  const [addParking] = useAddParkingMutation();
  const [updateParking] = useUpdateParkingMutation();

  const showMessage = (msg = "You've Checked In !") => {
    presentAlert({
      header: 'Alert',
      subHeader: 'Success',
      message: msg,
      buttons: ['OK'],
    });
  }

  const resetState = () => {
    setClientname("");
    setClientaddress("");
    setClientphone("");
    setCarvin("");
    setCaryear("");
    setCarmake("");
    setCarmodel("");
    setCartrim("");
    setCarplate("");
    setCheckintime("");
    setCheckouttime("");
    setCheckinatt("");
    setCheckoutatt("");
    setFacilityspot("");
  }

  const fillState = () => {
    setClientname(vehicle.clientname);
    setClientaddress(vehicle.clientaddress);
    setClientphone(vehicle.clientphone);
    setCarvin(vehicle.carvin);
    setCaryear(vehicle.caryear);
    setCarmake(vehicle.carmake);
    setCarmodel(vehicle.carmodel);
    setCartrim(vehicle.cartrim);
    setCarplate(vehicle.carplate);
    setCheckintime((vehicle.checkintime ?? "").substring(0, 16));
    setCheckouttime((vehicle.checkouttime ?? "").substring(0, 16));
    setCheckinatt(vehicle.checkinatt);
    setCheckoutatt(vehicle.checkoutatt);
    setFacilityspot(vehicle.facilityspot);
    setFacilityaddress(vehicle.facilityaddress);
    setFacilityname(vehicle.facilityname);
  }

  const checkInOrOut = () => {

    const record = {
      clientname: clientname,
      clientaddress: clientaddress,
      clientphone: clientphone,
      carvin: carvin,
      caryear: caryear,
      carmake: carmake,
      carmodel: carmodel,
      cartrim: cartrim,
      carplate: carplate,
      checkintime: checkintime,
      checkouttime: checkouttime,
      checkinatt: checkinatt,
      checkoutatt: checkoutatt,
      facilityspot: facilityspot,
      facilityname: facilityname,
      facilityaddress: facilityaddress,
    }

    if (vehicle.id > 0) {
      record.id = vehicle.id;
      updateParking(record).then(_ => showMessage("You've Checked OUT !"));
    }
    else
      addParking(record).then(_ => showMessage());

    resetState();
  };

  //WAUR4AFD0DN289897

  const setCarDetails = (details) => {
    if (details == undefined || details.make.trim() == "") {
      resetState();
      return;
    }

    setCaryear(details.year);
    setCarmake(details.make);
    setCarmodel(details.model);
    setCartrim(`${details.series} ${details.fuel} ${details.doors} doors`);
  }

  const validateVin = () => {
    const END_POINT = `${AppConfig.BackendEndpoint}/parkings/${carvin}/checkvin.json`

    setShowLoading(true);

    fetch(END_POINT)
      .then((response) => response.json())
      .then((json) => {
        setShowLoading(false);
        setCarDetails(json);
      })
      .catch((error) => {
        setShowLoading(false);
        setCarDetails(undefined);
      });
  }

  React.useEffect(() => {

    if (vehicle != undefined && vehicle.id > 0) {
      fillState();
    }

  }, []);




  return (<>
    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Car VIN</IonLabel>
      <IonInput onKeyUp={(e) => { if (e.nativeEvent.key == "Enter") validateVin() }} onIonBlur={() => validateVin()} maxlength={20} placeholder="car VIN" value={carvin} onIonChange={(e) => setCarvin(e.detail.value)} ></IonInput>
    </IonItem>
    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Car Make</IonLabel>
      <IonInput maxlength={50} placeholder="car make" value={carmake} onIonChange={(e) => setCarmake(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Car Model</IonLabel>
      <IonInput maxlength={50} placeholder="car model" value={carmodel} onIonChange={(e) => setCarmodel(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Car Year</IonLabel>
      <IonInput maxlength={50} placeholder="car year" value={caryear} onIonChange={(e) => setCaryear(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Car Trim</IonLabel>
      <IonInput maxlength={50} placeholder="car trim" value={cartrim} onIonChange={(e) => setCartrim(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Car Plate</IonLabel>
      <IonInput maxlength={50} placeholder="Enter car plate" value={carplate} onIonChange={(e) => setCarplate(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Owner</IonLabel>
      <IonInput type="text" maxlength={50} placeholder="Enter client name" value={clientname} onIonChange={(e) => setClientname(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Owner Address</IonLabel>
      <IonInput maxlength={50} placeholder="Enter client address" value={clientaddress} onIonChange={(e) => setClientaddress(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Owner Phone</IonLabel>
      <IonInput maxlength={50} placeholder="Enter client phone" value={clientphone} onIonChange={(e) => setClientphone(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Car Spot</IonLabel>
      <IonInput maxlength={50} placeholder="Where is the car" value={facilityspot} onIonChange={(e) => setFacilityspot(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem disabled={vehicle.id > 0} fill="solid">
      <IonLabel position="stacked">Chekin Attendant</IonLabel>
      <IonSelect placeholder="Select Attendant" value={checkinatt} onIonChange={(e) => setCheckinatt(e.detail.value)} >
        <IonSelectOption value="Amelia Earhart">Amelia Earhart</IonSelectOption>
        <IonSelectOption value="Steve Reeves">Steve Reeves</IonSelectOption>
        <IonSelectOption value="Helio Gracie">Helio Gracie</IonSelectOption>
        <IonSelectOption value="Rita de Cassia">Rita de Cassia</IonSelectOption>
        <IonSelectOption value="Linus Torvalds">Linus Torvalds</IonSelectOption>
        <IonSelectOption value="Bill Joy">Bill Joy</IonSelectOption>
        <IonSelectOption value="Abraham Lincoln">Abraham Lincoln</IonSelectOption>
        <IonSelectOption value="Harriet Tubman">Harriet Tubman</IonSelectOption>
        <IonSelectOption value="William Shakespeare">William Shakespeare</IonSelectOption>
        <IonSelectOption value="Princesa Isabel">Princesa Isabel</IonSelectOption>
      </IonSelect>
    </IonItem>

    <br />

    <IonItem disabled={vehicle.id > 0} counter={true} fill="solid">
      <IonLabel position="stacked">Chekin Time</IonLabel>
      <IonInput type="datetime-local" maxlength={50} placeholder="Enter chekin time" value={checkintime} onIonChange={(e) => setCheckintime(e.detail.value)} ></IonInput>
    </IonItem>

    {vehicle.id > 0
      &&
      <>
        <IonItem fill="solid">
          <IonLabel position="stacked">Chekout Attendant</IonLabel>
          <IonSelect placeholder="Select Attendant" value={checkoutatt} onIonChange={(e) => setCheckoutatt(e.detail.value)} >
            <IonSelectOption value="Amelia Earhart">Amelia Earhart</IonSelectOption>
            <IonSelectOption value="Steve Reeves">Steve Reeves</IonSelectOption>
            <IonSelectOption value="Helio Gracie">Helio Gracie</IonSelectOption>
            <IonSelectOption value="Rita de Cassia">Rita de Cassia</IonSelectOption>
            <IonSelectOption value="Linus Torvalds">Linus Torvalds</IonSelectOption>
            <IonSelectOption value="Bill Joy">Bill Joy</IonSelectOption>
            <IonSelectOption value="Abraham Lincoln">Abraham Lincoln</IonSelectOption>
            <IonSelectOption value="Harriet Tubman">Harriet Tubman</IonSelectOption>
            <IonSelectOption value="William Shakespeare">William Shakespeare</IonSelectOption>
            <IonSelectOption value="Princesa Isabel">Princesa Isabel</IonSelectOption>
          </IonSelect>
        </IonItem>

        <br />

        <IonItem counter={true} fill="solid">
          <IonLabel position="stacked">Checkout Time</IonLabel>
          <IonInput type="datetime-local" maxlength={50} placeholder="Enter checkout time" value={checkouttime} onIonChange={(e) => setCheckouttime(e.detail.value)} ></IonInput>
        </IonItem>
      </>}

    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Facility</IonLabel>
      <IonInput maxlength={50} placeholder="Enter facility name" value={facilityname} onIonChange={(e) => setFacilityname(e.detail.value)} ></IonInput>
    </IonItem>

    <IonItem counter={true} fill="solid" disabled={true}>
      <IonLabel position="stacked">Facility Address</IonLabel>
      <IonInput maxlength={50} placeholder="Enter facility address" value={facilityaddress} onIonChange={(e) => setFacilityaddress(e.detail.value)} ></IonInput>
    </IonItem>

    <br />

    <IonButton expand="block" color={vehicle.id > 0 ? "danger" : "success"} onClick={() => checkInOrOut()} > {vehicle.id > 0 ? "Check-Out" : "Check-In"}</IonButton>

    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={7000}
    />

  </>
  );

}

export default ParkingForm;
