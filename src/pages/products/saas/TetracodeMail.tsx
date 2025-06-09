
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Lock, Cloud, Search } from "lucide-react";

const TetracodeMail = () => {
  return (
    <div className="min-h-screen bg-saas-enhanced">
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">SaaS & Communication</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">TETRACODE Mail</h1>
            <p className="text-xl text-white/90 mb-8">
              Secure email platform with advanced encryption and privacy features for businesses.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
              <Mail className="mr-2 h-5 w-5" />
              Create Account
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Secure Email Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Lock className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>End-to-End Encryption</CardTitle>
                <CardDescription>Your emails are only readable by you and your recipients</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Cloud className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <CardTitle>50GB Storage</CardTitle>
                <CardDescription>Ample space for all your email communications</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Search className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Advanced Search</CardTitle>
                <CardDescription>Find any email instantly with powerful search tools</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Custom Domain</CardTitle>
                <CardDescription>Use your own domain for professional email addresses</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TetracodeMail;
