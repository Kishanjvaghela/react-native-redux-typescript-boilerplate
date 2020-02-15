// global store state
export interface StoreState {
  syncReducer: SyncState;
}

// sync state
export interface SyncState {
  error: string;
  isLoading: boolean;
}

export const initialState: StoreState = {
  syncReducer: {
    isLoading: false,
    error: '',
  },
};
