
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DeveloperSdks = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Mobile & Super Apps</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Developer SDKs</h1>
            <p className="text-xl text-muted-foreground mb-8">Mobile development kits and tools for African markets.</p>
            <Button size="lg">Download SDKs</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeveloperSdks;
