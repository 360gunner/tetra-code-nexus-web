
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Zap, Cloud, Server } from "lucide-react";

const WebHosting = () => {
  return (
    <div className="min-h-screen bg-cloud-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Cloud & Hosting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Web Hosting</h1>
            <p className="text-xl text-white/90 mb-8">Reliable web hosting solutions optimized for African websites.</p>
            <Button size="lg" className="bg-white text-sky-700 hover:bg-white/90">
              <Globe className="mr-2 h-5 w-5" />
              Choose Plan
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hosting Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-amber-500 mb-4" />
                <CardTitle>Standard Hosting</CardTitle>
                <CardDescription>Perfect for small websites and blogs</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Server className="h-12 w-12 mx-auto text-sky-600 mb-4" />
                <CardTitle>Premium Hosting</CardTitle>
                <CardDescription>Optimized for business websites and e-commerce</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Enterprise Hosting</CardTitle>
                <CardDescription>High-performance hosting for large applications</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;
