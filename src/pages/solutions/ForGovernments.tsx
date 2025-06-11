
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plane, Database, Shield, Code } from "lucide-react";

const ForGovernments = () => {
  return (
    <div className="min-h-screen bg-solutions-governments">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-500/20 text-amber-100 border-amber-400/30" variant="secondary">
              Government Digital Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Governments</h1>
            <p className="text-xl text-gray-200 mb-8">
              Digital transformation solutions for public sector and government institutions.
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-gray-900">
              Learn About Government Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Government Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Plane className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">Smart Airport Technology</CardTitle>
                <CardDescription>Advanced airport management systems</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Core Banking APIs</CardTitle>
                <CardDescription>Government financial infrastructure</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle className="text-red-800">Secure Communications</CardTitle>
                <CardDescription>Government-grade security systems</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">Developer Portal</CardTitle>
                <CardDescription>Public sector API integration</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForGovernments;
