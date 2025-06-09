
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, Award, TrendingUp } from "lucide-react";

const Overview = () => {
  return (
    <div className="min-h-screen bg-overview">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pioneering Technology Innovation Across Africa
            </h1>
            <p className="text-xl text-white/90 mb-8">
              2mp Services stands at the forefront of technological advancement in Africa, delivering comprehensive solutions that empower communities, businesses, and governments to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90">
                <Link to="/about/our-story">
                  Our Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                <Link to="/contact/request-demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 border-t border-white/20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-white">50M+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-white">54</div>
              <div className="text-white/80">African Countries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-white">15+</div>
              <div className="text-white/80">Industry Awards</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 text-white">300%</div>
              <div className="text-white/80">Growth YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Pillars */}
      <section className="py-20 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on strong foundations that drive our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="w-20 h-20 mx-auto tech-gradient rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Continuously pushing the boundaries of what's possible with cutting-edge technology solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="w-20 h-20 mx-auto tech-gradient rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🌍</span>
                </div>
                <CardTitle>Impact</CardTitle>
                <CardDescription>
                  Creating meaningful change that transforms communities and drives economic growth across Africa.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow backdrop-blur-sm bg-card/80">
              <CardHeader>
                <div className="w-20 h-20 mx-auto tech-gradient rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <CardTitle>Partnership</CardTitle>
                <CardDescription>
                  Building strong relationships with stakeholders to create sustainable, collaborative solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Visionary Leadership
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our leadership team brings decades of combined experience in technology, business, and African markets.
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90">
              <Link to="/leadership">
                Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
