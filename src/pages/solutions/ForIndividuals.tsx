
import { Button } from "@/components/ui/button";

const ForIndividuals = () => {
  return (
    <div className="min-h-screen bg-solutions-individuals">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Individuals</h1>
            <p className="text-xl text-white/90 mb-8">Personal technology solutions for everyday life.</p>
            <Button size="lg">Explore Solutions</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForIndividuals;
