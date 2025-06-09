
import { Button } from "@/components/ui/button";

const SdksPlugins = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SDKs & Plugins</h1>
            <p className="text-xl text-muted-foreground mb-8">Development kits and plugins for easy integration.</p>
            <Button size="lg">Download SDKs</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SdksPlugins;
