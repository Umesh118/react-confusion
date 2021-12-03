import * as ActionType from './ActionTypes';

export const Feedback = (state = {
    feedback: []
}, action) => {
    switch (action.type) {
        case ActionType.ADD_FEEDBACK:
            return { ...state, feedback: state.feedback.concat(action.payload) };
        default:
            return state;
    }
}