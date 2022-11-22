import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createParkingAsync } from "./parkingSlice";

function ParkingForm() {
  const dispatch = useDispatch();

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
  const [facilityname, setFacilityname] = useState("");
  const [facilityaddress, setFacilityaddress] = useState("");

  function submitHandler(e: any) {
    e.preventDefault();
    const formData = {
      parking: {
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
    dispatch(createParkingAsync(formData));
    resetState();
  }

  function resetState() {
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
    setFacilityname("");
    setFacilityaddress("");
  }

  return (
    <div>
      <h1>ParkingForm</h1>
      <form>
        <input
          type="text"
          className="form-control text-start"
          name="clientname"
          value={clientname}
          onChange={(e) => setClientname(e.target.value)}
        />
        <textarea
          className="form-control text-start"
          name="clientaddress"
          value={clientaddress}
          onChange={(e) => setClientaddress(e.target.value)}
        />
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ParkingForm;
