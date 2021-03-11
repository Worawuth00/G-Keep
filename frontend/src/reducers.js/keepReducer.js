import {
  CREATE,
  CURRENT,
  DELETE,
  FETCH_ALL,
  FILTER,
  UPDATE,
} from "../constants/actionTypes";

export const keepsListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((s) =>
        s._id === action.payload._id ? action.payload : s
      );
    case DELETE:
      return state.filter((s) => s._id !== action.payload);
    default:
      return state;
  }
};

export const keepFilterReducer = (state = "", action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};

export const keepCurrentReducer = (state = null, action) => {
  switch (action.type) {
    case CURRENT:
      return action.payload;
    default:
      return state;
  }
};
