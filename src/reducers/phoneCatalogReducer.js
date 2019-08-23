import {
    GET_PHONE_LIST__START,
    GET_PHONE_LIST__SUCCESS,
    GET_PHONE_LIST__FAILURE,
    LOAD_PHONE_DETAILS,
    GO_TO_NEXT_PAGE,
    GO_TO_PREVIOUS_PAGE,
    GO_TO_SPECIFIC_PAGE
} from "../actions/phoneCatalogAction";
  
const initialState = {
    phoneList: [],
    fetchFailure: false,
    selectedPhoneDetails: {},
    page: 1
};
  
const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case GET_PHONE_LIST__START:
            return {
                ...state,
                phoneList: [],
            };

        case GET_PHONE_LIST__SUCCESS:
            return {
                ...state,
                phoneList: payload.phoneList,
            };

        case GET_PHONE_LIST__FAILURE:
            return {
                ...state,
                fetchFailure: true,
            };

        case LOAD_PHONE_DETAILS:
            return {
                ...state,
                selectedPhoneDetails: payload.phoneDetails,
            };

        case GO_TO_NEXT_PAGE:
            return {
                ...state,
                page: payload.page,
            };

        case GO_TO_PREVIOUS_PAGE:
            return {
                ...state,
                page: payload.page,
            };
        
        case GO_TO_SPECIFIC_PAGE:
            return {
                ...state,
                page: payload.page,
            };

        default:
            return state;

    }
};
  
export default reducer;