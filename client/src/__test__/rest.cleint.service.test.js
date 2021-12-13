import {getRecipes,getRecipe} from '../services/rest.cleint.service';

it("Retrive first 10 recipes that contains pasta",async ()=>{
    const returnPasta=await getRecipes("pasta",10);
    
    expect(returnPasta).toEqual([{"id": 654959, "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg", "title": "Pasta With Tuna"},
     {"id": 511728, "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg", "title": "Pasta Margherita"}, 
     {"id": 654812, "image": "https://spoonacular.com/recipeImages/654812-312x231.jpg", "title": "Pasta and Seafood"},
      {"id": 654857, "image": "https://spoonacular.com/recipeImages/654857-312x231.jpg", "title": "Pasta On The Border"},
       {"id": 654883, "image": "https://spoonacular.com/recipeImages/654883-312x231.jpg", "title": "Pasta Vegetable Soup"},
        {"id": 654928, "image": "https://spoonacular.com/recipeImages/654928-312x231.jpg", "title": "Pasta With Italian Sausage"},
         {"id": 654926, "image": "https://spoonacular.com/recipeImages/654926-312x231.jpg", "title": "Pasta With Gorgonzola Sauce"},
          {"id": 654944, "image": "https://spoonacular.com/recipeImages/654944-312x231.jpg", "title": "Pasta With Salmon Cream Sauce"},
           {"id": 654905, "image": "https://spoonacular.com/recipeImages/654905-312x231.jpg", "title": "Pasta With Chickpeas and Kale"},
            {"id": 654901, "image": "https://spoonacular.com/recipeImages/654901-312x231.jpg", "title": "Pasta With Chicken and Broccoli"}]);
});

it("Retrive first 20 recipes that contains pizza",async ()=>{
    const returnPizza=await getRecipes("pizza",20);
    const dataExpected=[{"id": 656329, "image": "https://spoonacular.com/recipeImages/656329-312x231.jpg", "title": "Pizza bites with pumpkin"},
     {"id": 680975, "image": "https://spoonacular.com/recipeImages/680975-312x231.jpg", "title": "BLT Pizza"},
      {"id": 663136, "image": "https://spoonacular.com/recipeImages/663136-312x231.jpg", "title": "Thai Pizza"},
       {"id": 716300, "image": "https://spoonacular.com/recipeImages/716300-312x231.jpg", "title": "Plantain Pizza"},
        {"id": 665769, "image": "https://spoonacular.com/recipeImages/665769-312x231.jpg", "title": "Zucchini Pizza Boats"},
         {"id": 655698, "image": "https://spoonacular.com/recipeImages/655698-312x231.jpg", "title": "Pepperoni Pizza Muffins"}, 
         {"id": 622598, "image": "https://spoonacular.com/recipeImages/622598-312x231.jpg", "title": "Pittata - Pizza Frittata"},
          {"id": 641893, "image": "https://spoonacular.com/recipeImages/641893-312x231.jpg", "title": "Easy Cheesy Pizza Casserole"}, 
          {"id": 655847, "image": "https://spoonacular.com/recipeImages/655847-312x231.jpg", "title": "Pesto Veggie Pizza"},
           {"id": 654523, "image": "https://spoonacular.com/recipeImages/654523-312x231.jpg", "title": "Paneer & Fig Pizza"},
            {"id": 651956, "image": "https://spoonacular.com/recipeImages/651956-312x231.jpg", "title": "Mini eggplant pizza"}, 
            {"id": 662264, "image": "https://spoonacular.com/recipeImages/662264-312x231.jpg", "title": "summer vegetable pizza"},
             {"id": 636593, "image": "https://spoonacular.com/recipeImages/636593-312x231.jpg", "title": "Butternut Squash Pizza"},
              {"id": 661640, "image": "https://spoonacular.com/recipeImages/661640-312x231.jpg", "title": "Stilton Balsamic Pizza"}, 
              {"id": 663553, "image": "https://spoonacular.com/recipeImages/663553-312x231.jpg", "title": "Tomato and Bacon Pizza With Rice Crust"}, 
              {"id": 644953, "image": "https://spoonacular.com/recipeImages/644953-312x231.jpg", "title": "Goat Cheese Pesto Pizza"},
               {"id": 642777, "image": "https://spoonacular.com/recipeImages/642777-312x231.jpg", "title": "Fig and Goat Cheese Pizza With Pesto"},
                {"id": 647124, "image": "https://spoonacular.com/recipeImages/647124-312x231.jpg", "title": "Homemade Thin Crust Pizza + Pesto + Potato"},
                 {"id": 652592, "image": "https://spoonacular.com/recipeImages/652592-312x231.jpg", "title": "Multigrain Tandoori Pizza With Paneer Tikka"}, 
                 {"id": 642371, "image": "https://spoonacular.com/recipeImages/642371-312x231.jpg", "title": "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion"}]
    expect(returnPizza).toEqual(dataExpected);
});

