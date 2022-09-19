import test from "node:test";
import { showMenu2, navLink2, linkAction2, dynamicDate } from "./index";
import { expect, test } from "@jest/globals";

test("shows menu if 2 params are present", () => {
  const showMenu = jest.fn();
  expect(showMenu2).toBeDefined();
  expect(showMenu).toHaveBeenCalledTimes(1);
  expect(showMenu).toHaveBeenCalledWith("nav-toggle", "nav-menu"); // think again aboout this
});

//test navlik node list is present

test("nav link dom element is present ", () => {
  expect(navLink2).toBeDefined();
});

//test navlink2 is iterable and add a click event to each element

test("navlink2 is iterable and add a click event to each element ", () => {
  expect(navLink2).toBeDefined();
  navLink2.forEach((nav) => {
    //check if this element is clickable
    nav.simulate("click");
    expect(linkAction2).toHaveBeenCalled();
  });
});

//test dynamic Date function returns correct date object

test("dynamicDate function returns actual Date", () => {
  const result = dynamicDate;
  const spy = jest.spyOn(global, "Date");
  const date = spy.mock.instances[0]; // get what 'new Date()' returned
  //solution from here https://stackoverflow.com/questions/54329398/tests-on-jest-and-new-date
  expect(result).toEqual(date);
});

//test window object on scroll is workig

test("window object on scroll is fired ", () => {
  window.scroll = jest.fn();
  //ommting beforeAll
  beforeAll(() => {
    window.dispatchEvent(new Event("scroll"));
  });

  it("does not fire scroll event by default", () => {
    expect(window.scroll).not.toHaveBeenCalled();
  });

  it("fires event on scroll ", () => {
    expect(window.scroll).toHaveBeenCalled();
  });
});
