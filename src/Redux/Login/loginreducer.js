import { PASSWORDERROR, LOADING, SUCCESS } from "./actiontype.js";

let initial = {
  ISLOGIN: false,
  isLoading: false,
  data: null,
  isError: false,
};

export const loginreducer = (state = initial, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        ISLOGIN: true,
        data: payload,
      };
    case PASSWORDERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
