/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount } from "enzyme";
import MainNavigation from "./MainNavigation";
import {  BrowserRouter as Router } from "react-router-dom";

/**
 * Factory funcion to create a ShallowWrapper for the MainNavigation component
 * @function setup
 * @returns {ShallowWrapper}
 * 
 */

const setup = () => mount(<Router><MainNavigation /></Router>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders MainNavigation without crashing", () => {
  const wrapper = setup();
  const navigationComponent = findByTestAttr(wrapper, "navigation-header");
  expect(navigationComponent.exists()).toBe(true);
});

test("renders the 3 buttons properly component", () => {
    const wrapper = setup();
    const navigationComponent = findByTestAttr(wrapper, "navigation-header");
    const links = navigationComponent.find('a');
    expect(links.length).toBe(3);

});




