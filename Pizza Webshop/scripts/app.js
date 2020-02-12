
const pizzaMaker = new PizzaMaker({
    parentElement: document.body,
    pizzaSizes: [
        new PizzaSize('Small', 3),
        new PizzaSize('Medium', 5),
        new PizzaSize('Large', 7)
    ],

    toppings: [
        new Topping('Extra Cheese', 1),
        new Topping('Pepperoni', 0.8),
        new Topping('Pineapple', 0.5),
        new Topping('Tuna', 1),
        new Topping('Onion', 1),
        new Topping('Red Onion', 1),
        new Topping('Ham', 2),
        new Topping('Bacon', 2),
        new Topping('Kebab', 3)
    ]
});
