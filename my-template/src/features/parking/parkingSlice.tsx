import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../../app/store";
import {
  fetchParkings,
  createParking,
  destroyParking,
  updateParking,
} from "./parkingAPI";

export interface ParkingState {
  id?: number;
  clientname?: string;
  clientaddress?: string;
  clientphone?: string;
  carvin?: string;
  caryear?: string;
  carmake?: string;
  carmodel?: string;
  cartrim?: string;
  carplate?: string;
  checkintime?: any;
  checkouttime?: any;
  checkinatt?: string;
  checkoutatt?: string;
  facilityspot?: string;
  facilityname?: string;
  facilityaddress?: string;
  created_at?: any;
  updated_at?: any;
}

export enum Statuses {
  Initial = "Not Fetched",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Deleted = "Deleted",
  Error = "Error",
}

export interface ParkingFormData {
  parking: {
    id?: string;
    clientname?: string;
    clientaddress?: string;
    clientphone?: string;
    carvin?: string;
    caryear?: string;
    carmake?: string;
    carmodel?: string;
    cartrim?: string;
    carplate?: string;
    checkintime?: any;
    checkinatt?: string;
    facilityspot?: string;
    facilityname?: string;
    facilityaddress?: string;
  };
}

export interface ParkingsState {
  parkings: ParkingState[];
  status: string;
}

export interface ParkingUpdateData {
  parking_id: number;
  parking: ParkingState;
}

export interface ParkingDeleteData {
  parking: {
    parking_id: number;
  };
}

const initialState: ParkingsState = {
  parkings: [
    {
      id: 0,
      clientname: "",
      clientaddress: "",
      clientphone: "",
      carvin: "",
      caryear: "",
      carmake: "",
      carmodel: "",
      cartrim: "",
      carplate: "",
      checkintime: "",
      checkouttime: "",
      checkinatt: "",
      checkoutatt: "",
      facilityspot: "",
      facilityname: "",
      facilityaddress: "",
      created_at: "",
      updated_at: "",
    },
  ],
  status: Statuses.Initial,
};

export const fetchParkingsAsync = createAsyncThunk(
  "parkings/fetchParkings",
  async () => {
    const response = await fetchParkings();
    return response;
  }
);

export const createParkingAsync = createAsyncThunk(
  "parkings/createParking",
  async (payload: ParkingFormData) => {
    const response = await createParking(payload);

    return response;
  }
);
export const updateParkingAsync = createAsyncThunk(
  "parkings/updateParking",
  async (payload: ParkingFormData) => {
    const response = await updateParking(payload);

    return response;
  }
);
export const destroyParkingAsync = createAsyncThunk(
  "parkings/destroyParking",
  async (payload: ParkingDeleteData) => {
    const response = await destroyParking(payload);

    return response;
  }
);

export const parkingSlice = createSlice({
  name: "parkings",
  initialState,
  /**
   * Synchronous actions
   */
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParkingsAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(fetchParkingsAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.parkings.push(action.payload);
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(fetchParkingsAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })
      /** Update Section */
      .addCase(createParkingAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(createParkingAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.parkings.push(action.payload);
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(createParkingAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })
      /** Destroy Section */
      .addCase(destroyParkingAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(destroyParkingAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.parkings = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(destroyParkingAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })
      /** Update Section */
      .addCase(updateParkingAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(updateParkingAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          const index = draftState.parkings.findIndex(
            (parking) => parking.id === action.payload.id
          );
          draftState.parkings[index] = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(updateParkingAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      });
  },
});

export const {} = parkingSlice.actions;

export const selectParkings = (state: RootState) => state.parkings.parkings;

export const selectStatus = (state: RootState) => state.parkings.status;

export default parkingSlice.reducer;
