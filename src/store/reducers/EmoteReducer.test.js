import { loadEmotes } from "../actions/detailPage/actionCreator";
import EmotesReducer from "./EmotesReducer";

describe("Given a EmotesReducer", () => {
  describe("When given an action and a current object", () => {
    test("Then should return a new list", () => {
      const currentObjectList = [1, 2, 3, 4];
      const newObjectList = [45, 67, 93, 123];
      const action = loadEmotes(newObjectList);

      const recievedList = EmotesReducer(currentObjectList, action);

      expect(recievedList).toEqual(newObjectList);
    });
  });
  describe("When given a currentObjectList and a action that is not in actionCreator", () => {
    test("Then should return the current list", () => {
      const currentObjectList = [1, 2, 3, 4];
      const action = { type: "not-work" };

      const recievedList = EmotesReducer(currentObjectList, action);

      expect(recievedList).toEqual(currentObjectList);
    });
  });
});
