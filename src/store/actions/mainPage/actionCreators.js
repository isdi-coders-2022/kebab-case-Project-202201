import actionTypes from "./actionTypes";

export const loadStreamerList = (streamerList) => ({
  type: actionTypes.loadStreamerList,
  streamerList: streamerList,
});
