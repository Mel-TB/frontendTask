import { combineReducers } from "redux";
import widgetReducer from "./widgetsReducer";

const rootReducer = combineReducers({
  widgets: widgetReducer,
});

export default rootReducer;
