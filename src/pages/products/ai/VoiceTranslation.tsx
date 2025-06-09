
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Globe, ArrowRightLeft, Headphones } from "lucide-react";

const VoiceTranslation = () => {
  return (
    <div className="min-h-screen bg-ai-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Voice + Translation APIs</h1>
            <p className="text-xl text-white/90 mb-8">Real-time voice translation for African languages.</p>
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-white/90">
              <Headphones className="mr-2 h-5 w-5" />
              Try Translation
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Voice & Translation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Mic className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Speech Recognition</CardTitle>
                <CardDescription>Convert spoken language to text</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>African Languages</CardTitle>
                <CardDescription>Support for 100+ African languages</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ArrowRightLeft className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Real-time Translation</CardTitle>
                <CardDescription>Instant translation between languages</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Headphones className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Text-to-Speech</CardTitle>
                <CardDescription>Natural sounding voice synthesis</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceTranslation;
