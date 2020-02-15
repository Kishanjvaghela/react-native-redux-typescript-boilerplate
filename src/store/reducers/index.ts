// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import syncReducer from './sync';
import homeReducer from '../../screens/HomeScreen/reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  syncReducer: syncReducer,
  homeReducer: homeReducer,
});
// Exports
export default rootReducer;
