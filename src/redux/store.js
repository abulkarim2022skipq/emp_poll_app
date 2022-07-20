import { createStore } from "redux";
import reducers from "../reducers";
import middleware from "../middleware";

const store = createStore(
  reducers,
  middleware
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
