import actionTypes from "./actionTypes";

export const loadStreamerList = (streamerList) => ({
  type: actionTypes.loadStreamerList,
  streamerList: streamerList,
});

export const filterByLanguageAction = (language) => ({
  type: actionTypes.filterByLanguageAction,
  language: language,
});
