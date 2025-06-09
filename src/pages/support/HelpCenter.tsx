
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">Find answers to common questions and get help with our products.</p>
            <Button size="lg">Browse Help Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
