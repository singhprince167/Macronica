import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, TrendingUp, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make premium pasta accessible to every household while empowering local retailers with quality products at competitive prices."
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "We source only the finest pasta from trusted suppliers and ensure every pack meets our stringent quality standards."
    },
    {
      icon: TrendingUp,
      title: "Smart Business",
      description: "Our bulk-to-retail model creates value for everyone - suppliers, retailers, and consumers alike."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local shopkeepers and distributors is at the heart of everything we do."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Macronica</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforming the pasta supply chain to benefit everyone - from bulk suppliers to your dinner table
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg">
                Macronica was born from a simple observation: high-quality pasta was either too expensive for regular consumers or only available in bulk quantities that small retailers couldn't manage effectively.
              </p>
              
              <p className="text-lg">
                We saw an opportunity to bridge this gap. By sourcing premium pasta in <strong>20-50 kg bulk packs</strong> directly from trusted suppliers, we could secure the best prices while maintaining quality standards. Our innovation lies in repackaging these bulk quantities into consumer and retailer-friendly sizes: <strong>100g, 200g, 500g, and 1kg packs</strong>.
              </p>
              
              <p className="text-lg">
                This model creates a win-win-win situation:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li><strong>Consumers</strong> get premium pasta at affordable prices</li>
                <li><strong>Retailers</strong> can stock high-quality products with good margins</li>
                <li><strong>Suppliers</strong> benefit from consistent bulk orders</li>
              </ul>
              
              <p className="text-lg">
                Today, we supply to hundreds of local shopkeepers and distributors while building direct relationships with pasta lovers who appreciate quality and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 shadow-card">
                <value.icon className="h-12 w-12 text-pasta-gold mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Building a stronger food supply chain, one pack at a time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pasta-gold mb-2">500+</div>
              <div className="text-muted-foreground">Retail Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pasta-gold mb-2">50+</div>
              <div className="text-muted-foreground">Tonnes Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pasta-gold mb-2">10+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pasta-gold mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're a retailer looking for quality products or a consumer seeking great pasta, we'd love to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
              <Link to="/wholesale">Partner with Us</Link>
            </Button>
            <Button size="lg" className="bg-white text-pasta-gold hover:bg-pasta-cream" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;