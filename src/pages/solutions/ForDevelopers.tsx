
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Brain, Camera, Book } from "lucide-react";

const ForDevelopers = () => {
  return (
    <div className="min-h-screen bg-solutions-developers">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-500/20 text-purple-200 border-purple-400/30" variant="secondary">
              Developer Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Developers</h1>
            <p className="text-xl text-gray-200 mb-8">
              Development tools, APIs, and platforms designed for African developers and tech teams.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Building
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Developer Tools & APIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-gray-800 border-cyan-500/30 hover:border-cyan-400 transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-cyan-400 mb-4" />
                <CardTitle className="text-cyan-300">Developer SDKs</CardTitle>
                <CardDescription className="text-gray-300">Comprehensive development kits</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gray-800 border-purple-500/30 hover:border-purple-400 transition-colors">
              <CardHeader>
                <Book className="h-12 w-12 mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-purple-300">API Documentation</CardTitle>
                <CardDescription className="text-gray-300">Complete API reference guides</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gray-800 border-blue-500/30 hover:border-blue-400 transition-colors">
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto text-blue-400 mb-4" />
                <CardTitle className="text-blue-300">Machine Learning APIs</CardTitle>
                <CardDescription className="text-gray-300">AI/ML services and models</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center bg-gray-800 border-green-500/30 hover:border-green-400 transition-colors">
              <CardHeader>
                <Camera className="h-12 w-12 mx-auto text-green-400 mb-4" />
                <CardTitle className="text-green-300">Recognition APIs</CardTitle>
                <CardDescription className="text-gray-300">Text and image recognition</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForDevelopers;
