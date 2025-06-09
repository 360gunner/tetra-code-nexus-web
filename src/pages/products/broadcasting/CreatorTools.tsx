
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Edit, DollarSign, Users, ArrowRight } from "lucide-react";

const CreatorTools = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Broadcasting & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Creator Monetization Tools
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete suite of tools for content creators to build, grow, and monetize their audience across Africa.
            </p>
            <Button size="lg">
              Start Creating <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle>Content Studio</CardTitle>
                <CardDescription>Professional editing and production tools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Edit className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Live Streaming</CardTitle>
                <CardDescription>Interactive live streaming platform</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Monetization</CardTitle>
                <CardDescription>Multiple revenue streams and analytics</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Community</CardTitle>
                <CardDescription>Audience engagement and growth tools</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorTools;
