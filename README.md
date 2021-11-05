#### Describe: Pizza
>Test: "It should return the pizza object with the properties for toppings and size"
>Code:function Pizza(pizzaSize, toppings) {
this.pizzaSize = pizzaSize;
this.toppings = toppings;
this.cost = 0;
}
>Expected output:undefined

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }