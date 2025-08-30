import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Users, Award, Truck } from "lucide-react";
import pastaHero from "@/assets/penne-569072.jpg";
import pastaBg from "@/assets/scallions-7849575.jpg"; // adjust the path based on your folder

const Home = () => {
  const benefits = [
    {
      icon: Package,
      title: "Premium Quality",
      description: "Sourced from the finest suppliers and repackaged with care"
    },
    {
      icon: Users,
      title: "Retail-Friendly",
      description: "Perfect sizes for both consumers and retailers"
    },
    {
      icon: Award,
      title: "Affordable Pricing",
      description: "Best value for premium pasta without compromising quality"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick supply chain from bulk to your doorstep"
    }
  ];

  const packSizes = [
    { size: "100g", price: "₹25", ideal: "Single serving" },
    { size: "200g", price: "₹45", ideal: "Small family" },
    { size: "500g", price: "₹95", ideal: "Family pack" },
    { size: "1kg", price: "₹180", ideal: "Bulk cooking" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${pastaHero})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            From Bulk to <span className="bg-semolina bg-clip-text text-transparent">Bite-Sized</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Premium Pasta for Every Store & Home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group relative inline-block bg-semolina text-black font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-200" asChild>
              <Link to="/products">Order Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-semolina hover:text-black" asChild>
              <Link to="/wholesale">Become a Distributor</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-semolina hover:text-black" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Macronica?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We transform bulk pasta into consumer-friendly packs, supporting local retailers while delivering premium quality to every home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-warm transition-shadow">
                <benefit.icon className="h-12 w-12 mx-auto mb-4 text-semolina" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sizes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perfect Pack Sizes</h2>
            <p className="text-xl text-muted-foreground">
              From individual portions to family meals – we have the right size for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packSizes.map((pack, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-warm transition-all hover:scale-105">
                <div className="text-3xl font-bold text-semolina mb-2">{pack.size}</div>
                <div className="text-2xl font-semibold mb-2">{pack.price}</div>
                <div className="text-muted-foreground">{pack.ideal}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero" style={{ backgroundImage: `url(${pastaBg})`, backgroundSize: '120%'  }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of retailers who trust Macronica for premium pasta at wholesale prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-semolina text-black hover:opacity-90" asChild>
              <Link to="/wholesale">Get Wholesale Pricing</Link>
            </Button>
            <Button size="lg" className="bg-semolina text-black hover:opacity-90" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;