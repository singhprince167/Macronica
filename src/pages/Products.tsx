import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Package, Star, Truck, Shield } from "lucide-react";
import pastaBg from "@/assets/pasta-hero.jpg";


const Products = () => {
  const products = [
    {
      name: "Premium Penne",
      sizes: ["100g - ₹25", "200g - ₹45", "500g - ₹95", "1kg - ₹180"],
      description: "Classic tube-shaped pasta perfect for all sauces",
      features: ["Durum Wheat", "Al Dente Texture", "Quick Cooking"]
    },
    {
      name: "Spiral Fusilli",
      sizes: ["100g - ₹28", "200g - ₹48", "500g - ₹98", "1kg - ₹185"],
      description: "Twisted pasta that holds sauces beautifully",
      features: ["Premium Quality", "Perfect Spirals", "Sauce Friendly"]
    },
    {
      name: "Classic Spaghetti",
      sizes: ["100g - ₹24", "200g - ₹44", "500g - ₹92", "1kg - ₹175"],
      description: "Long, thin pasta - the Italian classic",
      features: ["Authentic Italian", "Even Thickness", "Traditional"]
    },
    {
      name: "Shell Pasta",
      sizes: ["100g - ₹26", "200g - ₹46", "500g - ₹96", "1kg - ₹182"],
      description: "Shell-shaped pasta perfect for stuffing and baking",
      features: ["Unique Shape", "Versatile Use", "Premium Grade"]
    },
    {
      name: "Bow Tie Farfalle",
      sizes: ["100g - ₹27", "200g - ₹47", "500g - ₹97", "1kg - ₹183"],
      description: "Butterfly-shaped pasta that's visually appealing",
      features: ["Attractive Shape", "Great Texture", "Restaurant Quality"]
    },
    {
      name: "Macaroni Tubes",
      sizes: ["100g - ₹25", "200g - ₹45", "500g - ₹95", "1kg - ₹180"],
      description: "Small tube pasta perfect for mac and cheese",
      features: ["Kid Friendly", "Quick Cook", "Versatile"]
    }
  ];

  const wholesaleDeals = [
    {
      title: "Starter Pack",
      description: "Perfect for small retailers",
      contents: "20 packs mixed sizes",
      price: "₹1,800",
      savings: "Save ₹200"
    },
    {
      title: "Business Pack",
      description: "For established stores",
      contents: "50 packs mixed sizes",
      price: "₹4,200",
      savings: "Save ₹600"
    },
    {
      title: "Bulk Deal",
      description: "Maximum savings for distributors",
      contents: "100+ packs mixed sizes",
      price: "From ₹8,000",
      savings: "Save ₹1,500+"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="bg-gradient-hero bg-clip-text text-semolina">Premium Products</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Carefully selected pasta varieties in consumer-friendly pack sizes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge bg-semolina className="px-4 py-2">100g Packs</Badge>
              <Badge bg-semolina className="px-4 py-2">200g Packs</Badge>
              <Badge bg-semolina className="px-4 py-2">500g Packs</Badge>
              <Badge bg-semolina className="px-4 py-2">1kg Packs</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-warm transition-shadow">
                <div className="flex items-center mb-4">
                  <Package className="h-8 w-8 text-pasta-gold mr-3" />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-4">
                  {product.sizes.map((size, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm">{size.split(' - ')[0]}</span>
                      <span className="font-semibold text-pasta-gold">{size.split(' - ')[1]}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button className="w-full bg-semolina hover:opacity-90" asChild>
                  <Link to="/contact">Order Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every pack goes through rigorous quality checks to ensure you get the best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-pasta-gold" />
              <h3 className="font-semibold mb-2">Premium Sourcing</h3>
              <p className="text-sm text-muted-foreground">Only from certified suppliers</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-pasta-gold" />
              <h3 className="font-semibold mb-2">Hygienic Packaging</h3>
              <p className="text-sm text-muted-foreground">Clean, sealed environment</p>
            </div>
            <div className="text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-pasta-gold" />
              <h3 className="font-semibold mb-2">Fresh Products</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround times</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-pasta-gold" />
              <h3 className="font-semibold mb-2">Safe Delivery</h3>
              <p className="text-sm text-muted-foreground">Protected transportation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Deals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Wholesale Deals</h2>
            <p className="text-xl text-muted-foreground">
              Special pricing for retailers and distributors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wholesaleDeals.map((deal, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-warm transition-all hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                <p className="text-muted-foreground mb-4">{deal.description}</p>
                <div className="text-lg mb-2">{deal.contents}</div>
                <div className="text-3xl font-bold text-pasta-gold mb-2">{deal.price}</div>
                <Badge className="mb-4 bg-pasta-green">{deal.savings}</Badge>
                <Button className="w-full text-black bg-semolina hover:opacity-90" asChild>
                  <Link to="/wholesale">Get Quote</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundImage: `url(${pastaBg})`, backgroundSize: '120%' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your premium pasta delivered quickly with our reliable supply chain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-black bg-semolina hover:opacity-90" asChild>
              <Link to="/wholesale">Wholesale Inquiry</Link>
            </Button>
            <Button size="lg" className="text-black bg-semolina hover:opacity-90" asChild>
              <Link to="/contact">Place Order</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;