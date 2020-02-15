import {createSelector} from 'reselect';

const syncSelector = (state: {syncReducer: any}) => state.syncReducer;

/**
 * get is sync loading
 */
export const isSyncing = createSelector(syncSelector, state => state.isLoading);

export const syncError = createSelector(syncSelector, state => state.error);
