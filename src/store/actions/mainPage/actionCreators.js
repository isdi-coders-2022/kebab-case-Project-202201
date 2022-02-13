import actionTypes from "./actionTypes";

export const loadStreamerList = (streamerList) => ({
  type: actionTypes.loadStreamerList,
  streamerList: streamerList,
});

export const filterByContractAction = (contract) => ({
  type: actionTypes.filterByContractAction,
  contract: contract,
});
