
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, Users, Globe, Zap, ArrowRight } from "lucide-react";

const TetracodeTv = () => {
  return (
    <div className="min-h-screen bg-broadcasting-tv">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Broadcasting & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              TETRACODE TV
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Next-generation streaming platform delivering live and on-demand content across Africa with adaptive streaming technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-white/90">
                <Play className="mr-2 h-5 w-5" />
                Start Streaming
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-orange-900">
                <Link to="/contact/request-demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced streaming technology optimized for African internet infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Adaptive Streaming</CardTitle>
                <CardDescription>
                  Automatically adjusts quality based on bandwidth for smooth playback across all devices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Live Broadcasting</CardTitle>
                <CardDescription>
                  Real-time streaming capabilities with interactive features and chat integration.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Content Delivery</CardTitle>
                <CardDescription>
                  Global CDN network ensures fast content delivery across African markets.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10M+</div>
              <div className="text-muted-foreground">Active Viewers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">50K+</div>
              <div className="text-muted-foreground">Content Creators</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Live Streaming</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Broadcasting Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of content creators reaching audiences across Africa.
            </p>
            <Button size="lg" className="bg-white text-orange-900 hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeTv;
