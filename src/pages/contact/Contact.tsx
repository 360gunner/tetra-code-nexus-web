
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    const subject = "Inquiry from 2MP Services Website";
    const body = "Hello,\n\nI would like to inquire about your services.\n\nBest regards,";
    const mailtoLink = `mailto:services@2mp-dz.com?cc=deriche@2mp-dz.cm,rdahmane@2mp-dz.com,billal@2mp-dz.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/20" variant="secondary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact 2MP Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your business with cutting-edge technology? 
              Our team is here to help you succeed. Get in touch today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Reach Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Email Contact */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>
                    Send us an email and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    services@2mp-dz.com
                  </p>
                </CardContent>
              </Card>

              {/* Phone Contact */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>
                    Speak directly with our team during business hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full"
                  >
                    <a href="tel:+21325283946">
                      <Phone className="mr-2 h-4 w-4" />
                      +213 25 283 946
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full"
                  >
                    <a href="tel:+2135554977393">
                      <Phone className="mr-2 h-4 w-4" />
                      +213 555 49 77 93
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>
                    Our team is available during these hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sunday - Friday:</span>
                      <span>8:00 AM - 4:30 PM</span>
                    </div>
                  </div>
                  <Badge className="mt-4" variant="secondary">GMT+1 (Algeria Time)</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Local Expertise, Global Standards
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We understand the African market while delivering world-class technology solutions 
                  that meet international standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center">
                  <Send className="h-5 w-5 text-green-600 mr-2" />
                  Comprehensive Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From broadcasting to fintech, cloud to AI - we offer end-to-end technology 
                  solutions for every business need.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you're an individual, business, government, or startup - we have the right solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleEmailClick}
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Us an Email
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                >
                  <a href="tel:+21325283946">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
