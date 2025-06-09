
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Smartphone, ShoppingCart, ArrowRightLeft } from "lucide-react";

const Mobix = () => {
  return (
    <div className="min-h-screen bg-fintech-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Fintech & Banking</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Mobix Super App</h1>
            <p className="text-xl text-white/90 mb-8">
              All-in-one financial services platform combining payments, banking, investments, and more.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
              <Smartphone className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mobix Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                <CardTitle>Digital Payments</CardTitle>
                <CardDescription>Fast, secure payments to anyone, anywhere</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smartphone className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Mobile Banking</CardTitle>
                <CardDescription>Complete banking services in your pocket</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Marketplace</CardTitle>
                <CardDescription>Shop and pay directly within the app</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ArrowRightLeft className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                <CardTitle>Money Transfers</CardTitle>
                <CardDescription>Send money across Africa at low costs</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobix;
