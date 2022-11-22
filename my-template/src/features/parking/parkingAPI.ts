import { ParkingDeleteData, ParkingFormData, ParkingsState } from "./parkingSlice";

const API_URL = "http://localhost:3000";

export async function fetchParkings() {
  return fetch(`${API_URL}/parkings.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as ParkingsState;
    });
}

export async function createParking(payload: ParkingFormData) {
  const parking = payload.parking;
  return fetch(`${API_URL}/parkings.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parking,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as ParkingsState;
    });
}
export async function updateParking(payload: ParkingFormData) {
  const parking = payload.parking;
  return fetch(`${API_URL}/parkings/${parking.id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parking,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as ParkingsState;
    });
}

export async function destroyParking(payload: ParkingDeleteData) {
  const parking = payload.parking;
  return fetch(`${API_URL}/parkings/${parking.parking_id}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parking,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as ParkingsState;
    });
}
