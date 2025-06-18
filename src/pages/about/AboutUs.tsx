
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe } from "lucide-react";

const AboutUs = () => {
  const leadership = [
    {
      name: "Bilel Moussaoui",
      title: "Chairman of the Board",
      description: "Visionary leader driving strategic direction and innovation across all business units."
    },
    {
      name: "Zakaria Deriche",
      title: "Software Architect",
      description: "Technical excellence and architectural leadership for our cutting-edge solutions."
    },
    {
      name: "Rachid Dahmane",
      title: "Business Development Manager",
      description: "Expanding partnerships and driving growth across African markets."
    },
    {
      name: "Hossem Eddine Kentache",
      title: "Chief Technology Officer",
      description: "Leading technological innovation and digital transformation initiatives."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">
              About 2MP Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Africa Through Technology
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We are a leading technology company dedicated to providing innovative solutions 
              that empower individuals, businesses, and governments across Africa to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                  <CardDescription>
                    To democratize access to world-class technology solutions and bridge the digital divide 
                    across Africa by providing innovative, scalable, and affordable services.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                  <CardDescription>
                    To become Africa's premier technology solutions provider, fostering digital transformation 
                    and economic growth across the continent.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Founded with the belief that technology should serve everyone, 2MP Services has grown from 
                a small team of passionate engineers to a comprehensive technology solutions provider. 
                We specialize in broadcasting & media, aviation & aerospace, SaaS & communication, 
                fintech & banking, cloud & hosting, gaming & entertainment, AI & innovation, and mobile & super apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Meet the visionary leaders driving innovation and growth at 2MP Services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {leader.title}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We continuously push the boundaries of technology to create solutions that matter.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We strive for the highest quality in everything we do, from code to customer service.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Impact</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We measure our success by the positive impact we have on our communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
