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
});
