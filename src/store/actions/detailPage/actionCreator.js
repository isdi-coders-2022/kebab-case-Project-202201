import actionTypes from "./actionTypes";

export const loadEmotes = (streamerEmotes) => ({
  type: actionTypes.loadEmotes,
  emotesList: streamerEmotes,
});

export const loadStreamer = (streamerInfo) => ({
  type: actionTypes.loadStreamerInfo,
  info: streamerInfo,
});
