import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import DateForm from "./components/DateForm";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<DateForm />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
//snapshot code
describe("<DateForm />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<DateForm />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
