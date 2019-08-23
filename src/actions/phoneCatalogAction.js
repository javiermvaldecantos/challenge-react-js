export const GET_PHONE_LIST__START = "GET_PHONE_LIST__START";
export const GET_PHONE_LIST__SUCCESS = "GET_PHONE_LIST__SUCCESS";
export const GET_PHONE_LIST__FAILURE = "GET_PHONE_LIST__FAILURE";
export const LOAD_PHONE_DETAILS = "LOAD_PHONE_DETAILS";
export const GO_TO_NEXT_PAGE = "GO_TO_NEXT_PAGE";
export const GO_TO_PREVIOUS_PAGE = "GO_TO_PREVIOUS_PAGE";
export const GO_TO_SPECIFIC_PAGE = "GO_TO_SPECIFIC_PAGE";

export const getPhoneListStart = () => ({
  type: GET_PHONE_LIST__START
});

export const getPhoneListSuccess = ({ phoneList }) => ({
  type: GET_PHONE_LIST__SUCCESS,
  payload: {
    phoneList,
  },
});

export const getPhoneListFailure = () => ({
  type: GET_PHONE_LIST__FAILURE,
});

export const loadPhoneDetails = ({ phoneDetails }) => ({
  type: LOAD_PHONE_DETAILS,
  payload: {
      phoneDetails
  }
});

export const goToNextPage = ({ page }) => ({
  type: GO_TO_NEXT_PAGE,
  payload: {
      page
  }
});

export const goToPreviousPage = ({ page }) => ({
  type: GO_TO_PREVIOUS_PAGE,
  payload: {
      page
  }
});

export const goToSpecificPage = ({ page }) => ({
  type: GO_TO_SPECIFIC_PAGE,
  payload: {
      page
  }
});