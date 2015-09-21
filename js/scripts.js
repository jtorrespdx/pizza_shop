//////Constructs Pizza
function Pizza(quantity, pizzaSize, pizzaToppings) {
    this.quantity = quantity;
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.totalPrice = function() {
    var pizzaPrice = 0;

    if(this.pizzaSize === "small") {
        pizzaPrice = 8;
    }
    return pizzaPrice;
}
