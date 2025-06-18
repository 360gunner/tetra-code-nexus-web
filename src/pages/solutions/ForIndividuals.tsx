
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cloud, Mail, Radio, Wallet } from "lucide-react";

const ForIndividuals = () => {
  return (
    <div className="min-h-screen bg-solutions-individuals">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-600/20 text-blue-800 border-blue-300" variant="secondary">
              Personal Technology Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Individuals</h1>
            <p className="text-xl text-gray-200 mb-8">
              Personal technology solutions for everyday life, productivity, and digital convenience.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Personal Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Personal Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Radio className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">TETRACODE Radio</CardTitle>
                <CardDescription>Personal digital radio streaming platform</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wallet className="h-12 w-12 mx-auto text-teal-600 mb-4" />
                <CardTitle className="text-teal-800">Mobix Super App</CardTitle>
                <CardDescription>All-in-one personal finance and services</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">TETRACODE Mail</CardTitle>
                <CardDescription>Secure personal email services</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-sky-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-sky-600 mb-4" />
                <CardTitle className="text-sky-800">Cloud Storage EB5</CardTitle>
                <CardDescription>Personal cloud storage and sync</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForIndividuals;
