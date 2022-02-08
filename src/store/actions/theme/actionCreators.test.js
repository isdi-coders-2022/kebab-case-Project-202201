import { toggleThemeAction } from "./actionCreators";

describe("Given function toggleThemeAction", () => {
  describe("When called", () => {
    test("Then it should return an action with type 'toggle-theme'", () => {
      const expectedAction = { type: "toggle-theme" };
      const action = toggleThemeAction();
      expect(action).toEqual(expectedAction);
    });
  });
});
