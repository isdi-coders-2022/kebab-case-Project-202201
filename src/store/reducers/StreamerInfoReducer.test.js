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
});
