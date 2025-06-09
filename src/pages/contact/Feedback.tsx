
import { Button } from "@/components/ui/button";

const Feedback = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Feedback Form</h1>
            <p className="text-xl text-muted-foreground mb-8">Share your feedback and suggestions with us.</p>
            <Button size="lg">Submit Feedback</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
