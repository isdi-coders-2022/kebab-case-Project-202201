import { loadStreamerList } from "./actionCreators";

describe("Given a loadStreamerList action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /load-streamer-list/", () => {
      const expectedAction = { type: "load-streamer-list" };
      const action = loadStreamerList();
      expect(action).toEqual(expectedAction);
    });
  });
});
