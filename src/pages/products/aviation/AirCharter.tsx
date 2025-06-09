
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Package, Clock, MapPin } from "lucide-react";

const AirCharter = () => {
  return (
    <div className="min-h-screen bg-aviation-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Aviation & Aerospace</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Air Charter & Logistics</h1>
            <p className="text-xl text-white/90 mb-8">
              On-demand charter flights and cargo logistics across African routes.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
              <Plane className="mr-2 h-5 w-5" />
              Book Flight
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Air Charter Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Plane className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Executive Charters</CardTitle>
                <CardDescription>Private flights for business executives</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Package className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                <CardTitle>Cargo Services</CardTitle>
                <CardDescription>Express freight and cargo delivery</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>On-Demand Flights</CardTitle>
                <CardDescription>Flexible scheduling at your convenience</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>Pan-African Routes</CardTitle>
                <CardDescription>Extensive network across the continent</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirCharter;
