
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Brain, Database, Cloud } from "lucide-react";

const TetracodeAi = () => {
  return (
    <div className="min-h-screen bg-ai-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE AI</h1>
            <p className="text-xl text-white/90 mb-8">Cloud AI services platform with machine learning capabilities.</p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
              <Bot className="mr-2 h-5 w-5" />
              Try AI Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Neural Networks</CardTitle>
                <CardDescription>Advanced neural network models and APIs</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Machine Learning</CardTitle>
                <CardDescription>Train and deploy custom ML models</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Bot className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>AI Assistants</CardTitle>
                <CardDescription>Conversational AI for business applications</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>AI Infrastructure</CardTitle>
                <CardDescription>Scalable cloud infrastructure for AI workloads</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeAi;
