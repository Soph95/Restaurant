const Restaurant = require("./restaurant");
const Menu = require("./menu");

describe("Menus", () => {
  test("Add menu", () => {
    const starters = new Menu("Starters", "🦐");
    expect(starters.title).toEqual("Starters");
    expect(starters.icon).toEqual("🦐");
  });
  test("Add menu to restaurant", () => {
    const italian = new Restaurant("Italian", "London");
    const starters = new Menu("Starters", "🦐");
    const drinks = new Menu("Drinks", "🍷");
    italian.addMenu(starters);
    italian.addMenu(drinks);
    expect(italian.menus).toEqual([starters, drinks]);
  });
});
