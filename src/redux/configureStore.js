import { createStore, combineReducers } from "redux";
import { dishes } from "./dishes";
import { leaders } from "./leaders";
import { promotions } from "./promotions";
import { comments } from "./comments";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishes,
      leaders: leaders,
      promotions: promotions,
      comments: comments,
    })
  );
  return store;
};
