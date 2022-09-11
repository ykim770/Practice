// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  const findMin = [];
  if (Object.keys(recipe).length > Object.keys(available).length) return 0;
  for (const ing in recipe) {
    if (ing in available) {
      console.log(ing);
      findMin.push(Math.floor(available[ing] / recipe[ing]));
    }
  }
  console.log(findMin);
  return Math.min.apply(Math, findMin);
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipe, available));
