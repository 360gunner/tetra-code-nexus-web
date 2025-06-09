
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground mb-8">The journey of 2mp Services in transforming African technology landscape.</p>
            <Button size="lg">Read Our Story</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
