import { loadStreamer } from "../actions/detailPage/actionCreator";
import StreamerInfoReducer from "./StreamerInfoReducer";

describe("Given a StreamerInfo reducer", () => {
  describe("When given an action and a current object", () => {
    test("Then should return a new list", () => {
      const currentObjectList = ["ibai", "soryuga", "auronplay"];
      const newObjectList = ["tfundo", "Asmongold"];
      const action = loadStreamer(newObjectList);

      const recievedList = StreamerInfoReducer(currentObjectList, action);

      expect(recievedList).toEqual(newObjectList);
    });
  });
  describe("When given a currentlist and a action that is not in actionCreators", () => {
    test("Then should return the current list because its using default statement", () => {
      const currentlist = ["ibai", "soryuga", "auronplay"];
      const action = { type: "not-gonna-work" };

      const reciebedList = StreamerInfoReducer(currentlist, action);

      expect(reciebedList).toEqual(currentlist);
    });
  });
});
