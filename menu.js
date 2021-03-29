class Menu {
  constructor(title) {
    this.title = title;
    this.icon = "🥘";
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
}
module.exports = Menu;
