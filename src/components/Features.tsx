import { Cloud, TrendingUp, Sprout, Globe, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sprout,
    title: "Agronomy Expert",
    description: "Get advice on crop cultivation, soil health, pest management, and best farming practices tailored to your needs.",
  },
  {
    icon: TrendingUp,
    title: "Finance Advisor",
    description: "Access market prices, government schemes, subsidies, and financial planning assistance for better farm management.",
  },
  {
    icon: Cloud,
    title: "Weather Integration",
    description: "Real-time weather forecasts and alerts to help you plan your farming activities effectively.",
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "PIN code-based localization provides region-specific advice and information relevant to your area.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Chat in your preferred language with support for English and Hindi, making it accessible to all farmers.",
  },
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    description: "Context-aware AI agents remember your conversation and provide personalized, relevant responses.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Everything You Need in One Place
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            सब कुछ एक ही जगह पर
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Our AI-powered platform brings together agronomic expertise and financial guidance to support your farming journey
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            हमारा AI-संचालित प्लेटफ़ॉर्म कृषि विशेषज्ञता और वित्तीय मार्गदर्शन को एक साथ लाता है
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
