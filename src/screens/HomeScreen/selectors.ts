import {createSelector} from 'reselect';

const homeSelector = (state: {homeReducer: any}) => state.homeReducer;

export const getData = createSelector(
  homeSelector,
  state => state.data,
);

export const isLoading = createSelector(
  homeSelector,
  state => state.isLoading,
);
