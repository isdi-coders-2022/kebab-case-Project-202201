import themeReducer from "./themeReducer";
import { toggleThemeAction } from "../actions/theme/actionCreators";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";

describe("Given themeReducer", () => {
  describe("When given a current theme 'light' and a toggleaction", () => {
    test("Then the resulting theme should be dark", () => {
      const initialTheme = lightTheme;
      const newTheme = themeReducer(initialTheme, toggleThemeAction());
      expect(newTheme).toBe(darkTheme);
    });
  });
});
