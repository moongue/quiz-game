import quizzes from '../../api/quizzes';
import { FILTER_QUIZZES } from '../actions/actionTypes';

const initialState = {
  data: quizzes,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FILTER_QUIZZES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
