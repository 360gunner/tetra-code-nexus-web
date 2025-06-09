
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AirCharter = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Aviation & Aerospace</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TETRACODE Air Charter & Logistics</h1>
            <p className="text-xl text-muted-foreground mb-8">
              On-demand charter flights and cargo logistics across African routes.
            </p>
            <Button size="lg">Book Flight</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirCharter;
