import { UPDATE_TOKEN } from "../../actions";
export default (state, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
