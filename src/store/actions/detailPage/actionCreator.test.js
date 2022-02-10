import { loadEmotes } from "./actionCreator";

describe("Given a loadStreamerList action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /load-emotes/", () => {
      const expectedAction = { type: "load-emotes" };
      const action = loadEmotes();
      expect(action).toEqual(expectedAction);
    });
  });
});
