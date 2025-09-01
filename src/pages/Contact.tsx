import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import pastaBg from "@/assets/rigatoni-7384572.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pastaBg})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto bg-black/40 p-6 rounded-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Macronica</h1>
            <p className="text-lg sm:text-xl font-semibold">
              We’d love to hear from you! Reach out for wholesale inquiries, partnership opportunities, or general questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8 shadow-card">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button type="submit" className="w-full text-black bg-semolina hover:opacity-90">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card flex items-start gap-4">
              <MapPin className="w-6 h-6 text-semolina" />
              <div>
                <h3 className="text-lg font-semibold">Our Address</h3>
                <p className="text-muted-foreground">
                  Macronica Foods Pvt. Ltd.<br />
                  Sector 62, Noida, Uttar Pradesh, India
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card flex items-start gap-4">
              <Phone className="w-6 h-6 text-semolina" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </Card>

            <Card className="p-6 shadow-card flex items-start gap-4">
              <Mail className="w-6 h-6 text-semolina" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@macronica.com</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
