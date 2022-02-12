import { overwriteFavoritesAction } from "../actions/favorites/actionCreators";
import FavoritesReducer from "./FavoritesReducer";

describe("Given a Favorites reducer", () => {
  describe("When given a current object and an action", () => {
    test("Then should return a newlist with currentObj and action", () => {
      const currentlist = [10, 20, 30, 40];
      const newList = [123, 436, 231, 45];
      const action = overwriteFavoritesAction(newList);

      const receivedList = FavoritesReducer(currentlist, action);

      expect(receivedList).toEqual(newList);
    });
  });

  describe("When given a currentlist and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = [23, 34, 47, 56];
      const action = { type: "not-gonna-work" };

      const receivedList = FavoritesReducer(currentlist, action);

      expect(receivedList).toEqual(currentlist);
    });
  });
});
