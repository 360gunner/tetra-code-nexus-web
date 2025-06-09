
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Tablet, Download, ArrowRight } from "lucide-react";

const MediaPlayer = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Broadcasting & Media</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cross-Platform Media Player
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Universal media player supporting all formats with advanced features for seamless playback across devices.
            </p>
            <Button size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Desktop</CardTitle>
                <CardDescription>Windows, macOS, and Linux support</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Mobile</CardTitle>
                <CardDescription>iOS and Android applications</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Tablet className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Web</CardTitle>
                <CardDescription>Browser-based player</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPlayer;
