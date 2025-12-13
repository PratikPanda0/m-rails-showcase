import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Award, Recycle, Mail, Phone } from "lucide-react";
import { categories } from "@/data/categories";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Weather Proof",
      description: "Designed to withstand any climate condition"
    },
    {
      icon: Zap,
      title: "Easy Installation",
      description: "Simple setup process for quick deployment"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Aluminum Alloy 6063-T6 construction"
    },
    {
      icon: Recycle,
      title: "100% Recyclable",
      description: "Environmentally friendly materials"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About M-RAILS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              M-RAILS The go to brand for all your Aluminium Railing needs. We have been an innovative and professional company engaged in research, manufacture, and marketing of fittings for railing systems and architectural railing hardware accessories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              M-RAILS provides railing fittings of high quality and consulting services to the architectural industries. Our goal is to increase the value of buildings and to enhance the living and working environment of people worldwide.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} to="/products">
                <Card className="group hover:shadow-steel transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-primary">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Why Choose M-RAILS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-steel transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today to discuss your railing needs and get expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
            <a href="tel:+91XXXXXXXXXX">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
