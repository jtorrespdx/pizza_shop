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
    } else if(this.pizzaSize === "medium") {
        pizzaPrice = 12;
    } else if(this.pizzaSize === "large") {
        pizzaPrice = 14;
    }

    return pizzaPrice;
}
