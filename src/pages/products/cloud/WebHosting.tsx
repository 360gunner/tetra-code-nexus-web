
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WebHosting = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Cloud & Hosting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Hosting</h1>
            <p className="text-xl text-muted-foreground mb-8">Reliable web hosting solutions optimized for African websites.</p>
            <Button size="lg">Choose Plan</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebHosting;
