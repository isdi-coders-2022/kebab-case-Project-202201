import actionTypes from "../actions/detailPage/actionTypes";

const EmotesReducer = (currentEmotes, action) => {
  let newEmotes;
  switch (action.type) {
    case actionTypes.loadEmotes:
      newEmotes = [...action.emotesList];
      break;

    default:
      newEmotes = [...currentEmotes];
      break;
  }
  return newEmotes;
};
export default EmotesReducer;
