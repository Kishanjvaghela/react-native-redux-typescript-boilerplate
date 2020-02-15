import * as constants from './constants';
import {get} from '../../services';

export const getUserList = () => (dispatch: Function, getState: Function) => {
  dispatch({
    type: constants.GET_USER_LIST_REQUEST,
  });
  get('/?page=3&results=10&seed=abc')
    .then(results => {
      dispatch({
        type: constants.GET_USER_LIST_RESPONSE,
        payload: results.results,
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: constants.GET_USER_LIST_ERROR,
        payload: error,
      });
    });
};
