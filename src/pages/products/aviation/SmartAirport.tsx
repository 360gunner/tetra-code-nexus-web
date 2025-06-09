
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SmartAirport = () => {
  return (
    <div className="min-h-screen bg-aviation-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Aviation & Aerospace</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Smart Airport Technology</h1>
            <p className="text-xl text-white/90 mb-8">
              IoT-enabled airport management systems for enhanced passenger experience and operational efficiency.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Innovative Airport Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Passenger Flow Optimization</CardTitle>
                <CardDescription>Smart sensors and AI algorithms to reduce congestion and waiting times</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Automated Security</CardTitle>
                <CardDescription>Advanced screening technologies with biometric verification</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Baggage Tracking</CardTitle>
                <CardDescription>Real-time RFID tracking for luggage throughout the airport journey</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAirport;
