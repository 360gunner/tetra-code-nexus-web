
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Video, Cloud, Briefcase, Globe } from "lucide-react";

const ForEducation = () => {
  return (
    <div className="min-h-screen bg-solutions-education">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500/20 text-orange-800 border-orange-300" variant="secondary">
              Educational Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solutions for Education</h1>
            <p className="text-xl text-gray-200 mb-8">
              Educational technology solutions for schools, universities, and learning institutions.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white">
              Explore EdTech Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/85 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Educational Technology Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Video className="h-12 w-12 mx-auto text-orange-600 mb-4" />
                <CardTitle className="text-orange-800">TETRACODE Meet</CardTitle>
                <CardDescription>Virtual classrooms and online learning</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">Cloud Storage EB5</CardTitle>
                <CardDescription>Secure student and faculty file storage</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">Office Suite</CardTitle>
                <CardDescription>Collaborative educational workspace</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-green-800">Content Distribution</CardTitle>
                <CardDescription>Digital learning content delivery</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEducation;
