import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About Our Project
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-primary">
              हमारी परियोजना के बारे में
            </p>
            <p className="text-xl text-muted-foreground mt-6">
              AI-Powered Multi-Agent Chatbot for Farmers | Minor Project BCA 307
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Our Mission</h2>
                  <p className="text-2xl font-semibold text-primary">हमारा मिशन</p>
                </div>
              </div>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to empower Indian farmers with cutting-edge AI technology that provides 
                  personalized, accessible, and actionable agricultural guidance. We believe that every farmer 
                  deserves access to expert knowledge in their own language, regardless of their location or resources.
                </p>
                <p className="text-muted-foreground/80 leading-relaxed">
                  हमारा मिशन भारतीय किसानों को अत्याधुनिक AI तकनीक से सशक्त बनाना है जो व्यक्तिगत, 
                  सुलभ और कार्रवाई योग्य कृषि मार्गदर्शन प्रदान करती है। हम मानते हैं कि हर किसान 
                  को अपनी भाषा में विशेषज्ञ ज्ञान तक पहुंच का अधिकार है।
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-2">Project Overview</h2>
              <p className="text-2xl font-semibold text-primary">परियोजना विवरण</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">What We Do</h3>
                  <p className="text-lg font-semibold text-primary mb-3">हम क्या करते हैं</p>
                  <p className="text-muted-foreground mb-2">
                    We've developed an intelligent multi-agent chatbot system that combines agronomic expertise 
                    with financial guidance to support farmers in making informed decisions.
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    हमने एक बुद्धिमान मल्टी-एजेंट चैटबॉट सिस्टम विकसित किया है जो कृषि विशेषज्ञता को 
                    वित्तीय मार्गदर्शन के साथ जोड़ता है।
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Who We Serve</h3>
                  <p className="text-lg font-semibold text-primary mb-3">हम किसकी सेवा करते हैं</p>
                  <p className="text-muted-foreground mb-2">
                    Our platform is designed for Indian farmers of all scales - from small landholders to 
                    large agricultural enterprises - seeking reliable, real-time agricultural support.
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    हमारा प्लेटफ़ॉर्म सभी स्तरों के भारतीय किसानों के लिए डिज़ाइन किया गया है - छोटे 
                    भूमिधारकों से लेकर बड़े कृषि उद्यमों तक।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-2">Key Features</h2>
              <p className="text-2xl font-semibold text-primary">मुख्य विशेषताएं</p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Dual Agent System",
                  titleHi: "दोहरा एजेंट सिस्टम",
                  desc: "Specialized Agronomy and Finance agents provide expert guidance in their respective domains",
                  descHi: "विशेष कृषि और वित्त एजेंट अपने संबंधित क्षेत्रों में विशेषज्ञ मार्गदर्शन प्रदान करते हैं"
                },
                {
                  title: "Multilingual Support",
                  titleHi: "बहुभाषी समर्थन",
                  desc: "Communicate in English or Hindi to ensure accessibility for all farmers",
                  descHi: "सभी किसानों के लिए पहुंच सुनिश्चित करने के लिए अंग्रेजी या हिंदी में संवाद करें"
                },
                {
                  title: "Location-Based Advice",
                  titleHi: "स्थान-आधारित सलाह",
                  desc: "PIN code integration provides region-specific recommendations and information",
                  descHi: "पिन कोड एकीकरण क्षेत्र-विशिष्ट सिफारिशें और जानकारी प्रदान करता है"
                },
                {
                  title: "Real-Time Assistance",
                  titleHi: "वास्तविक समय सहायता",
                  desc: "24/7 availability with instant AI-powered responses to your queries",
                  descHi: "आपके प्रश्नों के लिए तत्काल AI-संचालित उत्तरों के साथ 24/7 उपलब्धता"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{feature.titleHi}</p>
                    <p className="text-muted-foreground mb-1">{feature.desc}</p>
                    <p className="text-sm text-muted-foreground/80">{feature.descHi}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Technology Stack</h2>
                  <p className="text-2xl font-semibold text-primary">प्रौद्योगिकी स्टैक</p>
                </div>
              </div>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Built with modern web technologies including React, TypeScript, and Tailwind CSS for the frontend, 
                  powered by Lovable Cloud (Supabase) for backend infrastructure, and leveraging Google's Gemini AI 
                  for intelligent multi-agent routing and natural language processing.
                </p>
                <p className="text-muted-foreground/80 leading-relaxed">
                  फ्रंटएंड के लिए React, TypeScript और Tailwind CSS सहित आधुनिक वेब तकनीकों के साथ निर्मित, 
                  बैकएंड इंफ्रास्ट्रक्चर के लिए Lovable Cloud द्वारा संचालित, और बुद्धिमान मल्टी-एजेंट रूटिंग 
                  के लिए Google के Gemini AI का लाभ उठाते हुए।
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-2xl font-semibold text-primary">शुरू करने के लिए तैयार हैं?</p>
            <p className="text-xl text-muted-foreground">
              Join thousands of farmers already benefiting from AI-powered agricultural assistance
            </p>
            <p className="text-lg text-muted-foreground/80">
              AI-संचालित कृषि सहायता से पहले से ही लाभान्वित हजारों किसानों में शामिल हों
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full mt-4"
            >
              Start Chatting Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-semibold">
            AI-Powered Multi-Agent Chatbot for Farmers | Minor Project BCA 307
          </p>
          <p className="text-muted-foreground/80 mb-3">
            किसानों के लिए AI-संचालित मल्टी-एजेंट चैटबॉट | लघु परियोजना BCA 307
          </p>
          <p className="text-sm text-muted-foreground">
            Empowering farmers with intelligent agricultural assistance
          </p>
          <p className="text-sm text-muted-foreground/80">
            बुद्धिमान कृषि सहायता के साथ किसानों को सशक्त बनाना
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
