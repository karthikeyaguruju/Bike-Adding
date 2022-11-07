import {
  ADD_BIKE,
  DELETE_BIKE,
  TOGGLE_RENT_BIKE,
  GET_BIKES,
  LOADING_BIKES,
} from "./types";

export const initialState = {
  bikes: [],
  loading: false,
  alert: null,
};

export const bikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BIKES:
      return {
        ...state,
        bikes: action.payload,
        loading: false,
      };
    case ADD_BIKE:
      return {
        ...state,
        bikes: [...state.bikes, action.payload],
      };
    case DELETE_BIKE:
      return {
        ...state,
        bikes: state.bikes.filter((bike) => bike._id !== action.payload),
      };

    case TOGGLE_RENT_BIKE:
      return {
        ...state,
        bikes: state.bikes.map((bike) =>
          bike._id === action.payload
            ? { ...bike, isRented: !bike.isRented }
            : bike
        ),
      };
    case LOADING_BIKES:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
