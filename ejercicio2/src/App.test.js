/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { mount } from "enzyme";
import App from "./App";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => mount(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders App without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app");
  expect(appComponent.exists()).toBe(true);
});

test("renders the navigation component", () => {
  const wrapper = setup();
  const layoutWrapper = wrapper.find(Layout);
  expect(layoutWrapper.exists()).toBe(true);
  const mainNavWrapper = layoutWrapper.find(MainNavigation);
  expect(mainNavWrapper.length).toBe(1);
});

test("renders the Layout component", () => {
  const wrapper = setup();
  expect(wrapper.find(Layout).length).toBeGreaterThan(0);
});
