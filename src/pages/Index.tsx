import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Agents } from "@/components/Agents";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={scrollToChat} />
      <Features />
      <Agents />
      <div ref={chatRef}>
        <ChatInterface />
      </div>
      
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

export default Index;
