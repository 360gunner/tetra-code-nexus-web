
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Shield, Layers } from "lucide-react";

const CoreBanking = () => {
  return (
    <div className="min-h-screen bg-fintech-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Fintech & Banking</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Core Banking</h1>
            <p className="text-xl text-white/90 mb-8">
              Modern core banking system with Open Banking APIs for financial institutions.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
              <Code className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Banking Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                <CardTitle>Account System</CardTitle>
                <CardDescription>Comprehensive account management system</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Open APIs</CardTitle>
                <CardDescription>Standardized APIs for seamless integration</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>Security</CardTitle>
                <CardDescription>Bank-grade security and compliance</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Layers className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Modular Architecture</CardTitle>
                <CardDescription>Scalable design for growing institutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreBanking;
