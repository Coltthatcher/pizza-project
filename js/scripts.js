function Pizza(pizzaSize, toppings) {
this.pizzaSize = pizzaSize;
this.toppings = toppings;
this.cost = 0;
}

Pizza.prototype.price = function(pizzaSize, toppings) {
  if (this.pizzaSize === "1") {
    this.cost += 10;
  } else if (this.pizzaSize === "2") {
    this.cost += 20;
  } if (this.to)

}
