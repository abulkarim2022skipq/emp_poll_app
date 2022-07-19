export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION_IN_USER = "ADD_QUESTION_IN_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnswer(questionid, option, authedUser) {
  return {
    type: ADD_ANSWER,
    option,
    questionid,
    authedUser,
  };
}

export function addQuestionInUser(questionid, authedUser) {
  return {
    type: ADD_QUESTION_IN_USER,
    questionid,
    authedUser,
  };
}
