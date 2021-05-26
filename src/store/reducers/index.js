import { combineReducers } from "redux";
import { QuestionsArrayReducer } from "./getQuestionsArray_reducer";

const rootReducer = combineReducers({
  QuestionsArrayReducer,
});

export default rootReducer;
