import actionTypes from "../actions/mainPage/actionTypes";

const StreamerListReducer = (currentList, action) => {
  let newList;
  switch (action.type) {
    case actionTypes.loadStreamerList:
      newList = [...action.streamerList];

      break;
    default:
      newList = [...currentList];
  }
  return newList;
};

export default StreamerListReducer;
