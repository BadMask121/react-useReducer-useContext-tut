import { SET_LOADING } from "../../actions";
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};
