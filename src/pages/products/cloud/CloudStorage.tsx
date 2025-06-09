
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Database, Lock, Share2, Folder } from "lucide-react";

const CloudStorage = () => {
  return (
    <div className="min-h-screen bg-cloud-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">Cloud & Hosting</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cloud Storage EB5</h1>
            <p className="text-xl text-white/90 mb-8">Secure cloud storage with intelligent data management.</p>
            <Button size="lg" className="bg-white text-sky-700 hover:bg-white/90">
              <Database className="mr-2 h-5 w-5" />
              Start Free
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Storage Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Lock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>End-to-End Encryption</CardTitle>
                <CardDescription>Secure data storage with advanced encryption</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Share2 className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>File Sharing</CardTitle>
                <CardDescription>Share files securely with team members</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Folder className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                <CardTitle>Smart Organization</CardTitle>
                <CardDescription>AI-powered file organization and search</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>Unlimited Storage</CardTitle>
                <CardDescription>Scalable storage for all your data needs</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudStorage;
