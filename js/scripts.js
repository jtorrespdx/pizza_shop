//////Constructs Pizza
function Pizza(quantity, pizzaSize, pizzaToppings) {
    this.quantity = quantity;
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
}

Pizza.prototype.totalPrice = function() {
    var pizzaPrice = 0;

    if(this.pizzaSize === "small") {
        pizzaPrice = 8 * this.quantity;
    } else if(this.pizzaSize === "medium") {
        pizzaPrice = 12 * this.quantity;
    } else if(this.pizzaSize === "large") {
        pizzaPrice = 14 * this.quantity;
    }
    if (this.pizzaToppings !== undefined) {
        this.pizzaToppings.forEach(function(pizzaToppings) {
            pizzaPrice += 1;
        });
    }

    return pizzaPrice;
}

$(document).ready(function) {

}
