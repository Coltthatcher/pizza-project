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
  } if (this.toppings === "3") {
    this.cost += 1;
  } else if (this.toppings === "4") {
    this.cost += 5;
  } if (this.toppings === "5") {
    this.cost += 2;
  } else if (this.toppings === "6") {
    this.cost += 7;
  }
}
