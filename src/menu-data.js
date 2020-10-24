// Use values in CENTS so that float precision errors don't happen

export const VEGETARIAN = 1
export const VEGAN = 3

export const buildYourOwnPrices = [
    [1149, 1475, 1799],
    [1299, 1625, 1899],
    [1449, 1775, 2049],
    [1599, 1925, 2199],
    [1749, 2075, 2349]
]
// TODO: Gluten-Free crust and vegan cheese

export const doubleExtraToppings = [200, 225, 250]

export const toppings = [
    {
        name: 'pepperoni',
        type: 0
    },
    {
        name: 'ground beef',
        type: 0
    },
    {
        name: 'roast beef',
        type: 0
    },
    {
        name: 'salami',
        type: 0
    },
    {
        name: 'pineapple',
        type: VEGAN
    },
    {
        name: 'artichokes',
        type: VEGAN
    },
    {
        name: 'black olives',
        type: VEGAN
    },
    {
        name: 'tomatoes',
        type: VEGAN
    },
    {
        name: 'mild peppers',
        type: VEGAN
    },
    {
        name: 'onions',
        type: VEGAN
    },
    {
        name: 'bacon',
        type: 0
    },
    {
        name: 'italian sausage',
        type: 0
    },
    {
        name: 'linguica',
        type: 0
    },
    {
        name: 'mushrooms',
        type: VEGAN
    },
    {
        name: 'garlic',
        type: VEGAN
    },
    {
        name: 'anchovies',
        type: 0
    },
    {
        name: 'ham',
        type: 0
    },
    {
        name: 'meatball',
        type: 0
    },
    {
        name: 'green peppers',
        type: VEGAN
    },
    {
        name: 'jalapenos',
        type: VEGAN
    },
]

export const SUB = 0x10
export const SALAD = 0x20
export const PIZZA = 0x40
export const SIDE = 0x80

export const items = [
    {
        name: 'Monster Combo',
        desc: 'Roast Beef, Ham, Pepperoni, Italian Sausage, and Cheese',
        price: 899,
        type: SUB
    },
    {
        name: 'Roast Beef & Cheese',
        price: 799,
        type: SUB
    },
    {
        name: 'Italian Sausage & Cheese',
        price: 799,
        type: SUB
    },
    {
        name: 'Ham & Cheese',
        price: 799,
        type: SUB
    },
    {
        name: 'Meatball',
        price: 799,
        type: SUB
    },
    {
        name: 'Garlic Bread',
        price: 349,
        type: SIDE | VEGAN
    },
    {
        name: 'Cheese Sticks',
        price: 549,
        type: SIDE | VEGETARIAN
    },
    {
        name: 'Calzones',
        price: 949,
        type: SIDE | VEGETARIAN
    },
    {
        name: 'Buffalo Wings',
        price: 699,
        type: SIDE
    },
    {
        name: 'Sticky Fingers',
        price: [1749, 2225, 2599],
        desc: 'Pepperoni, Bacon, Mushrooms, Onions, Ham, Black Olives, Green Peppers, Italian Sausage',
        type: PIZZA
    },
    {
        name: 'Deluxe Hawaiian',
        price: [1649, 2025, 2399],
        desc: 'Ham, Pineapple, Bacon, Onions, Extra Cheese',
        type: PIZZA
    },
    {
        name: 'Veggie',
        price: [1649, 2025, 2399],
        desc: 'Mushroom, Onions, Black Olives, Artichoke HeArts, Green Peppers, Tomatoes',
        type: PIZZA | VEGETARIAN
    },
    {
        name: 'Chicken Combo',
        price: [1649, 2025, 2399],
        desc: 'Chicken, Black Olives, Onions, Tomatoes, Garlic, with White Garlic Sauce or Red Sauce',
        type: PIZZA
    },
    {
        name: 'Meat Medley',
        price: [1849, 2175, 2499],
        desc: 'Pepperoni, Sausage, Ham, Linguica, Ground Beef, Bacon',
        type: PIZZA
    },
    {
        name: "Fatte's Special",
        price: [2049, 2425, 2799],
        desc: 'Pepperoni, Italian Sausage, Ham, Linguica, Onions, Mushroom, Garlic, Pineapple, Olives, Green Peppers',
        type: PIZZA
    },
    {
        name: 'Antipasto Salad',
        price: [299, 599, 999],
        desc: 'Lettuce, Tomatoes, Cheese, Mushrooms, Onions, Green Peppers, Black Olives, Ham, Pepperoni'
    },
    {
        name: 'Tossed Salad',
        price: 299,
        desc: 'Dressings: Ranch or Italian'
    }
]
