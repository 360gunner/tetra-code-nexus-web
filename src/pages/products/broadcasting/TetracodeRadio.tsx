
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Radio, Mic, Headphones, Signal, ArrowRight } from "lucide-react";

const TetracodeRadio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-red-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Broadcasting & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TETRACODE Radio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Digital radio broadcasting platform connecting communities across Africa with crystal-clear audio streaming and interactive features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Radio className="mr-2 h-5 w-5" />
                Listen Live
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact/request-demo">Start Broadcasting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Radio Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional broadcasting tools designed for African radio stations and podcasters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
                  <Mic className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Live Broadcasting</CardTitle>
                <CardDescription>
                  Professional-grade live streaming with automated scheduling and playlist management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                  <Headphones className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Podcast Platform</CardTitle>
                <CardDescription>
                  Complete podcast hosting solution with analytics and monetization features.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mb-4">
                  <Signal className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Network Coverage</CardTitle>
                <CardDescription>
                  Extensive coverage across Africa with optimized delivery for low-bandwidth areas.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Launch Your Radio Station
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to start broadcasting to audiences across Africa.
            </p>
            <Button size="lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeRadio;
