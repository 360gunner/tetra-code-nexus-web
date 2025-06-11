
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, BarChart, Globe, Database } from "lucide-react";

const ForBusinesses = () => {
  return (
    <div className="min-h-screen bg-solutions-businesses">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-slate-600/20 text-slate-800 border-slate-300" variant="secondary">
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Solutions for Businesses</h1>
            <p className="text-xl text-gray-600 mb-8">
              Enterprise-grade infrastructure and productivity solutions for African businesses.
            </p>
            <Button size="lg" className="bg-slate-700 hover:bg-slate-800">
              Explore Business Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/85 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Enterprise Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-slate-600 mb-4" />
                <CardTitle className="text-slate-800">TETRACODE Meet</CardTitle>
                <CardDescription>Enterprise video conferencing platform</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">Task & Project Manager</CardTitle>
                <CardDescription>Enterprise project management suite</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-indigo-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle className="text-indigo-800">Web Hosting & CDN</CardTitle>
                <CardDescription>Scalable hosting infrastructure</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                <CardTitle className="text-emerald-800">Core Banking APIs</CardTitle>
                <CardDescription>Financial services infrastructure</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusinesses;
