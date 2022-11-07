import axios from "axios";

import {
  GET_BIKES,
  DELETE_BIKE,
  ADD_BIKE,
  TOGGLE_RENT_BIKE,
  HIDE_ALERT,
  SHOW_ALERT,
  LOADING_BIKES,
} from "./types";

export const getBikes = () => (dispatch) => {
  dispatch(setBikesLoading());
  setTimeout(() => {
    axios
      .get("/api/bikes")
      .then((res) => dispatch({ type: GET_BIKES, payload: res.data }))
      .catch((err) => {
        console.log("err: ", err);
      });
  }, 2000);
};

export const deleteBike = (id) => (dispatch) => {
  axios
    .delete(`/api/bikes/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_BIKE,
        payload: id,
      })
    )
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const addBike = (bike) => (dispatch) => {
  axios
    .post("/api/bikes", bike)
    .then((res) =>
      dispatch({
        type: ADD_BIKE,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log("err: ", err);
    });
};

export const toggleRentBike = (id, bike) => {
  return (dispatch) => {
    axios
      .put(`/api/bikes/${id}`, {
        bike,
      })
      .then((res) =>
        dispatch({
          type: TOGGLE_RENT_BIKE,
          payload: id,
        })
      );
  };
};

export const showAlert = (text) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: text,
  });

  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);
};

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  };
};

export const setBikesLoading = () => {
  return {
    type: LOADING_BIKES,
  };
};
