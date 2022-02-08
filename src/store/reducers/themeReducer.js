import actionTypes from "../actions/theme/actionTypes";

const themeReducer = (currentTheme, action) => {
  let newTheme;
  switch (action.type) {
    case actionTypes.toggleTheme:
      newTheme = currentTheme === "light" ? "dark" : "light";
      break;
    default:
      newTheme = "light";
  }

  return newTheme;
};

export default themeReducer;
