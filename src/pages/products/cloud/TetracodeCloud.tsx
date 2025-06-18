
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Server, Database, Shield } from "lucide-react";

const TetracodeCloud = () => {
  return (
    <div className="min-h-screen bg-cloud-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Cloud & Hosting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Cloud</h1>
            <p className="text-xl text-white/90 mb-8">Enterprise cloud infrastructure platform for African businesses.</p>
            {/*<Button size="lg" className="bg-white text-sky-700 hover:bg-white/90">
              <Cloud className="mr-2 h-5 w-5" />
              Get Started
            </Button>*/}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Server className="h-12 w-12 mx-auto text-sky-600 mb-4" />
                <CardTitle>Virtual Servers</CardTitle>
                <CardDescription>Scalable compute instances on demand</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Managed Databases</CardTitle>
                <CardDescription>Fully managed database hosting services</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Kubernetes Service</CardTitle>
                <CardDescription>Managed container orchestration platform</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Security & IAM</CardTitle>
                <CardDescription>Advanced security features and access management</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeCloud;
