import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const configureStore = () => {
  const store = createStore(
    Reducer, //Reducer
    initialState //Our initialState of application
  );
  return store;
};
