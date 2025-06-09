
import { Button } from "@/components/ui/button";

const ForEducation = () => {
  return (
    <div className="min-h-screen bg-solutions-education">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Education</h1>
            <p className="text-xl text-white/90 mb-8">Educational technology for schools and universities.</p>
            <Button size="lg">Explore EdTech</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEducation;
