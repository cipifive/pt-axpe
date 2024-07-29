/* eslint-disable testing-library/no-debugging-utils */
import {  mount } from "enzyme";
import MeetupItem from "./MeetupItem";
import { act } from 'react-dom/test-utils';

const item = {
  id: "4",
  image: "image.jpg",
  title: "Meetup 4",
  address: "Av. de la Libertad, 19",
  description: "Testing Meetup"
};

const setup = () => mount(<MeetupItem item={item} />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders MeetupItem without crashing", () => {
  const wrapper = setup();
  const meetupItemComponent = findByTestAttr(wrapper, "meet-up-item");
  expect(meetupItemComponent.exists()).toBe(true);
});

test("renders the correct elements", () => {
    const wrapper = setup();
    const meetupItemComponent = findByTestAttr(wrapper, "meet-up-item");
    const image = meetupItemComponent.find('img');
    const title = meetupItemComponent.find('h3');
    const address = meetupItemComponent.find('address');
    const description = meetupItemComponent.find('p');
    const button = meetupItemComponent.find('button');

    expect(image.prop('src')).toBe(item.image);
    expect(image.prop('alt')).toBe(item.title);
    expect(title.text()).toBe(item.title);
    expect(address.text()).toBe(item.address);
    expect(description.text()).toBe(item.description);
    expect(button.text()).toBe("Add to favorites");
  });

  test("handles adding to favorites correctly", () => {
    const wrapper = setup();
    const meetupItemComponent = findByTestAttr(wrapper, "meet-up-item");

    expect(localStorage.getItem(`meetup-fav-${item.id}`)).toBe(null);

    act(() => {
      meetupItemComponent.find('button').simulate('click');
    });

    expect(localStorage.getItem(`meetup-fav-${item.id}`)).toBe("favorite");
  });

 
