
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TetracodeOffice = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TETRACODE Office Suite</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete productivity suite with docs, sheets, presentations, and collaboration tools.
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeOffice;
