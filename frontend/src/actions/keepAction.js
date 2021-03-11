import axios from "axios";
import {
  CREATE,
  CURRENT,
  DELETE,
  FETCH_ALL,
  FILTER,
  UPDATE,
} from "../constants/actionTypes";

const url = "https://g-keeps.herokuapp.com/keeps";

export const getKeeps = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createKeep = (newKeep) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, newKeep);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateKeep = (id, keep) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${url}/${id}`, keep);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKeep = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterKeep = (tag) => async (dispatch) => {
  try {
    dispatch({ type: FILTER, payload: tag });
  } catch (error) {
    console.log(error.message);
  }
};

export const currentKeep = (id) => async (dispatch) => {
  try {
    dispatch({ type: CURRENT, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
