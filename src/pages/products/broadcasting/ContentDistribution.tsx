
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Zap, Shield, BarChart, ArrowRight } from "lucide-react";

const ContentDistribution = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Broadcasting & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Content Distribution
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Global content delivery network optimized for African markets with intelligent caching and edge computing.
            </p>
            <Button size="lg">
              Start Distributing <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>Worldwide distribution network</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle>Fast Delivery</CardTitle>
                <CardDescription>Lightning-fast content delivery</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Secure</CardTitle>
                <CardDescription>Enterprise-grade security</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed performance insights</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentDistribution;
