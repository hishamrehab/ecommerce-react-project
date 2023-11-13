import { ActionTypes } from "../constans/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmers",
    },
  ],
};

export const productReducer = (state = initialState , { type, payload }) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
