import * as constants from '../constants';

// function to sync
export const synchronization = () => (
  dispatch: Function,
  getState: Function,
) => {
  dispatch({
    type: constants.SYNC_REQUEST,
  });
  dispatch({
    type: constants.SYNC_RESPONSE,
  });
  dispatch({
    type: constants.SYNC_ERROR,
    payload: 'Error',
  });
};
