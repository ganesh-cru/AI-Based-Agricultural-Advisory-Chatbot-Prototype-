import { Card, CardContent } from "@/components/ui/card";
import { Sprout, TrendingUp, CheckCircle } from "lucide-react";

const agents = [
  {
    icon: Sprout,
    name: "Agronomy Agent",
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Your expert for all things related to crop cultivation and farm management",
    capabilities: [
      "Crop cultivation guidance",
      "Soil health assessment",
      "Pest and disease management",
      "Irrigation recommendations",
      "Best farming practices",
      "Seasonal crop planning",
    ],
  },
  {
    icon: TrendingUp,
    name: "Finance Agent",
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Your guide for agricultural economics and financial support",
    capabilities: [
      "Real-time market prices",
      "Government scheme information",
      "Subsidy eligibility checking",
      "Financial planning advice",
      "Loan and credit guidance",
      "Insurance information",
    ],
  },
];

export const Agents = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Meet Your AI Agents
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            अपने AI एजेंट से मिलें
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Two specialized AI agents working together to provide comprehensive agricultural support
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            दो विशेष AI एजेंट व्यापक कृषि सहायता प्रदान करने के लिए एक साथ काम कर रहे हैं
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${agent.bgColor} flex items-center justify-center mb-6`}>
                  <agent.icon className={`w-8 h-8 ${agent.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {agent.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {agent.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Key Capabilities:</h4>
                  {agent.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${agent.color}`} />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Intelligent Routing System
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our smart orchestrator automatically routes your questions to the right agent based on your query. 
                Whether you ask about crop diseases or market prices, you'll always get expert advice from the most relevant specialist.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
