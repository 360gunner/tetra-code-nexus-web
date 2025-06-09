
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Database, Brain, ArrowRightLeft } from "lucide-react";

const MlApis = () => {
  return (
    <div className="min-h-screen bg-ai-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Machine Learning APIs</h1>
            <p className="text-xl text-white/90 mb-8">Ready-to-use ML APIs for developers.</p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
              <Code className="mr-2 h-5 w-5" />
              Explore APIs
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ML API Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Prediction APIs</CardTitle>
                <CardDescription>Predictive analytics for various data types</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Data Processing</CardTitle>
                <CardDescription>Process and analyze large datasets</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>SDKs & Libraries</CardTitle>
                <CardDescription>Developer tools for major languages</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ArrowRightLeft className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Model Training</CardTitle>
                <CardDescription>Custom model training and deployment</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MlApis;
