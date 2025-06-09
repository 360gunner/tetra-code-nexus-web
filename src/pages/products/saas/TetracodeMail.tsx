
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TetracodeMail = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">TETRACODE Mail</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Secure email platform with advanced encryption and privacy features for businesses.
            </p>
            <Button size="lg">Create Account</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeMail;
