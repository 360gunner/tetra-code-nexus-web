
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Globe, Zap, Shield, BarChart } from "lucide-react";

const CdnServices = () => {
  return (
    <div className="min-h-screen bg-cloud-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Cloud & Hosting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">CDN Services</h1>
            <p className="text-xl text-white/90 mb-8">Global content delivery network for faster website performance.</p>
            <Button size="lg" className="bg-white text-sky-700 hover:bg-white/90">
              <Globe className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">CDN Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-amber-500 mb-4" />
                <CardTitle>Speed Optimization</CardTitle>
                <CardDescription>Faster content delivery worldwide</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Global Edge Network</CardTitle>
                <CardDescription>Content cached at edge locations worldwide</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>DDoS Protection</CardTitle>
                <CardDescription>Built-in security against attacks</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed insights on content delivery</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CdnServices;
