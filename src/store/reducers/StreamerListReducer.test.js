import StreamerListReducer from "./StreamerListReducer";
import { loadStreamerList } from "../actions/mainPage/actionCreators";

describe("Given a streamerlistreducer", () => {
  describe("When given a current object and an action", () => {
    test("Then should return a newlist with currentObj and action", () => {
      const currentlist = [1, 2, 3, 4];
      const newList = [312, 543, 123, 54];
      const action = loadStreamerList(newList);

      const reciebedList = StreamerListReducer(currentlist, action);

      expect(reciebedList).toEqual(newList);
    });
  });
});
