import actionTypes from "../actions/theme/actionTypes";
import lightTheme from "../../themes/lightTheme";
import darkTheme from "../../themes/darkTheme";

const themeReducer = (currentTheme, action) => {
  let newTheme;
  switch (action.type) {
    case actionTypes.toggleTheme:
      newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
      break;
    default:
      newTheme = lightTheme;
  }

  return newTheme;
};

export default themeReducer;
