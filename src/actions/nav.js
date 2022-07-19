export const SET_PAGE_LOCATION = "SET_PAGE_LOCATION";

export function setPageLocation(page) {
  return {
    type: SET_PAGE_LOCATION,
    page,
  };
}
