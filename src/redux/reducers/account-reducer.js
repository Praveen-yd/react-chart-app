import { ActionTypes } from "../constants/actions-types";

let initialState = {
  accounts: [5000],
};
const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_ACCOUNT:
      return { ...state, accounts: [...state.accounts, payload] };
    default:
      return state;
  }
};

export default accountReducer;
