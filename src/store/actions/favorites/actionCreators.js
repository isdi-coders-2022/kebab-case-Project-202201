import actionTypes from "./actionTypes";

export const overwriteFavoritesAction = (favList) => ({
  type: actionTypes.overwriteFavoritesAction,
  favList: favList,
});
