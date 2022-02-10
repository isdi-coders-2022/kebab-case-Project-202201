import actionTypes from "../actions/favorites/actionTypes";

const FavoritesReducer = (currentFavs, action) => {
  let newFavs;
  switch (action.type) {
    case actionTypes.overwriteFavoritesAction:
      newFavs = [...action.favList];
      break;

    default:
      newFavs = [...currentFavs];
  }
  return newFavs;
};

export default FavoritesReducer;
