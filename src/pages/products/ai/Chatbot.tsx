
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Chatbot = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">AI & Innovation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Chatbot Platform</h1>
            <p className="text-xl text-muted-foreground mb-8">AI-powered chatbot platform for businesses.</p>
            <Button size="lg">Build Chatbot</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
