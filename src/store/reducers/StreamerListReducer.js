import actionTypes from "../actions/mainPage/actionTypes";

const StreamerListReducer = (currentList, action) => {
  let newList;
  switch (action.type) {
    case actionTypes.loadStreamerList:
      newList = [...action.streamerList];
      break;

    case actionTypes.filterByContractAction:
      newList = currentList.filter((streamer) => {
        return streamer.broadcaster_type === action.contract;
      });
      break;

    default:
      newList = [...currentList];
  }
  return newList;
};

export default StreamerListReducer;
