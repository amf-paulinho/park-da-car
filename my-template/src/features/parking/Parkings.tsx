import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import Parking from "./Parking";
import ParkingForm from "./ParkingForm";
import {
  fetchParkingsAsync,
  selectParkings,
  selectStatus,
  Statuses,
  updateParkingAsync,
} from "./parkingSlice";

function Parkings() {
  const parkings = useAppSelector(selectParkings);
  const status = useAppSelector(selectStatus);
  const dispatch = useDispatch();

  console.log(status);

  const [parkingToEdit, setParkingToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchParkingsAsync());
  }, [dispatch]);

  function toggleEditForm(parking_id?: number) {
    if (parkingToEdit === parking_id) {
      setParkingToEdit(0);
    } else {
      setParkingToEdit(parking_id as number);
    }
  }

  function submitEdit(formData: any) {
    dispatch(updateParkingAsync(formData));
    toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>;
  } else {
    contents = (
      <div className="card">
        <div className="card-body">
          <h3>{status}</h3>
          <ParkingForm />
          {parkings &&
            parkings.length > 0 &&
            parkings.map((parking) => {
              return (
                <div key={parking.id} style={{ margin: "5em" }}>
                  <Parking
                    dispatch={dispatch}
                    parking={parking}
                    toggleEditForm={() => toggleEditForm(parking.id)}
                    parkingToEdit={parkingToEdit}
                    submitEdit={submitEdit}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Parkings</h1>
      {contents}
    </div>
  );
}

export default Parkings;
