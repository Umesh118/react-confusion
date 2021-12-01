import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      leaders: Leaders,
      promotions: Promotions,
      comments: Comments,
    })
  );

  return store;
};
