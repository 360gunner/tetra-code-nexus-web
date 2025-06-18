
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Users, Mic, Share2 } from "lucide-react";

const TetracodeMeet = () => {
  return (
    <div className="min-h-screen bg-saas-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Meet</h1>
            <p className="text-xl text-white/90 mb-8">
              Secure video conferencing platform designed for African businesses with offline-first capabilities.
            </p>
            {/*<Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
              <Video className="mr-2 h-5 w-5" />
              Start Meeting
            </Button>*/}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>HD Video</CardTitle>
                <CardDescription>Crystal clear video with low bandwidth optimization</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Up to 100 Participants</CardTitle>
                <CardDescription>Host large meetings with many attendees</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mic className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Noise Cancellation</CardTitle>
                <CardDescription>Advanced audio filtering for clear communication</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Share2 className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Screen Sharing</CardTitle>
                <CardDescription>Share your screen with presentation mode</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeMeet;
