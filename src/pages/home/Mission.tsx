
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Globe } from "lucide-react";

const Mission = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-muted-foreground">
              Driving technological transformation across Africa through innovative solutions that empower communities, businesses, and governments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto tech-gradient rounded-full flex items-center justify-center mb-4">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">
                  To democratize access to cutting-edge technology across Africa by providing comprehensive, scalable, and innovative solutions that bridge the digital divide and accelerate economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto tech-gradient rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground">
                  To become Africa's leading technology ecosystem, fostering innovation, entrepreneurship, and digital transformation that positions the continent as a global technology powerhouse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  Commitment to delivering the highest quality solutions and exceeding expectations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Inclusivity</CardTitle>
                <CardDescription>
                  Building technology that serves everyone, regardless of background or circumstance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  Pioneering new technologies and approaches to solve complex challenges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <CardTitle>Collaboration</CardTitle>
                <CardDescription>
                  Working together with partners and communities to achieve shared goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Our Commitment to Africa</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that Africa's future lies in technology and innovation. Our commitment goes beyond providing solutions – we're invested in building local capacity, fostering entrepreneurship, and creating sustainable economic opportunities across the continent.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-muted-foreground">Local Jobs Created</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Startups Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                    <div className="text-muted-foreground">Economic Impact</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
