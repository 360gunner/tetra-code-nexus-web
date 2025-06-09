
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MobileGaming = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Gaming & Entertainment</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Live Mobile Gaming Hub</h1>
            <p className="text-xl text-muted-foreground mb-8">Interactive mobile gaming platform for African gamers.</p>
            <Button size="lg">Start Gaming</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileGaming;
