
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Layers, Database, Gamepad } from "lucide-react";

const DeveloperTools = () => {
  return (
    <div className="min-h-screen bg-gaming-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Gaming & Entertainment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Developer Tools for Games</h1>
            <p className="text-xl text-white/90 mb-8">Complete game development toolkit and platform.</p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              <Code className="mr-2 h-5 w-5" />
              Get Tools
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Game Development Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Game Engine</CardTitle>
                <CardDescription>Powerful engine optimized for mobile games</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Layers className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Asset Store</CardTitle>
                <CardDescription>Access thousands of ready-to-use game assets</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription>Backend services for multiplayer games</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gamepad className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle>Testing Tools</CardTitle>
                <CardDescription>Analytics and playtesting solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperTools;
