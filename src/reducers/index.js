import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import { authedUser } from "./authedUser";
import { questions } from "./questions";
import { users } from "./users";
import { nav } from "./nav";

export default combineReducers({
  nav,
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
