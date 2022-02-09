import actionTypes from "./actionTypes";

export const loadEmotes = (streamerEmotes) => ({
  type: actionTypes.loadEmotes,
  streamerEmote: streamerEmotes,
});
