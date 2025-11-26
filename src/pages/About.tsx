import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Building2,
      title: "Innovation",
      description: "Constantly researching and developing new solutions for the railing industry"
    },
    {
      icon: Target,
      title: "Quality",
      description: "Providing high-quality railing fittings and architectural hardware accessories"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working together with dealers, distributors, and channel partners"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to enhancing living and working environments worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">About M-RAILS</h1>
          <p className="text-xl text-muted-foreground">
            The go-to brand for all your Aluminium Railing needs
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">M-RAILS</strong> has been an innovative and professional company engaged in research, manufacture, and marketing of fittings for railing systems and architectural railing hardware accessories.
                </p>
                <p>
                  M-RAILS provides railing fittings of high quality and provides consulting services to the architectural industries.
                </p>
                <p>
                  Our goal is to increase the value of buildings and to enhance the living and working environment of people worldwide. We achieve this together with our dealers, distributors, and channel partners by providing innovative and sustainable architectural solutions for the building envelope.
                </p>
                <p>
                  Experience M-RAILS - designed keeping in mind the Indian mindset and flexible in its availability to fulfill the needs of all types of customers with their unique budget and styling requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">35+</div>
                <p className="text-muted-foreground">Aluminium Railing Systems</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">32+</div>
                <p className="text-muted-foreground">Railing Accessories</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6 space-y-2">
                <div className="text-4xl font-bold text-primary">11+</div>
                <p className="text-muted-foreground">Railing Spigot Options</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-steel transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Finish Options */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Systems with Multi-Color Options
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["PVDF Finish", "Wood Finish", "Anodizing", "Powder Coating"].map((finish, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">{finish}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                LARGEST RANGE OF ALUMINIUM & STAINLESS STEEL SYSTEMS
              </h2>
              <p className="text-xl text-primary-foreground/90">
                100% Weather Proof Systems
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
