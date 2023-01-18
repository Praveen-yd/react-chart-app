import { ActionTypes } from "../constants/actions-types";

export const addBalance = (amount) => {
  return {
    type: ActionTypes.ADD_ACCOUNT,
    payload: amount,
  };
};
