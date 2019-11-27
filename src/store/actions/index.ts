
import {
    SYNC_REQUEST,
    SYNC_ERROR,
    SYNC_RESPONSE
} from '../constants';


// function to sync 
export const synchronization = () => (dispatch: Function, getState: Function) => {
    dispatch({
        type: SYNC_REQUEST,
    })
    dispatch({
        type: SYNC_RESPONSE,
    })
    dispatch({
        type: SYNC_ERROR,
        payload: 'Error'
    })
}