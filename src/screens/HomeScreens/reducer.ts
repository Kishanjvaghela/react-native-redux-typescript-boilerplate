import * as constants from './constants';

const initialState = {
  data: [],
  isLoading: true,
  error: '',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case constants.GET_USER_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case constants.GET_USER_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: '',
      };
    case constants.GET_USER_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
