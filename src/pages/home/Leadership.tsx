
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Amara Okafor",
      position: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in African tech markets and digital transformation.",
      image: "/placeholder.svg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Kwame Asante",
      position: "Chief Technology Officer", 
      bio: "Former Google engineer specializing in cloud infrastructure and AI systems.",
      image: "/placeholder.svg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "Fatima Al-Rashid",
      position: "Chief Financial Officer",
      bio: "Former McKinsey partner with expertise in fintech and emerging markets.",
      image: "/placeholder.svg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    },
    {
      name: "David Mwangi",
      position: "Chief Operating Officer",
      bio: "Operations specialist with deep experience in scaling tech companies across Africa.",
      image: "/placeholder.svg",
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Experienced leaders driving innovation and transformation across Africa's technology landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mb-4">
                    <span className="text-4xl">{leader.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-2xl">{leader.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{leader.position}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{leader.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for talented individuals to join our mission of transforming Africa through technology.
            </p>
            <Button asChild size="lg">
              <Link to="/about/team-careers">
                View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
