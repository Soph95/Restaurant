class Restaurant {
  constructor(name, city) {
    this.name = name;
    this.city = city;
    this.img = "";
    this.menus = [];
  }

  addMenu(menu) {
    this.menus.push(menu);
  }
}
module.exports = Restaurant;
