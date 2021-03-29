const Restaurant = require("./restaurant");
const Menu = require("./menu");

describe("add menu to restaurant", () => {
  test("add menu", () => {
    const italian = new Restaurant("Italian", "London");
    const starters = new Menu("Starters");
    const drinks = new Menu("Drinks");
    italian.addMenu(starters);
    italian.addMenu(drinks);
    console.log(italian.menus);
    expect(italian.menus).toEqual([starters, drinks]);
  });
});
