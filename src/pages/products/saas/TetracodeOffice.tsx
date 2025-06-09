
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Table, Monitor, Users } from "lucide-react";

const TetracodeOffice = () => {
  return (
    <div className="min-h-screen bg-saas-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Office Suite</h1>
            <p className="text-xl text-white/90 mb-8">
              Complete productivity suite with docs, sheets, presentations, and collaboration tools.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">Get Started</Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Productivity Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>TETRACODE Docs</CardTitle>
                <CardDescription>Create and edit documents with real-time collaboration</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Table className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>TETRACODE Sheets</CardTitle>
                <CardDescription>Powerful spreadsheets with advanced formulas</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                <CardTitle>TETRACODE Slides</CardTitle>
                <CardDescription>Create stunning presentations that impress</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>TETRACODE Teams</CardTitle>
                <CardDescription>Collaborate with your team in real-time</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeOffice;
