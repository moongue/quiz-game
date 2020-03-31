import { combineReducers } from 'redux';
import displayQuizzes from './displayQuzes';

export default combineReducers({
  quizzes: displayQuizzes,
});
