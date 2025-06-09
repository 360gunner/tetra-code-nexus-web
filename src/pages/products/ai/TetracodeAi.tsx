
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TetracodeAi = () => {
  return (
    <div className="min-h-screen bg-ai">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE AI</h1>
            <p className="text-xl text-white/90 mb-8">Cloud AI services platform with machine learning capabilities.</p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-white/90">Try AI Services</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeAi;
