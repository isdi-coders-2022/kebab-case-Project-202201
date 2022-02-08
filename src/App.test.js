import App from "./App";
import TestRenderer from "react-test-renderer";
import ThemeContextProvider from "./store/contexts/ThemeContextProvider";
import ApiKebabContextProvider from "./store/contexts/ApiKebabContextProvider";

describe("desc", () => {
  describe("desc", () => {
    test("desc", () => {});
    const cosas = {
      theme: "hola",
      dispatch: "adiós",
    };
    const app = TestRenderer.create(
      <ThemeContextProvider>
        <ApiKebabContextProvider>
          <App />
        </ApiKebabContextProvider>
      </ThemeContextProvider>
    );
    expect(app.toJSON()).toMatchSnapshot();
  });
});
