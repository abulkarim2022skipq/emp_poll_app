import {
  RECEIVE_USERS,
  ADD_ANSWER,
  ADD_QUESTION_IN_USER,
} from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionid]: action.option,
          },
        },
      };
    case ADD_QUESTION_IN_USER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: [
            ...state[action.authedUser].questions,
            [action.questionid],
          ],
        },
      };
    default:
      return state;
  }
}
