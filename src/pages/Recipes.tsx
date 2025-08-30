import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, ChefHat, Star } from "lucide-react";

const Recipes = () => {
  const recipes = [
    {
      name: "Classic Pasta Arrabiata",
      time: "20 mins",
      serves: "4 people",
      difficulty: "Easy",
      pasta: "Penne",
      ingredients: [
        "400g Qroshious Penne",
        "4 tomatoes, chopped",
        "4 cloves garlic",
        "2-3 dry red chilies",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper"
      ],
      instructions: [
        "Cook penne according to package instructions",
        "Heat olive oil, add garlic and red chilies",
        "Add tomatoes and cook until soft",
        "Toss with cooked pasta and basil",
        "Season with salt and pepper"
      ]
    },
    {
      name: "Creamy Mushroom Fusilli",
      time: "25 mins",
      serves: "3 people",
      difficulty: "Medium",
      pasta: "Fusilli",
      ingredients: [
        "300g Qroshious Fusilli",
        "200g mixed mushrooms",
        "200ml heavy cream",
        "1 onion, diced",
        "2 cloves garlic",
        "Parmesan cheese",
        "Fresh parsley",
        "White wine"
      ],
      instructions: [
        "Cook fusilli until al dente",
        "Sauté mushrooms and onions",
        "Add garlic and white wine",
        "Pour in cream and simmer",
        "Toss with pasta and cheese"
      ]
    },
    {
      name: "Spaghetti Aglio e Olio",
      time: "15 mins",
      serves: "2 people", 
      difficulty: "Easy",
      pasta: "Spaghetti",
      ingredients: [
        "200g Qroshious Spaghetti",
        "6 cloves garlic, sliced",
        "1/2 cup olive oil",
        "Red pepper flakes",
        "Fresh parsley",
        "Parmesan cheese",
        "Salt"
      ],
      instructions: [
        "Cook spaghetti in salted water",
        "Heat olive oil with garlic",
        "Add red pepper flakes",
        "Toss with drained pasta",
        "Garnish with parsley and cheese"
      ]
    },
    {
      name: "Cheesy Shell Pasta Bake",
      time: "45 mins",
      serves: "6 people",
      difficulty: "Medium",
      pasta: "Shell Pasta",
      ingredients: [
        "500g Qroshious Shell Pasta",
        "500g ricotta cheese",
        "200g mozzarella cheese",
        "100g parmesan cheese",
        "2 cups marinara sauce",
        "1 egg",
        "Italian herbs",
        "Spinach"
      ],
      instructions: [
        "Cook shells until just tender",
        "Mix ricotta with egg and herbs",
        "Stuff shells with cheese mixture",
        "Top with marinara and mozzarella",
        "Bake until bubbly and golden"
      ]
    },
    {
      name: "Bow Tie Pasta Salad",
      time: "30 mins",
      serves: "8 people",
      difficulty: "Easy",
      pasta: "Bow Tie",
      ingredients: [
        "400g Qroshious Bow Tie Pasta",
        "Cherry tomatoes",
        "Cucumber, diced",
        "Red onion, sliced",
        "Black olives",
        "Feta cheese",
        "Italian dressing",
        "Fresh herbs"
      ],
      instructions: [
        "Cook bow tie pasta and cool",
        "Chop all vegetables",
        "Mix pasta with vegetables",
        "Add feta and olives",
        "Toss with dressing and chill"
      ]
    },
    {
      name: "Mac and Cheese Deluxe",
      time: "35 mins", 
      serves: "4 people",
      difficulty: "Medium",
      pasta: "Macaroni",
      ingredients: [
        "300g Qroshious Macaroni",
        "2 cups milk",
        "3 tbsp butter",
        "3 tbsp flour",
        "200g cheddar cheese",
        "100g gruyere cheese",
        "Breadcrumbs",
        "Paprika"
      ],
      instructions: [
        "Cook macaroni until tender",
        "Make cheese sauce with butter, flour, milk",
        "Add grated cheeses",
        "Mix with pasta",
        "Top with breadcrumbs and bake"
      ]
    }
  ];

  const tips = [
    {
      title: "Perfect Al Dente",
      tip: "Cook pasta 1-2 minutes less than package instructions for perfect texture"
    },
    {
      title: "Salt the Water",
      tip: "Add plenty of salt to boiling water - it should taste like seawater"
    },
    {
      title: "Save Pasta Water",
      tip: "Reserve some starchy cooking water to help bind sauces"
    },
    {
      title: "Don't Rinse",
      tip: "Never rinse hot pasta - it removes the starch that helps sauce stick"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Delicious <span className="bg-gradient-hero bg-clip-text text-transparent">Pasta Recipes</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform our premium pasta into mouth-watering meals with these tested recipes
            </p>
            <Button className="bg-gradient-hero hover:opacity-90" asChild>
              <Link to="/products">Shop Pasta Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cooking Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pro Cooking Tips</h2>
            <p className="text-muted-foreground">Master the basics for perfect pasta every time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="p-4 text-center shadow-card">
                <ChefHat className="h-8 w-8 mx-auto mb-3 text-pasta-gold" />
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.tip}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Recipes</h2>
            <p className="text-xl text-muted-foreground">
              From quick weeknight dinners to impressive dinner party dishes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-warm transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{recipe.name}</h3>
                  <Badge className="bg-pasta-gold">
                    {recipe.pasta}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {recipe.serves}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {recipe.difficulty}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <ul className="text-sm space-y-1">
                    {recipe.ingredients.slice(0, 4).map((ingredient, idx) => (
                      <li key={idx} className="text-muted-foreground">• {ingredient}</li>
                    ))}
                    {recipe.ingredients.length > 4 && (
                      <li className="text-muted-foreground">• + {recipe.ingredients.length - 4} more...</li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Instructions:</h4>
                  <ol className="text-sm space-y-1">
                    {recipe.instructions.slice(0, 3).map((step, idx) => (
                      <li key={idx} className="text-muted-foreground">{idx + 1}. {step}</li>
                    ))}
                    {recipe.instructions.length > 3 && (
                      <li className="text-muted-foreground">... + {recipe.instructions.length - 3} more steps</li>
                    )}
                  </ol>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/products">Get Pasta</Link>
                  </Button>
                  <Button className="flex-1 bg-gradient-hero hover:opacity-90" asChild>
                    <Link to="/contact">Share Recipe</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Contest */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Share Your Pasta Creations!</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Got a amazing pasta recipe using Qroshious products? Share it with our community and win exciting prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/products">Buy Pasta</Link>
              </Button>
              <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
                <Link to="/contact">Submit Recipe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Cooking?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get our premium pasta delivered to your doorstep and start creating delicious meals
          </p>
          <Button size="lg" className="bg-white text-pasta-gold hover:bg-pasta-cream" asChild>
            <Link to="/products">Order Pasta Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Recipes;