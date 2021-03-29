const Restaurant = require("./restaurant");
const Menu = require("./menu");
const Item = require("./item");

describe("Restaurant", () => {
  test("create restaurant, add menu and item", () => {
    const mexican = new Restaurant("Mexican", "London");
    const mains = new Menu("Main Menu");
    const tacos = new Item("Tacos", "8.99");
    mexican.addMenu(mains);
    mains.addItem(tacos);
    console.log(mexican);
    console.log(mexican.menus);
    console.log(tacos);
    expect(mexican.menus).toEqual([mains]);
    expect(mains.items).toEqual([tacos]);
  });
});