it("Retrive one recipe details",async ()=>{
    const recipeDetales=await getRecipe(680975);
    expect(recipeDetales).toEqual({"id": 680975, "image": "https://spoonacular.com/recipeImages/680975-556x370.jpg", "sourceUrl": "http://www.pinkwhen.com/blt-pizza/", "summary": "You can never have too many main course recipes, so give BLT Pizzan a try. This recipe makes 3 servings with <b>667 calories</b>, <b>25g of protein</b>, and <b>32g of fat</b> each. For <b>$2.72 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. 1 person has made this recipe and would make it again. A mixture of colby jack cheese, pizza crust, turkey bacon, and a handful of other ingredients are all it takes to make this recipe so scrumptious. To use up the tomato you could follow this main course with the <a href=\"https://spoonacular.com/recipes/pink-peony-popcorn-balls-129348\">Pink Peony Popcorn Balls</a> as a dessert. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 38%</b>. This score is not so spectacular. Try <a href=\"https://spoonacular.com/recipes/blt-salad-917813\">BLT Salad</a>, <a href=\"https://spoonacular.com/recipes/blt-salad-916021\">BLT Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-chicken-asparagus-and-mushroom-pizza-with-blackbird-bakery-pizza-crust-539911\">Grilled Chicken, Asparagus, and Mushroom Pizza with Blackbird Bakery Pizza Crust</a> for similar recipes.", "title": "BLT Pizza"});
});

it("Retrive one recipe details -second",async ()=>{
    const recipeDetales2=await getRecipe(642371);
    expect(recipeDetales2).toEqual({"id": 642371, "image": "https://spoonacular.com/recipeImages/642371-556x370.jpg", "sourceUrl": "https://www.foodista.com/recipe/62GDZ335/elk-italian-sausage-pizza-with-ricotta-cheese-sauted-mushrooms-and-onion", "summary": "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion might be a good recipe to expand your main course repertoire. One serving contains <b>630 calories</b>, <b>45g of protein</b>, and <b>24g of fat</b>. This recipe serves 4 and costs $4.68 per serving. This recipe from Foodista requires onion, ricotta cheese, pizza crust, and parmesan cheese. Not a lot of people really liked this Mediterranean dish. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. 1 person found this recipe to be scrumptious and satisfying. Overall, this recipe earns a <b>solid spoonacular score of 63%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/italian-sausage-caramelized-onion-pizza-593157\">Italian Sausage & Caramelized Onion Pizza</a>, <a href=\"https://spoonacular.com/recipes/fast-and-easy-ricotta-cheese-pizza-with-mushrooms-broccoli-and-chicken-471633\">Fast and Easy Ricotta Cheese Pizza with Mushrooms, Broccoli, and Chicken</a>, and <a href=\"https://spoonacular.com/recipes/italian-sausage-spinach-and-ricotta-cheese-stuffed-shells-512750\">Italian Sausage, Spinach and Ricotta Cheese Stuffed Shells</a>.", "title": "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion"});
});


