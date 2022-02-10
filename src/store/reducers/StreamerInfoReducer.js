import actionTypes from "../actions/detailPage/actionTypes";

const StreamerInfoReducer = (currentStreamerInfo, action) => {
  let newStreamerInfo;
  switch (action.type) {
    case actionTypes.loadEmotes:
      newStreamerInfo = [...action.loadStreamerInfo];
      break;

    default:
      newStreamerInfo = [...currentStreamerInfo];
      break;
  }
  return newStreamerInfo;
};
export default StreamerInfoReducer;
