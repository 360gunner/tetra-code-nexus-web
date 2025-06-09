
import { Button } from "@/components/ui/button";

const ResellerProgram = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reseller Program</h1>
            <p className="text-xl text-muted-foreground mb-8">Partner with us to resell our solutions across Africa.</p>
            <Button size="lg">Join Program</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResellerProgram;
