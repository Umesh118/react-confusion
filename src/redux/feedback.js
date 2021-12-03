import * as ActionType from "./ActionTypes";

export const Feedback = (
  state = {
    feedbacks: [],
  },
  action
) => {
  switch (action.type) {
    case ActionType.ADD_FEEDBACK:
      var feedback = action.payload;
      console.log("Feedback : ", {
        ...state,
        feedback: state.feedbacks.concat(feedback),
      });
      return { ...state, feedback: state.feedbacks.concat(feedback) };
    default:
      return state;
  }
};
