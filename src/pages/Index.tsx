
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Zap, Shield, Rocket } from "lucide-react";

const Index = () => {
  const productCategories = [
    {
      title: "Broadcasting & Media",
      description: "Live streaming, radio, and content distribution",
      icon: "📺",
      gradient: "broadcasting-gradient",
      href: "/products/broadcasting/tetracode-tv"
    },
    {
      title: "Aviation & Aerospace",
      description: "Drone services, flight management, and smart airport tech",
      icon: "🛫",
      gradient: "aviation-gradient",
      href: "/products/aviation/drone-services"
    },
    {
      title: "SaaS & Communication",
      description: "Video conferencing, office suite, and secure email",
      icon: "🧑‍💼",
      gradient: "saas-gradient",
      href: "/products/saas/tetracode-meet"
    },
    {
      title: "Fintech & Banking",
      description: "Super app platform and core banking solutions",
      icon: "💸",
      gradient: "fintech-gradient",
      href: "/products/fintech/mobix"
    },
    {
      title: "Cloud & Hosting",
      description: "IaaS/PaaS platform, hosting, and CDN services",
      icon: "☁️",
      gradient: "cloud-gradient",
      href: "/products/cloud/tetracode-cloud"
    },
    {
      title: "Gaming & Entertainment",
      description: "Cloud gaming, mobile hub, and developer tools",
      icon: "🎮",
      gradient: "gaming-gradient",
      href: "/products/gaming/cloud-gaming"
    },
    {
      title: "AI & Innovation",
      description: "Machine learning APIs, chatbots, and voice translation",
      icon: "🤖",
      gradient: "ai-gradient",
      href: "/products/ai/tetracode-ai"
    },
    {
      title: "Mobile & Super Apps",
      description: "App store and developer SDKs",
      icon: "📱",
      gradient: "mobile-gradient",
      href: "/products/mobile/app-store"
    }
  ];

  const stats = [
    /*{ value: "50M+", label: "Active Users", icon: Users },
    { value: "100+", label: "Countries", icon: Globe },*/
    { value: "99.9%", label: "Uptime", icon: Zap },
    { value: "24/7", label: "Support", icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 tech-gradient opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Technology & Innovation
              <span className="block tech-gradient bg-clip-text text-transparent">
                Across Africa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Comprehensive solutions spanning Broadcasting, Aviation, SaaS, Fintech, Cloud, Gaming, AI, and Mobile platforms. 
              Building the future of technology across the African continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to empower individuals, businesses, and governments across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Card key={category.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.gradient} flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={category.href}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Everyone</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored technology solutions for every need, from individual users to large enterprises and government institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>For Individuals</CardTitle>
                <CardDescription>
                  Personal productivity tools, entertainment platforms, and communication solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/solutions/individuals">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>For Businesses</CardTitle>
                <CardDescription>
                  Enterprise-grade solutions for digital transformation and operational efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/solutions/businesses">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>For Governments</CardTitle>
                <CardDescription>
                  Public sector digital transformation and citizen service platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/solutions/governments">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of organizations across Africa leveraging our technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
