
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gamepad, Cloud, Monitor, Zap } from "lucide-react";

const CloudGaming = () => {
  return (
    <div className="min-h-screen bg-gaming-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Gaming & Entertainment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Cloud Gaming</h1>
            <p className="text-xl text-white/90 mb-8">Stream games directly to any device with our cloud gaming platform.</p>
            {/*<Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              <Gamepad className="mr-2 h-5 w-5" />
              Play Now
            </Button>*/}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Gaming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Stream Anywhere</CardTitle>
                <CardDescription>Play AAA games on any device</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gamepad className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle>Huge Game Library</CardTitle>
                <CardDescription>Access hundreds of premium games</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>4K HDR Streaming</CardTitle>
                <CardDescription>Enjoy stunning visual quality</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-amber-500 mb-4" />
                <CardTitle>Low Latency</CardTitle>
                <CardDescription>Optimized for African internet connections</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudGaming;
