describe('Pizza', function() {
    it("creates a new pizza item with its properties", function() {
    var quantity = 1;
    var pizzaSize = ["small", 8];
    var pizzaToppings = ["cheese",  "pepperoni"];
    var testPizza = new Pizza(quantity, pizzaSize, pizzaToppings);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.eql(["small", 8]);
    expect(testPizza.pizzaToppings).to.eql(["cheese", "pepperoni"]);
  });

  it("allows customer to add multiple toppings to a pizza.", function() {
      var testPizza = new Pizza (1, "medium", ["sausage", "mushroom", "pepperoni"]);
      expect(testPizza.pizzaToppings).to.eql(["sausage", "mushroom", "pepperoni"]);
  });

  it("shows a price of $8 for a small pizza.", function() {
      var testPizza = new Pizza (1, "small");
      expect(testPizza.totalPrice()).to.equal(8);
  });

  it("shows a price of $12 for a medium pizza.", function() {
      var testPizza = new Pizza (1, "medium");
      expect(testPizza.totalPrice()).to.equal(12);
  });

  it("shows a price of $14 for a large pizza.", function() {
      var testPizza = new Pizza (1, "large");
      expect(testPizza.totalPrice()).to.equal(14);
  });

  it("shows a price of $16 if two small pizzas are ordered.", function() {
      var testPizza  = new Pizza (2, "small");
      expect(testPizza.totalPrice()).to.equal(16);
  });

  it("shows a price of $24 if two medium pizzas are ordered.", function() {
      var testPizza  = new Pizza (2, "medium");
      expect(testPizza.totalPrice()).to.equal(24);
  });

  it("shows a price of $28 if two large pizzas are ordered.", function() {
      var testPizza  = new Pizza (2, "large");
      expect(testPizza.totalPrice()).to.equal(28);
  });

  it("adds $1 to the price of a pizza for every topping added.", function() {
      var testPizza  = new Pizza (1, "small", ["sausage", "mushroom", "pepperoni"]);
      expect(testPizza.totalPrice()).to.equal(11);
  });
});
