import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { dishes } from "./dishes";
import { leaders } from "./leaders";
import { promotions } from "./promotions";
import { comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: dishes,
      leaders: leaders,
      promotions: promotions,
      comments: comments,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
