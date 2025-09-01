import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Package, Users, DollarSign, Clock, Shield, Star } from "lucide-react";
import pastaBg from "@/assets/rigatoni-7384572.jpg";

const Wholesale = () => {
  const pricingTiers = [
    {
      title: "New Partner",
      subtitle: "Perfect to get started",
      minOrder: "20 packs",
      price: "₹1,700",
      perPack: "₹85 per pack after discount",
      features: ["Mixed pack sizes", "Monthly billing", "Phone support", "Standard delivery"],
      cta: "Get Custom Quote"
    },
    {
      title: "Established Store",
      subtitle: "For regular retailers",
      minOrder: "50 packs",
      price: "₹3,750",
      perPack: "₹75 per pack after discount",
      features: ["Priority restocking", "Weekly billing", "Dedicated manager", "Express delivery"],
      cta: "Get Custom Quote",
      popular: true
    },
    {
      title: "Distribution Hub",
      subtitle: "For large distributors",
      minOrder: "100+ packs",
      price: "₹6,500",
      perPack: "₹65 per pack after discount",
      features: ["Custom packaging", "Daily billing", "24/7 support", "Same-day delivery"],
      cta: "Get Custom Quote"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${pastaBg})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Partner with Macronica
            </h1>
            <p className="text-lg sm:text-xl mb-8 font-bold">
              Join 500+ successful retailers who trust us for premium pasta at wholesale prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-black bg-semolina hover:opacity-90">
                <Link to="#pricing">View Pricing</Link>
              </Button>
              <Button size="lg" className="text-black bg-semolina hover:opacity-90" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Wholesale Pricing</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Flexible pricing tiers to match your business size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-6 sm:p-8 text-center shadow-card relative ${
                  tier.popular ? "ring-2 ring-pasta-gold shadow-warm" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-semolina">
                    Most Popular
                  </Badge>
                )}

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{tier.title}</h3>
                <p className="text-muted-foreground mb-4">{tier.subtitle}</p>
                <div className="text-base sm:text-lg mb-2">
                  Min Order: <strong>{tier.minOrder}</strong>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-semolina mb-2">{tier.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{tier.perPack}</p>

                <ul className="space-y-2 mb-8 text-left">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base">
                      <div className="w-2 h-2 bg-semolina rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full text-black bg-semolina hover:opacity-90" asChild>
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;
