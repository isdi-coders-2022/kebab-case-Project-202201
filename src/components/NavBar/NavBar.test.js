import TestRenderer from "react-test-renderer";
import NavBar from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When it get a const newNavBar that creates NavBar", () => {
    test("then it should create and compare a snapshot with newNavBar", () => {
      const newNavBar = TestRenderer.create(<NavBar />);
      expect(newNavBar.toJSON()).toMatchSnapshot();
    });
  });
});
