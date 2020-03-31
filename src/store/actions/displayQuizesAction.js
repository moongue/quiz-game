import { FILTER_QUIZZES } from './actionTypes';

function changeDisplayQuizzes(newData) {
  return {
    type: FILTER_QUIZZES,
    payload: newData,
  };
}

export function filterQuizzesByCategory(type) {
  return (dispatch, getState) => {
    const { quizzes } = getState();

    const filteredQuizzes = quizzes.data.filter(
      (item) => item.category === type
    );
    dispatch(changeDisplayQuizzes(filteredQuizzes));
  };
}
