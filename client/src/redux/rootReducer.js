import { combineReducers } from "redux";
import { bikesReducer } from "./bikesReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  bikes: bikesReducer,
  app: appReducer,
});
