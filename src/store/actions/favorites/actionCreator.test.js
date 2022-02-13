import { overwriteFavoritesAction } from "./actionCreators";

describe("Given a overwriteFavoritesAction action", () => {
  describe("When is invoked", () => {
    test("Then it should return an action with /overwrite-favorites/", () => {
      console.log("called log");
      const expectedAction = { type: "overwrite-favorites" };
      const action = overwriteFavoritesAction();
      expect(action).toEqual(expectedAction);
    });
  });
});
