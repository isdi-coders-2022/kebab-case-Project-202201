import actionTypes from "../actions/mainPage/actionTypes";

const StreamerListReducer = (currentList, action) => {
  let newList;
  switch (action.type) {
    case actionTypes.loadStreamerList:
      newList = [...action.streamerList];
      break;

    case actionTypes.filterByLanguageAction:
      newList = currentList.filter((streamer) => {
        console.log(streamer);
        return streamer.broadcaster_type === action.language;
      });
      break;

    default:
      newList = [...currentList];
  }
  return newList;
};

export default StreamerListReducer;
