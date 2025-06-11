
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cloud, Video, Briefcase, Smartphone } from "lucide-react";

const ForStartups = () => {
  return (
    <div className="min-h-screen bg-solutions-startups">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500/20 text-blue-800 border-blue-300" variant="secondary">
              Startup Acceleration Platform
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Solutions for Startups</h1>
            <p className="text-xl text-gray-600 mb-8">
              Startup-friendly tools and platforms designed to accelerate growth and innovation.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white">
              Accelerate Your Startup
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/85 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Startup Growth Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">TETRACODE Cloud</CardTitle>
                <CardDescription>Scalable cloud infrastructure for startups</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-emerald-200 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Smartphone className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">App Store Platform</CardTitle>
                <CardDescription>Launch and distribute your mobile apps</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-purple-200 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">TETRACODE Meet</CardTitle>
                <CardDescription>Team collaboration and communication</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-pink-200 hover:shadow-lg transition-all hover:scale-105">
              <CardHeader>
                <Briefcase className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle className="text-pink-800">Office Suite</CardTitle>
                <CardDescription>Complete productivity workspace</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStartups;
