const Item = require("./item");
const Restaurant = require("./restaurant");
const Menu = require("./menu");

describe("Items", () => {
  test("Item has correct name", () => {
    const wings = new Item("Chicken Wings", "2.99");
    expect(wings.item).toEqual("Chicken Wings");
  });
  test("Item has correct price", () => {
    const wings = new Item("Chicken Wings", "2.99");
    expect(wings.price).toEqual("2.99");
  });
  test("Item can be added to menu", () => {
    const starters = new Menu("Starters");
    const wings = new Item("Chicken Wings", "2.99");
    starters.addItem(wings);
    expect(starters.items).toEqual([wings]);
  });
});
