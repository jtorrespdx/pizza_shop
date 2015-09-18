describe('pizza', function() {
  it("creates a new pizza item with its properties", function() {
    var quantity = 1;
    var pizzaSize = ["small", 8];
    var pizzaToppings - ["cheese, pepperoni"];
    var testPizza = new Pizza(quantity, pizzaSize. pizzaToppings);
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.pizzaSize).to.eql(["small", 8]);
    expect(testPizza.).to.eql.(["cheese", "pepperoni"]);
  });
});
