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

$(document).ready(function() {
    $("#add-pizza-toppings").click(function(event) {
        event.preventDefault();

        $("#new-pizza-topping").append(
            '<div class="form-group new-pizza-topping">' +
                '<select id="pizza-toppings">' +
                    '<option value="Pepperoni">Pepperoni</option>' +
                    '<option value="Sausage">Sausage</option>' +
                    '<option value="Chicken">Chicken</option>' +
                    '<option value="Ham">Ham</option>' +
                    '<option value="Tomatoe">Tomatoe</option>' +
                    '<option value="Olive">Olive</option>' +
                    '<option value="Mushroom">Mushroom</option>' +
                    '<option value="Spinach">Spinach</option>' +
                '</select>' +
            '</div>')
    });

    $("form#new-pizza").submit(function(event) {
   event.preventDefault();

       var quantity = parseInt($("input#pizza-quantity").val());
       var pizzaSize = $("select#pizza-size").val();
       var pizzaToppings = [];

       $(".new-pizza-topping").each(function() {
           pizzaToppings.push($("select#pizza-toppings").val());
       });

       var newPizzaPrice = new Pizza(quantity, pizzaSize, pizzaToppings);

       $("#pizza-price").text(newPizzaPrice.totalPrice());
       $("#results").show();
    });
});
