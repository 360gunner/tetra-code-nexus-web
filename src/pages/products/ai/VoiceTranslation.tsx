
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const VoiceTranslation = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Voice + Translation APIs</h1>
            <p className="text-xl text-muted-foreground mb-8">Real-time voice translation for African languages.</p>
            <Button size="lg">Try Translation</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceTranslation;
