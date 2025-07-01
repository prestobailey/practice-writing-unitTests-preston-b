const { addItem, removeItem, getTotalItems } = require('../cart');

describe("Shopping Cart Module", () => {

  let cart;

  beforeEach(() => {
    cart = [];
  });
// Add
  test("addItem - adds valid item", () => {
    expect(addItem(cart, "apple", 3)).toBe(true);
    expect(cart).toEqual([{ name: "apple", quantity: 3 }]);
  });

  test("addItem - invalid quantity (negative)", () => {
    expect(addItem(cart, "banana", -2)).toBe(false);
    expect(cart).toEqual([]);
  });

  // Remove
  test("removeItem - existing item", () => {
    addItem(cart, "apple", 2);
    expect(removeItem(cart, "apple")).toBe(true);
    expect(cart).toEqual([]);
  });

  test("removeItem - non-existent item", () => {
    expect(removeItem(cart, "banana")).toBe(false);
  });

  // Total
  test("getTotalItems - correct total", () => {
    addItem(cart, "apple", 2);
    addItem(cart, "banana", 3);
    expect(getTotalItems(cart)).toBe(5);
  });
});