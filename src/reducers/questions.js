import {
  ADD_ANSWER_OPTION,
  RECEIVE_QUESTIONS,
  REMOVE_ANSWER_OPTION,
} from "../actions/questions";

export function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_OPTION:
      const answerOption = action.option;
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [answerOption]: {
            ...state[action.id][answerOption],
            votes: state[action.id][answerOption].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    case REMOVE_ANSWER_OPTION:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          optionOne: {
            ...state[action.id].optionOne,
            votes: state[action.id].optionOne.votes.includes(action.authedUser)
              ? state[action.id].optionOne.votes.filter(
                  (username) => username !== action.authedUser
                )
              : state[action.id].optionOne.votes,
          },
          optionTwo: {
            ...state[action.id].optionTwo,
            votes: state[action.id].optionTwo.votes.includes(action.authedUser)
              ? state[action.id].optionTwo.votes.filter(
                  (username) => username !== action.authedUser
                )
              : state[action.id].optionTwo.votes,
          },
        },
      };

    default:
      return state;
  }
}
