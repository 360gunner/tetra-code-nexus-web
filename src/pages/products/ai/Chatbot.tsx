
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, Brain, Globe, Layers } from "lucide-react";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-ai-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Chatbot Platform</h1>
            <p className="text-xl text-white/90 mb-8">AI-powered chatbot platform for businesses.</p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
              <MessageSquare className="mr-2 h-5 w-5" />
              Build Chatbot
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Chatbot Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Natural Language</CardTitle>
                <CardDescription>Advanced NLP for human-like conversations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Multi-language</CardTitle>
                <CardDescription>Support for African and global languages</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Layers className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Integrations</CardTitle>
                <CardDescription>Connect to your existing systems</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Conversation Designer</CardTitle>
                <CardDescription>Visual chatbot flow builder</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
