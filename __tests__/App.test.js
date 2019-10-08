import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";
import toJson from "enzyme-to-json";

describe("<App />", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(true).toBe(true);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
