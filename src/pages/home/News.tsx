
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "2mp Services Raises $50M Series B to Expand Across Africa",
      excerpt: "Leading technology company secures funding to accelerate growth and innovation across the continent.",
      category: "Funding",
      date: "December 15, 2024",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "TETRACODE AI Launches Advanced Machine Learning APIs",
      excerpt: "New AI services provide developers with powerful tools for natural language processing and computer vision.",
      category: "Product Launch",
      date: "December 10, 2024", 
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Partnership with African Development Bank Announced",
      excerpt: "Strategic collaboration to digitize banking infrastructure across 15 African countries.",
      category: "Partnership",
      date: "December 5, 2024",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "TETRACODE Cloud Achieves SOC 2 Type II Certification",
      excerpt: "Enhanced security standards ensure enterprise-grade protection for all customer data.",
      category: "Security",
      date: "November 28, 2024",
      image: "/placeholder.svg", 
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-news">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Latest News & Press
            </h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest developments, product launches, and company milestones from 2mp Services.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    Read More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Media Resources</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download our media kit for logos, brand guidelines, and high-resolution images.
            </p>
            <Button asChild size="lg">
              <Link to="/about/media-kit">
                Download Media Kit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
