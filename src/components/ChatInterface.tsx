import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Sprout, TrendingUp, Mic, MicOff } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
  agent?: "agronomy" | "finance";
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "नमस्ते! Hello! I'm your AI farming assistant powered by intelligent agents. I can help you with crop cultivation, pest management, soil health, weather updates, market prices, government schemes, and financial planning. Please enter your PIN code and ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [language, setLanguage] = useState<"en" | "hi" | "pa" | "bn" | "ur" | "mr">("en");
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    if (!pinCode) {
      toast.error("Please enter your PIN code for location-based assistance");
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";
    let agentType: "agronomy" | "finance" | undefined;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: [...messages, userMessage],
            pinCode,
            language,
          }),
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Too many requests. Please try again in a moment.");
          setIsLoading(false);
          return;
        }
        if (response.status === 402) {
          toast.error("AI service unavailable. Please try again later.");
          setIsLoading(false);
          return;
        }
        throw new Error("Failed to get response");
      }

      // Get agent type from headers
      agentType = response.headers.get("X-Agent-Type") as "agronomy" | "finance";

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      if (!reader) {
        throw new Error("No response body");
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        let newlineIndex: number;

        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, newlineIndex);
          buffer = buffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) =>
                    i === prev.length - 1
                      ? { ...m, content: assistantContent, agent: agentType }
                      : m
                  );
                }
                return [
                  ...prev,
                  { role: "assistant", content: assistantContent, agent: agentType },
                ];
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to get response. Please try again.");
      setMessages((prev) => prev.slice(0, -1)); // Remove user message on error
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startVoiceRecording = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error("Voice recognition not supported in your browser");
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Map language codes to speech recognition codes
    const langMap: Record<string, string> = {
      en: "en-IN",
      hi: "hi-IN",
      pa: "pa-IN",
      bn: "bn-IN",
      ur: "ur-IN",
      mr: "mr-IN"
    };

    recognition.lang = langMap[language];
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
      toast.info("Listening...");
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      toast.success("Voice captured!");
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
      toast.error("Failed to capture voice. Please try again.");
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopVoiceRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <section id="chat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your Conversation
            </h2>
            <p className="text-xl text-muted-foreground">
              Ask anything about farming, weather, markets, or government schemes
            </p>
          </div>

          <Card className="shadow-xl border-border">
            <CardHeader className="border-b border-border bg-muted/30">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <CardTitle className="text-2xl">AI Farm Assistant</CardTitle>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant={language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("en")}
                    className="rounded-full"
                  >
                    English
                  </Button>
                  <Button
                    variant={language === "hi" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("hi")}
                    className="rounded-full"
                  >
                    हिंदी
                  </Button>
                  <Button
                    variant={language === "pa" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("pa")}
                    className="rounded-full"
                  >
                    ਪੰਜਾਬੀ
                  </Button>
                  <Button
                    variant={language === "bn" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("bn")}
                    className="rounded-full"
                  >
                    বাংলা
                  </Button>
                  <Button
                    variant={language === "ur" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("ur")}
                    className="rounded-full"
                  >
                    اردو
                  </Button>
                  <Button
                    variant={language === "mr" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setLanguage("mr")}
                    className="rounded-full"
                  >
                    मराठी
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Input
                  type="text"
                  placeholder="Enter your PIN code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  maxLength={6}
                  className="max-w-xs"
                />
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Messages */}
              <div className="space-y-4 mb-6 max-h-[500px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.role === "user"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-5 h-5" />
                      ) : (
                        <Bot className="w-5 h-5" />
                      )}
                    </div>
                    <div
                      className={`flex-1 rounded-2xl p-4 ${
                        message.role === "user"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.agent && (
                        <Badge
                          variant="outline"
                          className="mb-2"
                        >
                          {message.agent === "agronomy" ? (
                            <>
                              <Sprout className="w-3 h-3 mr-1" />
                              Agronomy Agent
                            </>
                          ) : (
                            <>
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Finance Agent
                            </>
                          )}
                        </Badge>
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex-1 rounded-2xl p-4 bg-muted">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="w-2 h-2 rounded-full bg-primary animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={
                    language === "en"
                      ? "Ask about crops, weather, prices, or schemes..."
                      : language === "hi"
                      ? "फसलों, मौसम, कीमतों या योजनाओं के बारे में पूछें..."
                      : language === "pa"
                      ? "ਫ਼ਸਲਾਂ, ਮੌਸਮ, ਕੀਮਤਾਂ ਜਾਂ ਯੋਜਨਾਵਾਂ ਬਾਰੇ ਪੁੱਛੋ..."
                      : language === "bn"
                      ? "ফসল, আবহাওয়া, দাম বা প্রকল্প সম্পর্কে জিজ্ঞাসা করুন..."
                      : language === "ur"
                      ? "فصلوں، موسم، قیمتوں یا منصوبوں کے بارے میں پوچھیں..."
                      : "पिके, हवामान, किंमती किंवा योजनांबद्दल विचारा..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading || isRecording}
                  className="flex-1"
                />
                {(language === "en" || language === "hi") && (
                  <Button
                    onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                    disabled={isLoading}
                    size="icon"
                    variant={isRecording ? "destructive" : "outline"}
                    className="rounded-full w-12 h-12"
                  >
                    {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </Button>
                )}
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className="rounded-full w-12 h-12"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
