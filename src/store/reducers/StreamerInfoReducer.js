import actionTypes from "../actions/detailPage/actionTypes";

const StreamerInfoReducer = (currentStreamer, action) => {
  let newStreamer;
  switch (action.type) {
    case actionTypes.loadStreamerInfo:
      newStreamer = [...action.info];
      break;

    default:
      newStreamer = [...currentStreamer];
      break;
  }
  return newStreamer;
};
export default StreamerInfoReducer;
