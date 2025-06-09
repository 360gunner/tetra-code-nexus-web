
import { Button } from "@/components/ui/button";

const ForBusinesses = () => {
  return (
    <div className="min-h-screen bg-solutions-businesses">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Businesses</h1>
            <p className="text-xl text-white/90 mb-8">Enterprise solutions for African businesses.</p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusinesses;
