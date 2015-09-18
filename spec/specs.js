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

describe('PizzaTopping', function() {
    it("creates a new topping", function () {
        var toppingIngredient = "pepperoni";
        var toppingCost = 1;
        var testPizzaTopping = new PizzaTopping(toppingIngredient, toppingCost);
        expect(testPizzaTopping.toppingIngredient).to.equal("pepperoni");
        expect(testPizzaTopping.cost).to.equal(1);
    });
});

});
