// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import syncReducer from './sync';

// Redux: Root Reducer
const rootReducer = combineReducers({
  syncReducer: syncReducer
});
// Exports
export default rootReducer;