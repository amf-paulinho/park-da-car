import React, { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";

function Parking(props: any) {
  const [clientname, setClientname] = useState(props.parking.clientname);
  const [clientaddress, setClientaddress] = useState(
    props.parking.clientaddress
  );
  const [clientphone, setClientphone] = useState(props.parking.clientphone);
  const [carvin, setCarvin] = useState(props.parking.carvin);
  const [caryear, setCaryear] = useState(props.parking.caryear);
  const [carmake, setCarmake] = useState(props.parking.carmake);
  const [carmodel, setCarmodel] = useState(props.parking.carmodel);
  const [cartrim, setCartrim] = useState(props.parking.cartrim);
  const [carplate, setCarplate] = useState(props.parking.carplate);
  const [checkintime, setCheckintime] = useState(props.parking.checkintime);
  const [checkouttime, setCheckouttime] = useState(props.parking.checkouttime);
  const [checkinatt, setCheckinatt] = useState(props.parking.checkinatt);
  const [checkoutatt, setCheckoutatt] = useState(props.parking.checkoutatt);
  const [facilityspot, setFacilityspot] = useState(props.parking.facilityspot);
  const [facilityname, setFacilityname] = useState(props.parking.facilityname);
  const [facilityaddress, setFacilityaddress] = useState(
    props.parking.facilityaddress
  );

  const [isEditing, setIsEditing] = useState(
    props.parkingToEdit === props.parking.id
  );
  useEffect(() => {
    setIsEditing(props.parkingToEdit === props.parking.id);
  }, [props.parkingToEdit, props.parking.id]);

  function submitHandler(e: any) {
    e.preventDefault();
    const formData = {
      parking: {
        id: props.parking.id,
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
      },
    };
    props.submitEdit(formData);
    resetState();
  }

  function resetState() {
    setClientname(props.parking.clientname);
    setClientaddress(props.parking.clientaddress);
    setClientphone(props.parking.clientphone);
    setCarvin(props.parking.carvin);
    setCaryear(props.parking.caryear);
    setCarmake(props.parking.carmake);
    setCarmodel(props.parking.carmodel);
    setCartrim(props.parking.cartrim);
    setCarplate(props.parking.carplate);
    setCheckintime(props.parking.checkintime);
    setCheckouttime(props.parking.checkouttime);
    setCheckinatt(props.parking.checkinatt);
    setCheckoutatt(props.parking.checkoutatt);
    setFacilityspot(props.parking.facilityspot);
    setFacilityname(props.parking.facilityname);
    setFacilityaddress(props.parking.facilityaddress);
  }

  const titleElement = (
    <h2 className="title text-start">{props.parking.clientname}</h2>
  );
  const bodyElement = (
    <p className="card-text text-start">{props.parking.clientaddress}</p>
  );
  const editableTitle = (
    <input
      type="text"
      className="form-control text-start"
      value={clientname}
      onChange={(e) => setClientname(props.parking.clientname)}
    />
  );
  const editableBody = (
    <textarea
      className="form-control text-start"
      value={clientaddress}
      onChange={(e) => setClientaddress(e.target.value)}
    />
  );
  const submitButton = (
    <button
      type="submit"
      className="form-control"
      onClick={(e) => submitHandler(e)}
    >
      Submit
    </button>
  );
  return (
    <div>
      <div className="row">
        <div className="col-8">{isEditing ? editableTitle : titleElement}</div>
        <div className="col-4">
          <ButtonGroup
            parking_id={props.parking.id}
            dispatch={props.dispatch}
            toggleEditForm={props.toggleEditForm}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8">{isEditing ? editableBody : bodyElement}</div>
      </div>
      <div className="row">
        <div className="col-2">{isEditing ? submitButton : ""}</div>
      </div>
    </div>
  );
}

export default Parking;
