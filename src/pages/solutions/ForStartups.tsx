
import { Button } from "@/components/ui/button";

const ForStartups = () => {
  return (
    <div className="min-h-screen bg-solutions-startups">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Startups</h1>
            <p className="text-xl text-white/90 mb-8">Startup-friendly tools and platforms for growth.</p>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStartups;
