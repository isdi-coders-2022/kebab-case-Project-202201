import themeReducer from "./themeReducer";
import { toggleThemeAction } from "../actions/theme/actionCreators";

describe("Given themeReducer", () => {
  describe("When given a current theme 'light' and a toggleaction", () => {
    test("Then the resulting theme should be dark", () => {
      const initialTheme = "light";
      const newTheme = themeReducer(initialTheme, toggleThemeAction());
      expect(newTheme).toBe("dark");
    });
  });
});
