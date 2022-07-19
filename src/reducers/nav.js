import { SET_PAGE_LOCATION } from "../actions/nav";

export function nav(state = "home", action) {
  switch (action.type) {
    case SET_PAGE_LOCATION:
      return action.page;

    default:
      return state;
  }
}
