
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, Camera, MapPin, Shield, ArrowRight } from "lucide-react";

const DroneServices = () => {
  return (
    <div className="min-h-screen bg-aviation">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Aviation & Aerospace</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Drone & UAV Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Advanced unmanned aerial vehicle solutions for surveillance, delivery, mapping, and agricultural applications across Africa.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90">
              <Plane className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Camera className="h-12 w-12 mx-auto text-sky-600 mb-4" />
                <CardTitle>Aerial Photography</CardTitle>
                <CardDescription>High-resolution imaging and videography</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Mapping & Surveying</CardTitle>
                <CardDescription>Precision mapping and land surveying</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>Security Surveillance</CardTitle>
                <CardDescription>24/7 monitoring and security services</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Plane className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Delivery Services</CardTitle>
                <CardDescription>Last-mile delivery solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroneServices;
