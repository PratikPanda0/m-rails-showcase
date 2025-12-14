import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Building2, Factory } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

const Contact = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    city: "",
    phone: "",
    profession: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submissionData = {
      formData: {
        firstName: formData.firstName,
        email: formData.email,
        city: formData.city,
        phone: formData.phone,
        profession: formData.profession,
        message: formData.message
      },
      cartItems: cart,
      timestamp: new Date().toISOString()
    };
    
    console.log("Contact Form Submission:", JSON.stringify(submissionData, null, 2));
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you soon.",
    });
    setFormData({ firstName: "", email: "", city: "", phone: "", profession: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      profession: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Front/R-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          M-RAILS Located...
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Tell us about your project ideas or just say hello. Whether you've got a big idea or need some inspiration with a building project, we are here to create perfect railing solutions. From concept to creation, let us inspire you.
        </p>
      </div>

      {/* Address Cards */}
      <div className="container mx-auto px-4 pb-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Corporate Office */}
          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Corporate Office</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Shed no -4, Survey No-35, Plot No-6, Behind Tata showroom, Vavdi, Rajkot, Gujarat, 360004
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 942 724 8004</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:mrails.sales@gmail.com" className="hover:text-primary transition-colors">
                    mrails.sales@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Factory Address */}
          <Card className="border-t-4 border-t-primary">
            <CardContent className="pt-8 pb-6 px-6">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Factory Address</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Shed no -4, Survey No-35, Plot No-6, Behind Tata showroom, Vavdi, Rajkot, Gujarat, 360004
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 760 000 0775</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <a href="http://www.mrails.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    www.mrails.in
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form Section with Map */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Google Map */}
            <div className="h-[500px] lg:h-auto min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5089574449373!2d70.74661307596472!3d22.27639794372825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb5e8f7b25a7%3A0x7f8d2e8d8f8d8e8d!2sVavdi%2C%20Rajkot%2C%20Gujarat%20360004!5e0!3m2!1sen!2sin!4v1702500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="M-RAILS Location"
              />
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXX XXX XXXX"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession *</Label>
                    <Select value={formData.profession} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select your profession" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="architect">Architect</SelectItem>
                        <SelectItem value="dealer">Dealer</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="builder">Builder</SelectItem>
                        <SelectItem value="end-user">End User</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      maxLength={180}
                      className="bg-background resize-none"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formData.message.length} / 180
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;