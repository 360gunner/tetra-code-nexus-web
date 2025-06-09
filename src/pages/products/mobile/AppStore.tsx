
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AppStore = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Mobile & Super Apps</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TETRACODE App Store</h1>
            <p className="text-xl text-muted-foreground mb-8">Alternative app store for African mobile applications.</p>
            <Button size="lg">Browse Apps</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppStore;
