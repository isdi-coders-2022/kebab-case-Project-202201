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
});
