import { loadEmotes, loadStreamer } from "./actionCreator";

describe("Given a loadEmotes action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /load-emotes/", () => {
      const expectedAction = { type: "load-emotes" };
      const action = loadEmotes();
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadStreamer action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /load-info/", () => {
      const expectedAction = { type: "load-info" };
      const action = loadStreamer();
      expect(action).toEqual(expectedAction);
    });
  });
});
