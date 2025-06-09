
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation, Calendar, BarChart, Users } from "lucide-react";

const FlightManagement = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Aviation & Aerospace</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Flight Management Software</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive flight operations management system for airlines and aviation companies across Africa.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Navigation className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Flight Planning</CardTitle>
                <CardDescription>Advanced route optimization and planning tools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Scheduling</CardTitle>
                <CardDescription>Automated crew and aircraft scheduling</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Real-time operational insights and reporting</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Crew Management</CardTitle>
                <CardDescription>Complete crew lifecycle management</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightManagement;
