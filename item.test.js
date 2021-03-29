const Item = require("./item");
const Restaurant = require("./restaurant");
const Menu = require("./menu");

describe("Items", () => {
  test("add items to menu", () => {
    const starters = new Menu("Starters");
    const wings = new Item("Chicken Wings", "2.99");
    starters.addItem(wings);
    expect(starters.items).toEqual([wings]);
  });
});
