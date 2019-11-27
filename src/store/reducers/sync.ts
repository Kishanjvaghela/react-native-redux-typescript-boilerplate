import {
    SYNC_REQUEST,
    SYNC_RESPONSE,
    SYNC_ERROR
} from '../constants';
import { initialState } from '../storeState';

export const syncReducer = (state = initialState.syncReducer, action: any) => {
    console.log('syncReducer', state, action.type);

    switch (action.type) {
        case SYNC_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case SYNC_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: '',
            }
        case SYNC_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default syncReducer;