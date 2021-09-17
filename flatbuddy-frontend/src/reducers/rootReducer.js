
import { combineReducers } from 'redux';
import hobbiesAndHabitsReducer from './hobbiesAndHabitsReducer';
export default combineReducers({
  'hobbiesAndHabits':hobbiesAndHabitsReducer
});