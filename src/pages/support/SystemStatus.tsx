
import { Button } from "@/components/ui/button";

const SystemStatus = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">System Status</h1>
            <p className="text-xl text-muted-foreground mb-8">Real-time status of all 2mp Services platforms and APIs.</p>
            <Button size="lg">View Status</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemStatus;
