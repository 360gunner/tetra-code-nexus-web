
import { Button } from "@/components/ui/button";

const ContactSupport = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Support</h1>
            <p className="text-xl text-muted-foreground mb-8">Get technical support from our expert team.</p>
            <Button size="lg">Contact Support</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;
