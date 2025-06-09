
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Users, Trophy, Gamepad } from "lucide-react";

const MobileGaming = () => {
  return (
    <div className="min-h-screen bg-gaming-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Gaming & Entertainment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Live Mobile Gaming Hub</h1>
            <p className="text-xl text-white/90 mb-8">Interactive mobile gaming platform for African gamers.</p>
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              <Smartphone className="mr-2 h-5 w-5" />
              Start Gaming
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile Gaming Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Top Mobile Games</CardTitle>
                <CardDescription>Access hundreds of premium mobile games</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-pink-600 mb-4" />
                <CardTitle>Multiplayer</CardTitle>
                <CardDescription>Connect and play with friends in real-time</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-amber-500 mb-4" />
                <CardTitle>Tournaments</CardTitle>
                <CardDescription>Compete in daily tournaments and win prizes</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gamepad className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Controller Support</CardTitle>
                <CardDescription>Use your favorite gaming controller</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileGaming;
