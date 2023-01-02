import { types } from "../types/types";

const initialState = {
  checking: false,
  // uid: null,
  // name: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        checking: true,
        user: action.payload,
        // ...action.payload,
      };
    case types.logout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
