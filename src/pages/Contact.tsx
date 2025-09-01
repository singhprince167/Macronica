import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Package } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import pastaBg from "@/assets/pasta-hero.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@qroshious.com", "wholesale@qroshious.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Pasta Street", "Mumbai, Maharashtra 400001"],
      description: "Visit our distribution center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "We're here to help"
    }
  ];

  const quickActions = [
    {
      icon: Package,
      title: "Place Order",
      description: "Ready to order? Get your pasta delivered quickly",
      action: "Order Now"
    },
    {
      icon: MessageSquare,
      title: "Wholesale Inquiry",
      description: "Interested in partnering with us?",
      action: "Get Quote"
    },
    {
      icon: Phone,
      title: "Urgent Support",
      description: "Need immediate assistance?",
      action: "Call Now"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Get in <span className="bg-semolina bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a customer or looking to partner with us, we'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-warm transition-all hover:scale-105 cursor-pointer">
                <action.icon className="h-12 w-12 mx-auto mb-4 text-pasta-gold" />
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-muted-foreground mb-4">{action.description}</p>
                <Button className="bg-semolina text-black hover:opacity-90">
                  {action.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-card">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="order">Product Order</SelectItem>
                      <SelectItem value="wholesale">Wholesale Partnership</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="recipe">Recipe Submission</SelectItem>
                      <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements, questions, or feedback..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full text-black bg-semolina hover:opacity-90" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Multiple ways to reach us - choose what works best for you
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-card">
                    <div className="flex items-start space-x-4">
                      <info.icon className="h-8 w-8 text-pasta-gold mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground">{detail}</p>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Response Time */}
              <Card className="p-6 shadow-card bg-pasta-cream">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <div className="space-y-2 text-sm">
                  <p>📞 <strong>Phone calls:</strong> Immediate during business hours</p>
                  <p>✉️ <strong>Email inquiries:</strong> Within 4-6 hours</p>
                  <p>💼 <strong>Wholesale quotes:</strong> Within 24 hours</p>
                  <p>🚚 <strong>Order confirmations:</strong> Within 2 hours</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-2">What are your minimum order quantities?</h3>
              <p className="text-muted-foreground">For retail customers, no minimum order. For wholesale partners, minimum 20 packs to get started.</p>
            </Card>
            
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-2">How fast is delivery?</h3>
              <p className="text-muted-foreground">Standard delivery within 2-3 days in metro cities, 4-5 days in other areas. Express delivery available.</p>
            </Card>
            
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-2">Do you offer credit terms for wholesale?</h3>
              <p className="text-muted-foreground">Yes, established partners can get 15-30 days credit terms after completing initial orders.</p>
            </Card>
            
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold mb-2">What if I'm not satisfied with quality?</h3>
              <p className="text-muted-foreground">We offer 100% quality guarantee. Unsatisfied customers can return products for full refund or exchange.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundImage: `url(${pastaBg})`, backgroundSize: '120%' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait - reach out today and discover why hundreds of customers trust Macronica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-black bg-semolina hover:opacity-90">
              Call: +91 98765 43210
            </Button>
            <Button size="lg" className="text-black bg-semolina hover:opacity-90">
              Email: info@qroshious.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;